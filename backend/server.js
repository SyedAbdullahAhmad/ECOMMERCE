import express from 'express'
import router from "./routers/credentialRouter.js"
import productRouter from "./routers/productRoutes.js"
import { connectDB } from './Config/db.js';
import  cors from "cors"
import path from "path";
import {fileURLToPath} from "url";
const app=express();


const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)

const imagesPath="C:\\Users\\Makkah Computer\\Desktop\\PROJECTS\\EcommerceImages";
app.use("/EcommerceImages",express.static(imagesPath));
app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173"
}))
app.use("/",router)
app.use("/",productRouter)

const PORT=5000

connectDB().then(() => {
    try {
        console.log("DB connected successfully")
    } catch (error) {
        console.error("Error in connecting mongoDB")
    }
})

app.listen(5000,()=>{
 console.log(`Server started at PORT ${PORT}`)   
})