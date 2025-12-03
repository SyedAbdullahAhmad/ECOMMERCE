import express from "express"
import Login from "../models/credentialModel.js"
export const createAccount=async(req,res)=> {
try {
   const{email,password}=req.body;
   const user=await Login.findOne({email})
   if(user){
    return res.status(409).json({message:"This email is already exists"})
   }
    const newAccount=new Login({
        email,
        password,
    })
    await newAccount.save();
    res.status(201).json({message:"Account Created Successfully"})
    
} catch (error) {
    console.error("Error in creating new account")
}    
}

export const loginAccount=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await Login.findOne({email})
        if(!user){
           return  res.status(404).json({message:"User not found"})
        }
         if(user.password!==password)
        {
            return res.status(404).json({message:"Wrong Passsword"})
        }
        if(user.password==password)
        {
            res.status(200).json({message:"Login successful"})
        }
    } catch (error) {
        console.error("Error in Login Account")
    }
}