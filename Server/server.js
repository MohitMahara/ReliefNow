import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./Routes/authRoutes.js"
import { connectDB } from "./Config/db.js"
const app = express();


dotenv.config();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.json())

// routes

app.use("/api/auth", authRoutes);


app.get("/", (req, res) =>{
    return res.send("<h1>Welcome to the ReliefNow's server</h1>");
})

app.listen(PORT, () => {
    console.log("Server is runnning on port", PORT)
})