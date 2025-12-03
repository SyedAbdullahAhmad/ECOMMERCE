import mongoose, { model, mongo, Schema } from "mongoose";

const adminCredentials=new mongoose.Schema({
 adminEmail:{
   type:String,
   required:true,
   unique:true,
},
adminPassword:{
    type:String,
    required:true,
}
},{timestamps:true})
const adminLogin=mongoose.model("adminLogin",adminCredentials);
export default adminLogin;