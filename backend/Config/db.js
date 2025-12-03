import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();
export const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGOURI,{
            dbName: "Ecommerce",
             useNewUrlParser: true,
             useUnifiedTopology: true,
        })
    } catch (error) {
         console.error(" MongoDB connection failed:", error);
        process.exit(1);
    }
}