import express from "express";
import { Router } from "express";
import { registerController, loginController, signUpWithGoogleController, forgetPasswordController } from "../Controllers/authController.js";

const router = Router();

router.post("/register", registerController);

router.post ("/login", loginController);

router.post ("/register-google", signUpWithGoogleController);

// Forget Password

router.post("/forget-password", forgetPasswordController);

router.post("/generate-otp", );

router.post("/verify-otp",);

router.post("/reset-password", );



export default router;