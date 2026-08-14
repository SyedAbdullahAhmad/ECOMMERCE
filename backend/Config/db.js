import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
         console.error(" MongoDB connection failed:", error);
        process.exit(1);
    }
}