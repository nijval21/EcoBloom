import express from "express";
import Organization from "../models/organization.model.js";
import {
    response_200,
    response_400,
    response_404,
    response_500,
} from "../utils/responseCodes.js";
import Community from "../models/community.model.js";
import Campaign from "../models/campaign.model.js";
import { storage } from "../config/firebase.config.js";
import { ref, uploadBytesResumable } from "firebase/storage";
import moment from "moment";
import Jimp from "jimp";
import Post, { Post as PostSchema } from "../models/post.model.js";
import mongoose from "mongoose";

const router = express.Router();
mongoose.model("Post", PostSchema);

//get all orgs

export const getOrgs = async (req, res) => {
    try {
        const orgs = await Organization.find({});
        const data = await Promise.all(
            orgs.map(async (org) => {
                const community = await Community.findOne({
                    organization: org._id,
                });
                return {
                    id: org._id,
                    firebaseId: org.firebaseId,
                    name: org.name,
                    email: org.email,
                    logo: org.logo,
                    banner: org.banner,
                    isVerified: org.isVerified,
                    members: community ? community.userCount : 0,
                };
            })
        );
        response_200(res, "Successfully fetched organizations", data);
    } catch (err) {
        console.log(err);
        response_500(res, "Error occurred while fetching organizations", err);
    }
};

//for organization profile

export const getOrgDetails = async (req, res) => {
    try {
        const orgId = req.params.orgId;
        const org = await Organization.findOne({ firebaseId: orgId }).populate(
            "orgPosts"
        );

        const {
            name,
            firebaseId,
            email,
            logo,
            banner,
            orgPosts,
            community,
            description,
        } = org;
        const communityData = await Community.findOne({
            organization: org._id,
        });
        const campaigns = await Campaign.find({
            organization: org._id,
        });
        const completedCampaigns = campaigns.filter((campaign) => {
            const campaignEndDate = new Date(campaign.endDate);
            const currTime = moment().toDate();
            return campaignEndDate <= currTime;
        });

        const upcomingCampaigns = campaigns.filter((campaign) => {
            const campaignStartDate = new Date(campaign.startDate);
            const currTime = moment().toDate();
            return campaignStartDate >= currTime;
        });

        const ongoingCampaigns = campaigns.filter((campaign) => {
            const campaignStartDate = new Date(campaign.startDate);
            const campaignEndDate = new Date(campaign.endDate);
            const currTime = moment().toDate();
            return campaignStartDate <= currTime && campaignEndDate >= currTime;
        });

        let data = {
            name,
            firebaseId,
            email,
            logo,
            banner,
            orgPosts,
            upcomingCampaigns,
            ongoingCampaigns,
            completedCampaigns,
            communityUsersCount: communityData.userCount,
            communityId: communityData._id,
            description,
        };
        response_200(res, "Successfully fetched organization data!", data);
    } catch (err) {
        console.log(err);
        response_500(
            res,
            "Error occurred while fetching organization details",
            err
        );
    }
};

//updating the organization's details (logo, banner only possible)
export const updateOrgPics = async (req, res) => {
    const files = req.files; //logo, banner
    const extensions = files.map((file) => file.originalname.split(".").pop());
    const validate = extensions.filter(
        (extension) =>
            extension !== "jpg" && extension !== "png" && extension !== "jpeg"
    );
    //email variable, update record in DB

    if (validate.length > 0) {
        response_400(
            res,
            "Invalid file format. Only .jpg, .png, .jpeg files are allowed"
        );
    } else {
        // const pathToLogo = `/org/${email}/logo_${Date.now()}.jpg`;
        // const pathToBanner = `/org/${email}/banner_${Date.now()}.jpg`;
        // const pathToDocument = `/org/${email}/document_${Date.now()}.jpg`;

        const filesToUpload = [];
        const paths = {};
        for (let i = 0; i < files.length; i++) {
            filesToUpload.push(
                uploadFile(req.org.email, files[i], extensions[i], paths)
            );
        }

        Promise.all(filesToUpload)
            .then((values) => {
                console.log(values);
            })
            .then(async () => {
                const doc = await Organization.findOneAndUpdate(
                    {
                        email: req.org.email,
                    },
                    {
                        logo: paths["logo"],
                        banner: paths["banner"],
                    },
                    {
                        new: true,
                    }
                );

                console.log("Successfully updated organization details!");
                response_200(
                    res,
                    "Successfully updated organization details!",
                    doc
                );
            })
            .catch((err) => {
                console.log(err);
                response_500(res, "Error creating organization", err);
            });
    }
};

export const createPost = async (req, res) => {
    try {
        const orgId = req.org.orgId;
        const caption = req.body.caption;
        const file = req.files[0];
        const filename = file.originalname;
        const extension = filename.split(".").pop();
        if (
            extension !== "png" &&
            extension !== "jpg" &&
            extension !== "jpeg"
        ) {
            response_400(
                res,
                "Invalid file format. Only .jpg, .png, .jpeg files are allowed"
            );
        } else {
            const org = await Organization.findById(orgId);
            if (!org) {
                response_404(res, "Organization not found");
            } else {
                Jimp.read(file.buffer)
                    .then((image) => {
                        // Convert the image to JPEG with quality 100 (you can adjust the quality as needed)
                        return image
                            .quality(100)
                            .getBufferAsync(Jimp.MIME_JPEG);
                    })
                    .then(async (jpegBuffer) => {
                        console.log("Image converted successfully!");
                        // Now you have the converted buffer (jpegBuffer) that you can use

                        const pathToFile = `org/${
                            org.email
                        }/posts/post_${Date.now()}.jpeg`;
                        const storageRef = ref(storage, pathToFile);

                        const metadata = {
                            contentType: "image/jpeg",
                        };

                        const snapshot = await uploadBytesResumable(
                            storageRef,
                            jpegBuffer,
                            metadata
                        );
                        if (snapshot.state === "success") {
                            const post = await Post.create({
                                organization: org._id,
                                photo: pathToFile,
                                content: caption,
                                date: Date.now(),
                            });
                            const newOrg = await Organization.findByIdAndUpdate(
                                orgId,
                                {
                                    $push: {
                                        orgPosts: post._id,
                                    },
                                },
                                {
                                    new: true,
                                }
                            );
                            console.log("Successfully created new post in DB!");
                            response_200(
                                res,
                                "Successfully created new post in DB",
                                post
                            );
                        } else {
                            response_500(
                                res,
                                "Error occurred while creating post"
                            );
                        }
                    })
                    .catch((err) => {
                        console.error("Error converting image:", err);
                        response_500(res, "Error converting image");
                    });
            }
        }
    } catch (err) {
        console.log(err);
        response_500(res, "Error occurred while creating post", err);
    }
};

async function uploadFile(email, file, extensions, paths) {
    const fileType = file.fieldname.toLowerCase().replace("optional", "");
    const pathToFile = `org/${email}/${fileType}.${extensions}`;
    const storageRef = ref(storage, pathToFile);
    const metadata = {
        contentType: file.mimetype,
    };

    try {
        const response = await uploadBytesResumable(
            storageRef,
            file.buffer,
            metadata
        );
        console.log(response.state);
        if (!(response.state === "success")) {
            throw new Error(`Failed to upload ${file.originalname}`);
        }

        paths[fileType] = pathToFile;
        return `Successfully uploaded ${file.originalname}`;
    } catch (error) {
        console.error(`Error uploading ${fileType} file: ${error.message}`);
        throw error;
    }
}

export default router;
