import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, storage } from "../firebase.js";
import { getDownloadURL, ref } from "firebase/storage";
import { useContext, useState } from "react";
import { ProfileContext } from "../Components/ProfileContextProvider.js";

const Change_profile = ({ visible, onClose }) => {
    const [user, loading, error] = useAuthState(auth);
    const [profile, setProfile] = useContext(ProfileContext);
    const [clicked, setClicked] = useState(false);

    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose();
    };

    if (!visible) return null;

    function updateLogo() {
        setClicked(true);
        if (auth.currentUser) {
            auth.currentUser.getIdTokenResult().then(async (idTokenResult) => {
                const fileInput = new FormData(
                    document.getElementById("emailSignUp")
                );
                const response = await fetch(
                    `${process.env.REACT_APP_LOCAL_API_URL}/user/${idTokenResult.claims.userId}/profile`,
                    {
                        method: "PATCH",
                        body: fileInput,
                    }
                );
                const data = await response.json();
                console.log("DATA: ", data);
                if (data.status === "OK") {
                    console.log(data.data.photoPathFirestore);
                    const storageRef = ref(
                        storage,
                        data.data.photoPathFirestore
                    );
                    getDownloadURL(storageRef)
                        .then(function (url) {
                            setProfile({
                                ...profile,
                                url,
                            });
                            localStorage.setItem(
                                "profile",
                                JSON.stringify({
                                    ...JSON.parse(
                                        localStorage.getItem("profile")
                                    ),
                                    profileUrl: url,
                                })
                            );
                            console.log(localStorage.getItem("profile"));
                            setClicked(false);
                            document.getElementById("container").click();
                        })
                        .catch(function (error) {
                            setClicked(false);
                            document.getElementById("container").click();
                            console.error(error);
                        });
                } else {
                    setClicked(false);
                    document.getElementById("container").click();
                    alert(
                        "Error occurred while changing photo with status != 200"
                    );
                    alert(data.message);
                }
            });
        } else {
            setClicked(false);
            window.location.replace("/login");
        }
    }

    return (
        <div
            id="container"
            onClick={handleOnClose}
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
        >
            <div className="bg-[#CDE1C9] p-7 rounded w-96 flex flex-col justify-center mt-7 gap-3">
                <form
                    class="space-y-2 md:space-y-4"
                    action="#"
                    id="emailSignUp"
                >
                    <label
                        class="block mb-2 text-sm font-medium text-[#0f1035]"
                        for="file_input"
                    >
                        Upload Photo<sup>*</sup>
                    </label>
                    <input
                        class="block w-full text-sm  file:bg-[#0f1035]  file:text-white file:p-2 file:rounded-lg file:font-bold file:hover:scale-105 file:duration-300 rounded-lg cursor-pointer focus:outline-none bg-transparent text-[#0f1035]"
                        aria-describedby="file_input_help"
                        id="profile"
                        name="profile"
                        type="file"
                        accept="image/*"
                        required
                    />
                </form>
                <div className="flex justify-around mt-7 mb-5">
                    <button
                        onClick={() => {
                            document.getElementById("container").click();
                        }}
                        className="text-lg bg-[#EEF0E5] text-[#0F1035] w-32 h-8 rounded-lg border-2 border-[#0F1035]"
                    >
                        Cancel
                    </button>
                    {!clicked ? (
                        <button
                            onClick={updateLogo}
                            className="text-lg bg-[#0F1035] text-[#EEF0E5] w-32 h-8 rounded-lg"
                        >
                            Update
                        </button>
                    ) : (
                        <button
                            disabled
                            className="text-lg bg-[#0f1035cd] text-[#EEF0E5] w-32 h-8 rounded-lg"
                        >
                            Updating...
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Change_profile;
