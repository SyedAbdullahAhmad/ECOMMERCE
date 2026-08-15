import express from "express";
import {
    createAproduct,
    getAllProducts
} from "../controllers/productController.js";

import upload from "../middleware/upload.js";

const productRouter = express.Router();

productRouter.post(
    "/newProductPage",
    upload.single("image"),
    createAproduct
);

productRouter.get(
    "/AllProducts",
    getAllProducts
);

export default productRouter;