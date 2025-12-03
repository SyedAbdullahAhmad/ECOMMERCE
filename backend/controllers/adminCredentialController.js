import express from "express"
import adminLogin from "../models/adminCredentialModel.js"

export const adminloginAccount=async(req,res)=>{
    try {
           const {adminEmail,adminPassword}=req.body;
           const user=await adminLogin.findOne({adminEmail})
           console.log(user)
           if(!user){
              return  res.status(404).json({message:"User not found"})
           }
            if(user.adminPassword!==adminPassword)
           {
               return res.status(401).json({message:"Wrong Passsword"})
           }
           if(user.adminPassword==adminPassword)
           {
               res.status(200).json({message:"Login successful"})
           }
       } catch (error) {
          
      console.error("Error in login Admin Account", error);
    
       }
}