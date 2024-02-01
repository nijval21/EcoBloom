import React from "react";
import Video from "../Components/Video.js";

const VideoCard = ({ visible, onClose, userId }) => {
    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose();
    };

    if (!visible) return null;

    return (
        <div
            id="container"
            onClick={handleOnClose}
            className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center h-full"
        >
            <div className="maps-campaign-outer bg-[#CDE1C9] p-6 rounded flex flex-col items-center justify-center">
                <div className="text-2xl font-semibold text-[#1C1C1C] flex justify-center mb-3">
                    Verify User {userId}
                </div>
                <div className="flex map-campaign-container">
                    <div className="w-full flex justify-center items-center h-full">
                        <Video userId={userId} />
                    </div>
                </div>
                <div className="flex justify-around w-full mt-4">
                    <button
                        className="text-lg bg-[#EEF0E5] text-[#0F1035] w-32 h-8 rounded-lg border-2 border-[#0F1035]"
                        onClick={() => {
                            document.querySelector("#container").click();
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="text-lg bg-[#0F1035] text-[#EEF0E5] w-32 h-8 rounded-lg"
                        onClick={() => {
                            document.getElementById("container").click();
                        }}
                    >
                        Verify
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
