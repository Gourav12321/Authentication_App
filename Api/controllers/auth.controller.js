import { errorHandleer } from "../error.js";
import User from "../model/user.model.js";
import bycrptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedpassword = bycrptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedpassword,
  });
  try {
    await newUser.save();
    res.status(201).json({ message: "User Created sucessfully!" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email , password} = req.body;

  try {
    const valid = await User.findOne({ email });
    if (!valid) return next(errorHandleer(401, "User not Found"));

    const validPassword = bycrptjs.compareSync( password , valid.password);
    if (!validPassword) return next(errorHandleer(401, "Wrong Crendials"));

    const token = jwt.sign({ id: valid._id }, process.env.JWT_SECRET);
    const{password : hashedpassword, ...other } = valid._doc;
    

    const expirydate = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expirydate })
      .status(200)
      .json(other);
  } catch (error) {
    next(error);
  }
};
