import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean, required: true },
    date: { type: Number, required: true, default: Date.now }
})
// before || operator we are saying if there is already a model is defined then dont create a new otherwise create new

const productModel = mongoose.models.product || mongoose.model('product', productSchema);

export default productModel