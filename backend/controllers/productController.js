import productModel from '../models/productModel.js'
import { v2 as cloudinary } from 'cloudinary';

// function for add product

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]
        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        const imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' })
                return result.secure_url
            })
        )
        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            bestseller: bestseller === 'true' ? 'true' : 'false',
            sizes: JSON.parse(sizes),
            image: imagesUrl
        }
        console.log(productData)
        const product = new productModel(productData)
        await product.save();
        res.json({ success: true, message: 'Product added successfully' })
    } catch (error) {
        console.error(error)
        res.json({ success: false, message: error.message })
    }
}

// function for list product
const listProduct = async (req, res) => {
    try {
        let products = await productModel.find()
        res.json({success: true, products})

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })
    }
}
// function for Removing the product
const removeProduct = async (req, res) => {
    try {
        const {id} = req.body;
        let deleteproduct = await productModel.findOneAndDelete({_id: id});
        console.log(deleteproduct);
        res.json({success: true, message: 'product deleted successfully'})
    } catch (error) {
        console.error(error)
        res.json({success: false, message: error.message})
    }
}
// function for single product info
const singleProduct = async (req, res) => {
    try {
        const {productId} = req.body;
        let product = await productModel.findById(productId)
        res.json({success:true, product})
    } catch (error) {
        console.error(error);
        res.json({success: false, message: error.message})
    }
}


export { addProduct, listProduct, removeProduct, singleProduct }