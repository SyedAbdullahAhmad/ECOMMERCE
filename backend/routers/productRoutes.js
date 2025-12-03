import express from "express"
import {createAproduct} from "../controllers/productController.js"
import { getAllProducts } from "../controllers/productController.js";
const productRouter=express.Router();
productRouter.post("/newProductPage",createAproduct)
productRouter.get("/AllProducts",getAllProducts)
export default productRouter;