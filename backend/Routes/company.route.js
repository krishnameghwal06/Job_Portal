import express from "express";
import isaunthenticated from "../middlewares/isaunthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/multer.js";

const router=express.Router();

router.route("/register").post(isaunthenticated,registerCompany);
router.route("/get").get(isaunthenticated,getCompany);
router.route("/get/:id").get(isaunthenticated,getCompanyById);
router.route("/update/:id").put(singleUpload,isaunthenticated,updateCompany);

export default router;

