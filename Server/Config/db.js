import mongoose from "mongoose";

export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to database ${conn.connection.host}`);
    } catch (error) {
        console.log("Error while connecting to database ", error);
    }
}