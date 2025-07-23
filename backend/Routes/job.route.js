import express from "express";

import isaunthenticated from "../middlewares/isaunthenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router=express.Router();

router.route("/post").post(isaunthenticated,postJob);
router.route("/get").get(isaunthenticated,getAllJobs);
router.route("/getadminJobs").get(isaunthenticated,getAdminJobs);
router.route("/get/:id").get(isaunthenticated,getJobById);

export default router;