import express from "express";
import isaunthenticated from "../middlewares/isaunthenticated.js";
import {applyJob, getAppliedJobs, getApplicants, updateStatus} from "../controllers/application.controller.js"

const router=express.Router();


router.route("/apply/:id").get(isaunthenticated,applyJob);
router.route("/get").get(isaunthenticated, getAppliedJobs);
router.route("/:id/applicants").get(isaunthenticated, getApplicants);
router.route("/status/:id/update").post(isaunthenticated, updateStatus);



export default router;

