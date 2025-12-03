import mongoose from "mongoose"

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productCategory:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    productQuantity:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const product=mongoose.model("product",productSchema)
export default product;