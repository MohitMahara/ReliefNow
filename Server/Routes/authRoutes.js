import express from "express";
import { Router } from "express";
import { registerController, loginController, signUpWithGoogleController } from "../Controllers/authController.js";

const router = Router();

router.post("/register", registerController);

router.post ("/login", loginController);

router.post ("/register-google", signUpWithGoogleController);






export default router;