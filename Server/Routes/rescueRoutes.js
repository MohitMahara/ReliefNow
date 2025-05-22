import express from "express";
const router = express.Router();

import { rescueReqController } from "../Controllers/rescueControllers.js";


router.post("/rescue-req", rescueReqController);




export default router;