import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./Routes/authRoutes.js"
import rescueRoutes from "./Routes/rescueRoutes.js"
import { connectDB } from "./Config/db.js"
import {errorMiddleware} from "./Middlewares/errorMiddleware.js";
import volunteerRoutes from "./Routes/volunteerRoutes.js";
import donationRoutes from "./Routes/donationRoutes.js";

const app = express();


dotenv.config();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.json())

// routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/rescue", rescueRoutes);
app.use("/api/v1/volunteer", volunteerRoutes);
app.use("/api/v1/donation", donationRoutes);


app.get("/", (req, res) =>{
    return res.send("<h1>Welcome to the ReliefNow's server</h1>");
})


// Middlewares

app.use(errorMiddleware);


app.listen(PORT, () => {
    console.log("Server is runnning on port", PORT)
})