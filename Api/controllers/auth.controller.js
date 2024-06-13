import User from "../model/user.model.js";
import bycrptjs from 'bcryptjs';
export const signup = async (req , res , next) =>{
    const {username , email , password} = req.body;
    const hashedpassword = bycrptjs.hashSync(password , 10);
    const newUser = new User({
        username , email , password : hashedpassword
    });
    try{
    await newUser.save();
    res.status(201).json({message : "User Created sucessfully!"});
    }catch(error){
        next(error);
    }
};