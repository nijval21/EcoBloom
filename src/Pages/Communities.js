import React, { useContext } from "react";
import logo_new from "../assets/images/logo_new.png";
import banner from "../assets/images/banner1.jpg";
import logo_commu from "../assets/images/logo_commu.jpg";
import { ProfileContext } from "../Components/ProfileContextProvider.js";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Communities = () => {
    const [profile, setProfile] = useContext(ProfileContext);
    return (
        <div className="h-screen w-full bg-[#eef0e5]">
            <div className="flex items-center justify-between ">
                <img
                    className="w-20 md:w-28 lg:w-32 ml-2 mt-1"
                    src={logo_new}
                    alt=""
                />
                <p className="text-lg sm:text-2xl md:text-3xl font-bold">
                    COMMUNITIES TO EXPLORE
                </p>
                <div className="flex items-center mr-4 gap-3">
                    <Link to="/user/profile">
                        <img
                            className="w-9 md:w-12 lg:w-14 rounded-full"
                            src={profile.url}
                            alt=""
                        />
                    </Link>
                    <p className="hidden sm:flex text-xl font-medium">
                        {profile.name}
                    </p>
                </div>
            </div>
            <div className="mx-8 my-3">
                <input
                    type="text"
                    className="w-full h-10 rounded-2xl px-4"
                    placeholder="🔍 Search For Communities"
                />
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 p-7 place-items-center gap-y-7 h-[83%] md:h-[80%] lg:h-[79%] overflow-scroll">
                <div className="w-[21.5rem] lg:w-[24.5rem] bg-[#DFE4C5] flex-col rounded-lg pb-4 h-56 overflow-hidden">
                    <div className="w-[21.5rem] lg:w-[24.5rem] h-20 p-2 overflow-hidden">
                        <img
                            className="rounded-xl bg-cover"
                            src={banner}
                            alt=""
                        />
                    </div>
                    <div className="ml-24">
                        <div className="text-lg lg:text-xl font-medium">
                            GeekHaven, IIIT Allahabad
                        </div>
                        <div>
                            The Technical Club of Indian Institute of
                            Infromation Technology, Allahabad
                        </div>
                        <div className="text-xs">2K Members</div>
                        <button className="w-36 mt-2 text-[16px] text-[#eef0e5] rounded-3xl bg-[#0F1035] hover:scale-105 duration-200 flex justify-center gap-1">
                            See Profile{" "}
                            <div className="text-md mt-[0.34rem]">
                                {" "}
                                <FaArrowRightLong />{" "}
                            </div>
                        </button>
                    </div>
                    <img
                        className="w-16 h-16 relative bottom-[11rem] lg:bottom-[10rem] left-3"
                        src={logo_commu}
                        alt=""
                    />
                </div>
                <div className="w-[21.5rem] lg:w-[24.5rem] bg-[#DFE4C5] flex-col rounded-lg pb-4 h-56 overflow-hidden">
                    <div className="w-[21.5rem] lg:w-[24.5rem] h-20 p-2 overflow-hidden">
                        <img
                            className="rounded-xl bg-cover"
                            src={banner}
                            alt=""
                        />
                    </div>
                    <div className="ml-24">
                        <div className="text-lg lg:text-xl font-medium">
                            GeekHaven, IIIT Allahabad
                        </div>
                        <div>
                            The Technical Club of Indian Institute of
                            Infromation Technology, Allahabad
                        </div>
                        <div className="text-xs">2K Members</div>
                        <button className="w-36 mt-2 text-[16px] text-[#eef0e5] rounded-3xl bg-[#0F1035] hover:scale-105 duration-200 flex justify-center gap-1">
                            See Profile{" "}
                            <div className="text-md mt-[0.34rem]">
                                {" "}
                                <FaArrowRightLong />{" "}
                            </div>
                        </button>
                    </div>
                    <img
                        className="w-16 h-16 relative bottom-[11rem] lg:bottom-[10rem] left-3"
                        src={logo_commu}
                        alt=""
                    />
                </div>
                <div className="w-[21.5rem] lg:w-[24.5rem] bg-[#DFE4C5] flex-col rounded-lg pb-4 h-56 overflow-hidden">
                    <div className="w-[21.5rem] lg:w-[24.5rem] h-20 p-2 overflow-hidden">
                        <img
                            className="rounded-xl bg-cover"
                            src={banner}
                            alt=""
                        />
                    </div>
                    <div className="ml-24">
                        <div className="text-lg lg:text-xl font-medium">
                            GeekHaven, IIIT Allahabad
                        </div>
                        <div>
                            The Technical Club of Indian Institute of
                            Infromation Technology, Allahabad
                        </div>
                        <div className="text-xs">2K Members</div>
                        <button className="w-36 mt-2 text-[16px] text-[#eef0e5] rounded-3xl bg-[#0F1035] hover:scale-105 duration-200 flex justify-center gap-1">
                            See Profile{" "}
                            <div className="text-md mt-[0.34rem]">
                                {" "}
                                <FaArrowRightLong />{" "}
                            </div>
                        </button>
                    </div>
                    <img
                        className="w-16 h-16 relative bottom-[11rem] lg:bottom-[10rem] left-3"
                        src={logo_commu}
                        alt=""
                    />
                </div>
                <div className="w-[21.5rem] lg:w-[24.5rem] bg-[#DFE4C5] flex-col rounded-lg pb-4 h-56 overflow-hidden">
                    <div className="w-[21.5rem] lg:w-[24.5rem] h-20 p-2 overflow-hidden">
                        <img
                            className="rounded-xl bg-cover"
                            src={banner}
                            alt=""
                        />
                    </div>
                    <div className="ml-24">
                        <div className="text-lg lg:text-xl font-medium">
                            GeekHaven, IIIT Allahabad
                        </div>
                        <div>
                            The Technical Club of Indian Institute of
                            Infromation Technology, Allahabad
                        </div>
                        <div className="text-xs">2K Members</div>
                        <button className="w-36 mt-2 text-[16px] text-[#eef0e5] rounded-3xl bg-[#0F1035] hover:scale-105 duration-200 flex justify-center gap-1">
                            See Profile{" "}
                            <div className="text-md mt-[0.34rem]">
                                {" "}
                                <FaArrowRightLong />{" "}
                            </div>
                        </button>
                    </div>
                    <img
                        className="w-16 h-16 relative bottom-[11rem] lg:bottom-[10rem] left-3"
                        src={logo_commu}
                        alt=""
                    />
                </div>
                <div className="w-[21.5rem] lg:w-[24.5rem] bg-[#DFE4C5] flex-col rounded-lg pb-4 h-56 overflow-hidden">
                    <div className="w-[21.5rem] lg:w-[24.5rem] h-20 p-2 overflow-hidden">
                        <img
                            className="rounded-xl bg-cover"
                            src={banner}
                            alt=""
                        />
                    </div>
                    <div className="ml-24">
                        <div className="text-lg lg:text-xl font-medium">
                            GeekHaven, IIIT Allahabad
                        </div>
                        <div>
                            The Technical Club of Indian Institute of
                            Infromation Technology, Allahabad
                        </div>
                        <div className="text-xs">2K Members</div>
                        <button className="w-36 mt-2 text-[16px] text-[#eef0e5] rounded-3xl bg-[#0F1035] hover:scale-105 duration-200 flex justify-center gap-1">
                            See Profile{" "}
                            <div className="text-md mt-[0.34rem]">
                                {" "}
                                <FaArrowRightLong />{" "}
                            </div>
                        </button>
                    </div>
                    <img
                        className="w-16 h-16 relative bottom-[11rem] lg:bottom-[10rem] left-3"
                        src={logo_commu}
                        alt=""
                    />
                </div>
                <div className="w-[21.5rem] lg:w-[24.5rem] bg-[#DFE4C5] flex-col rounded-lg pb-4 h-56 overflow-hidden">
                    <div className="w-[21.5rem] lg:w-[24.5rem] h-20 p-2 overflow-hidden">
                        <img
                            className="rounded-xl bg-cover"
                            src={banner}
                            alt=""
                        />
                    </div>
                    <div className="ml-24">
                        <div className="text-lg lg:text-xl font-medium">
                            GeekHaven, IIIT Allahabad
                        </div>
                        <div>
                            The Technical Club of Indian Institute of
                            Infromation Technology, Allahabad
                        </div>
                        <div className="text-xs">2K Members</div>
                        <button className="w-36 mt-2 text-[16px] text-[#eef0e5] rounded-3xl bg-[#0F1035] hover:scale-105 duration-200 flex justify-center gap-1">
                            See Profile{" "}
                            <div className="text-md mt-[0.34rem]">
                                {" "}
                                <FaArrowRightLong />{" "}
                            </div>
                        </button>
                    </div>
                    <img
                        className="w-16 h-16 relative bottom-[11rem] lg:bottom-[10rem] left-3"
                        src={logo_commu}
                        alt=""
                    />
                </div>
                <div className="w-[21.5rem] lg:w-[24.5rem] bg-[#DFE4C5] flex-col rounded-lg pb-4 h-56 overflow-hidden">
                    <div className="w-[21.5rem] lg:w-[24.5rem] h-20 p-2 overflow-hidden">
                        <img
                            className="rounded-xl bg-cover"
                            src={banner}
                            alt=""
                        />
                    </div>
                    <div className="ml-24">
                        <div className="text-lg lg:text-xl font-medium">
                            GeekHaven, IIIT Allahabad
                        </div>
                        <div>
                            The Technical Club of Indian Institute of
                            Infromation Technology, Allahabad
                        </div>
                        <div className="text-xs">2K Members</div>
                        <button className="w-36 mt-2 text-[16px] text-[#eef0e5] rounded-3xl bg-[#0F1035] hover:scale-105 duration-200 flex justify-center gap-1">
                            See Profile{" "}
                            <div className="text-md mt-[0.34rem]">
                                {" "}
                                <FaArrowRightLong />{" "}
                            </div>
                        </button>
                    </div>
                    <img
                        className="w-16 h-16 relative bottom-[11rem] lg:bottom-[10rem] left-3"
                        src={logo_commu}
                        alt=""
                    />
                </div>
                <div className="w-[21.5rem] lg:w-[24.5rem] bg-[#DFE4C5] flex-col rounded-lg pb-4 h-56 overflow-hidden">
                    <div className="w-[21.5rem] lg:w-[24.5rem] h-20 p-2 overflow-hidden">
                        <img
                            className="rounded-xl bg-cover"
                            src={banner}
                            alt=""
                        />
                    </div>
                    <div className="ml-24">
                        <div className="text-lg lg:text-xl font-medium">
                            GeekHaven, IIIT Allahabad
                        </div>
                        <div>
                            The Technical Club of Indian Institute of
                            Infromation Technology, Allahabad
                        </div>
                        <div className="text-xs">2K Members</div>
                        <button className="w-36 mt-2 text-[16px] text-[#eef0e5] rounded-3xl bg-[#0F1035] hover:scale-105 duration-200 flex justify-center gap-1">
                            See Profile{" "}
                            <div className="text-md mt-[0.34rem]">
                                {" "}
                                <FaArrowRightLong />{" "}
                            </div>
                        </button>
                    </div>
                    <img
                        className="w-16 h-16 relative bottom-[11rem] lg:bottom-[10rem] left-3"
                        src={logo_commu}
                        alt=""
                    />
                </div>
                <div className="w-[21.5rem] lg:w-[24.5rem] bg-[#DFE4C5] flex-col rounded-lg pb-4 h-56 overflow-hidden">
                    <div className="w-[21.5rem] lg:w-[24.5rem] h-20 p-2 overflow-hidden">
                        <img
                            className="rounded-xl bg-cover"
                            src={banner}
                            alt=""
                        />
                    </div>
                    <div className="ml-24">
                        <div className="text-lg lg:text-xl font-medium">
                            GeekHaven, IIIT Allahabad
                        </div>
                        <div>
                            The Technical Club of Indian Institute of
                            Infromation Technology, Allahabad
                        </div>
                        <div className="text-xs">2K Members</div>
                        <button className="w-36 mt-2 text-[16px] text-[#eef0e5] rounded-3xl bg-[#0F1035] hover:scale-105 duration-200 flex justify-center gap-1">
                            See Profile{" "}
                            <div className="text-md mt-[0.34rem]">
                                {" "}
                                <FaArrowRightLong />{" "}
                            </div>
                        </button>
                    </div>
                    <img
                        className="w-16 h-16 relative bottom-[11rem] lg:bottom-[10rem] left-3"
                        src={logo_commu}
                        alt=""
                    />
                </div>
                
            </div>
        </div>
    );
};

export default Communities;
