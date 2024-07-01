import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
// import { createError } from "../utils/error.js";
export const signup = async(req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword =  bcryptjs.hashSync(password, 10)
    const newUser = new User({username, email, password: hashedPassword});
    try {
        await newUser.save()
        res.status(200).json({message: "User created Successfully"})
        
    } catch (error) {
        next(error)
    }
   
}

export const signin = async(req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({email});
        if (!validUser) {    
            return next(error)
        }
        const isPasswordCorrect =  bcryptjs.compareSync(password, validUser.password);
        if (!isPasswordCorrect) {
            return next(error)
        }
        const token = jwt.sign({id: validUser._id, email: validUser.email}, process.env.JWT_SECRET);
        const {password: hashedPassword, ...rest } = validUser._doc
        const expirationDate = new Date(Date.now()+ 3600000); // 1 hour from now
        res.cookie("access_token", token, {httpOnly: true , expires: expirationDate}).status(200).json(rest)
        
        
    } catch (error) {
        next(error)
    }
}