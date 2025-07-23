import express from "express";
import { register, updateProfile,login, logout } from "../controllers/user.controller.js";
import isaunthenticated from "../middlewares/isaunthenticated.js";
import { singleUpload } from "../middlewares/multer.js";


const router=express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isaunthenticated,singleUpload,updateProfile);

export default router;

