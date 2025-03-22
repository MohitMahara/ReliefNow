import express from "express";
import { Router } from "express";
import { registerController, loginController } from "../Controllers/authController.js";

const router = Router();

router.post("/register", registerController);

router.post ("/login", loginController);





export default router;