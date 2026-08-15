import product from "../models/productModel.js";
import cloudinary from "../config/cloudinary.js";

export const createAproduct = async (req, res) => {
    try {

        const {
            productName,
            productCategory,
            productPrice,
            productQuantity,
            productDescription
        } = req.body;

        if (!req.file) {
            return res.status(400).json({
                message: "Product image is required"
            });
        }

        const uploadResult = await new Promise((resolve, reject) => {

            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    folder: "products"
                },
                (error, result) => {

                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }

                }
            );

            uploadStream.end(req.file.buffer);
        });

        const nProduct = new product({
            productName,
            productCategory,
            productPrice,
            productImage: uploadResult.secure_url,
            productQuantity,
            productDescription
        });

        await nProduct.save();

        res.status(201).json({
            message: "Product Created Successfully",
            product: nProduct
        });

    } catch (error) {

        console.error("Error in creating new Product:", error);

        res.status(500).json({
            message: "Internal server error"
        });
    }
};


export const getAllProducts = async (req, res) => {

    try {

        const products = await product.find();

        return res.status(200).json({
            message: "Products fetched successfully",
            products: products
        });

    } catch (error) {

        console.error("Error in getting all products:", error);

        res.status(500).json({
            message: "Internal Server error"
        });
    }
};