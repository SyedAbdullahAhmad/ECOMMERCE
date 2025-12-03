import express from "express"
import product from "../models/productModel.js";


export const createAproduct=async(req,res)=>{
    try {
         const{productName,productCategory,productImage,productPrice,productQuantity}=req.body;
         const nProduct=new product({
            productName,
            productCategory,
            productPrice,
            productImage,
           productQuantity,
         })
         await nProduct.save()
          res.status(201).json({message:"Product Created Successfully"})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.error("Error in creatong new Product from ControllerSide")
    }
}

export const getAllProducts=async(req,res)=>{
    try {
        const products=await product.find()
        console.log(products)
         return res.status(200).json({message:"Products fetched successfully",products:products,})
        
    } catch (error) {
        res.status(500).json({message:"Internal Server error"})
        console.error("Error in getting all products")
    }
}