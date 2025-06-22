import { Router} from "express";
const router = Router();
import { getStatusController } from "../Controllers/volunteerControllers.js";

router.get("/application/status/:uid", getStatusController);


export default router;