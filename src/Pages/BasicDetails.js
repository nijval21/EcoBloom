import React, { useEffect, useState } from "react";
import login from "../assets/images/login.png";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { getFunctions, httpsCallable } from "firebase/functions";
import Login_Card from "./Create_Account_Card.js";
import Terms_Conditions from "./Terms_Conditions.js";
import logo from "../assets/images/logo.png";
import { FaInfoCircle } from "react-icons/fa";

export default function BasicDetails({
    nextStep,
    prevStep,
    handleChange,
    values,
}) {
    const { email, password, name, confirmPassword, stepCount } = values;
    const formBasic = { email, password, name, confirmPassword };
    const [signUpClicked, setSignUpClicked] = useState(false);
    const [status, setStatus] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    function emailSignUp(event) {
        event.preventDefault();
        setSignUpClicked(true);
        setStatus("none");
        // let files = document.querySelector('input[type="file"]').files;
        let formData = new FormData(document.getElementById("emailSignUp"));

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed Up
                console.log("User in Firebase: ", userCredential.user);
                const user = userCredential.user;
                const userData = {
                    role: "user",
                    firebaseId: user.uid,
                }; // Include any other relevant user data
                console.log("userData: ", userData);
                // Call Cloud Function to handle custom claims and other operations
                const functions = getFunctions();
                const setCustomClaims = httpsCallable(
                    functions,
                    "setCustomClaims"
                );
                formData.append("firebaseId", user.uid);

                fetch(
                    `${process.env.REACT_APP_DEPLOYED_API_URL}/auth/user/register`,
                    {
                        method: "POST",
                        body: formData,
                    }
                )
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.status === "error") {
                            setSignUpClicked(false);
                            auth.currentUser.delete();
                            console.log(data);
                            throw new Error(
                                "Invalid form input. Please check again,"
                            );
                        } else {
                            console.log("User in DB: ");
                            console.log(data);
                            setCustomClaims(userData)
                                .then((result) => {
                                    console.log(
                                        "result from setCustomClaims from client: ",
                                        result
                                    );
                                    console.log(user);
                                    setShowMyModal(true);
                                    setSignUpClicked(false);
                                    setStatus("success");
                                })
                                .catch((err) => {
                                    console.log(err);
                                    setSignUpClicked(false);
                                    setStatus("failure");
                                });

                            console.log("Success:", data);
                        }
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                        setStatus("failure");
                        setSignUpClicked(false);
                    });

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(error);
                setStatus("failure");
                setSignUpClicked(false);
            });
    }

    useEffect(() => {
        if (password && password !== confirmPassword)
            setStatus("Passwords do not match!");
    }, []);

    const [showMyModel, setShowMyModal] = useState(false);
    const [showMyModel1, setShowMyModal1] = useState(false);
    const handleOnClose = () => setShowMyModal(false);
    const handleOnClose1 = () => setShowMyModal1(false);

    function validateForm() {
        if (Object.values(formBasic).some((x) => x === null || x === "")) {
            setStatus("Please enter all the fields.");
            console.log("NOT OKAY");
            return false;
        }
        if (password !== confirmPassword) {
            setStatus("Passwords do not match!");
            console.log("NOT OKAY");
            return false;
        }
        if (password.length < 6) {
            setStatus("Password length must be >= 6");
            console.log("NOT OKAY");
            return false;
        }
        return true;
    }

    const Continue = (e) => {
        console.log(e);
        e.preventDefault();
        setSignUpClicked(true);
        console.log("BEFORE VALIDATION");
        if (!validateForm()) {
            setSignUpClicked(false);
            return;
        }
        let formData = new FormData(document.getElementById("userSignUpOne"));
        console.log("OK");
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed Up
                console.log("User in Firebase: ", userCredential.user);
                const user = userCredential.user;
                const userData = {
                    role: "user",
                    firebaseId: user.uid,
                }; // Include any other relevant user data
                console.log("userData: ", userData);
                // Call Cloud Function to handle custom claims and other operations
                const functions = getFunctions();
                const setCustomClaims = httpsCallable(
                    functions,
                    "setCustomClaims"
                );
                formData.append("firebaseId", user.uid);

                fetch(
                    `${process.env.REACT_APP_DEPLOYED_API_URL}/auth/user/register/stepOne`,
                    {
                        method: "POST",
                        body: formData,
                    }
                )
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.status === "error") {
                            setSignUpClicked(false);
                            auth.currentUser.delete();
                            console.log(data);
                            throw new Error(
                                "Invalid form input. Please check again,"
                            );
                        } else {
                            console.log("User in DB: ");
                            console.log(data);
                            setCustomClaims(userData)
                                .then((result) => {
                                    console.log(
                                        "result from setCustomClaims from client: ",
                                        result
                                    );
                                    console.log(user);
                                    nextStep();
                                })
                                .catch((err) => {
                                    console.log(err);
                                    console.log(err.message);
                                    auth.currentUser.delete();
                                    setSignUpClicked(false);
                                    setStatus("failure in custom claims");
                                });

                            console.log("Success:", data);
                        }
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                        console.log("errormessage: ", error.message);
                        auth.currentUser.delete();
                        setStatus("failure");
                        setSignUpClicked(false);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(error);
                if (
                    errorMessage.includes(
                        "Firebase: Error (auth/email-already-in-use)."
                    )
                ) {
                    setStatus("Email is already in use.");
                } else if (errorMessage.includes("auth/invalid-email")) {
                    setStatus("Please enter a valid email address.");
                } else {
                    setStatus(
                        "Error occurred while signing you up. Please try again."
                    );
                }
                console.log(errorMessage);
                setSignUpClicked(false);
            });
    };

    return (
        <div className="flex flex-col bottom-0 justify-center items-center w-1/2 min-h-fit p-12 py-4 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8">
            <h1 className="text-xl font-extrabold">
                Join us as a participant!
            </h1>

            <form className="step relative top-4" id="userSignUpOne">
                {/* <p className="text-md text-gray-700 leading-tight text-center mt-8 mb-5">
                    Create your account
                </p> */}
                <div className="mb-6">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"
                        className="w-full focus:text-gray-800 px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                        oninput="this.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'"
                        onChange={(e) => handleChange(e)}
                        value={values.name}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        id="email"
                        className="w-full focus:text-gray-800 px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                        oninput="this.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'"
                        onChange={(e) => handleChange(e)}
                        value={values.email}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        className="w-full focus:text-gray-800 px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                        oninput="this.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'"
                        onChange={(e) => {
                            handleChange(e);
                            let tempPass = e.target.value;
                            if (tempPass && tempPass !== confirmPassword) {
                                setStatus("Passwords do not match!");
                            } else {
                                setStatus(null);
                            }
                        }}
                        value={password}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="confirmPassword"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="w-full focus:text-gray-800 px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                        oninput="this.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'"
                        onChange={(e) => {
                            handleChange(e);
                            let tempPass = e.target.value;
                            if (tempPass && tempPass !== password) {
                                setStatus("Passwords do not match!");
                            } else {
                                setStatus(null);
                            }
                        }}
                        value={confirmPassword}
                        required
                    />
                </div>
                {status !== null && (
                    <div className="text-center font-light pb-2 text-red-500">
                        {status}
                    </div>
                )}
                <div className="flex justify-center items-center pb-12 gap-4">
                    <div className="action-buttons">
                        {/* <button
                            id="prev"
                            disabled={stepCount === 1}
                            onClick={() => {
                                prevStep();
                            }}
                        >
                            Prev
                        </button> */}
                        <button
                            id="next"
                            disabled={stepCount === 4}
                            onClick={(e) => {
                                Continue(e);
                                // nextStep();
                            }}
                        >
                            {!signUpClicked ? (
                                "Next"
                            ) : (
                                <div role="status">
                                    <svg
                                        aria-hidden="true"
                                        class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                        viewBox="0 0 100 101"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"
                                        />
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
