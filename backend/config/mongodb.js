import mongoose, { mongo } from "mongoose";

const connectDB= async()=>{
    try {
        mongoose.connection.on('connected',()=>{
            console.log('DB Connected')
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
    } catch (err) {
        console.err(err)
    }
}
export default connectDB;