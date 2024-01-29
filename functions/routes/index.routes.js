import filesUpload from "../middlewares/upload.middleware.js";
import registerRouter from "./auth.routes.js";
import orgRouter from "./organization.routes.js";
import userRouter from "./user.routes.js";
import campaignRouter from "./campaign.routes.js";
import communityRouter from "./community.routes.js";
import express from "express";
const router = express.Router();

router.use("/auth", filesUpload, registerRouter);
router.use("/org", orgRouter);
router.use("/user", userRouter);
router.use("/campaign", campaignRouter);
router.use("/community", communityRouter);
export default router;
