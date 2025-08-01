import userModel from '../models/userModel.js'
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Route for user login
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User doesn't exists" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = createToken(user._id);
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, message: "Invalid Credentials" })
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Route for user Registration
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // checking user already exist or not
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.json({ success: false, message: "User already exist" })
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Please Enter a valid email' })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: 'Password should be of 8 Characters' })
        }
        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token })

    } catch (err) {
        console.error(err);
        res.json({
            success: false,
            message: err.message
        })
    }
}

// route for admin login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // it can be decoded so it is less secure because we are sending them the object
        // if(email=== process.env.ADMIN_EMAIL && password=== process.env.ADMIN_PASSWORD){
        //     const token = jwt.sign({email,password},process.env.JWT_SECRET)
        // }
        // this is safe and better approach
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, message: 'Invalid Credentials' })
        }

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message })
    }
}
export { loginUser, registerUser, adminLogin }