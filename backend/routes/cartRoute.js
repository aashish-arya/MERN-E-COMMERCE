import express from 'express'
const cartRouter = express.Router();
import authUser from '../middleware/auth.js';
import {
    addToCart,
    getUserCart,
    updateCart
} from '../controllers/cartController.js';

cartRouter.post('/get',authUser,getUserCart)
cartRouter.post('/add',authUser,addToCart)
cartRouter.post('/update',authUser,updateCart)


export default cartRouter