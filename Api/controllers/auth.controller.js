import { errorHandleer } from "../error.js";
import User from "../model/user.model.js";
import bycrptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
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
  const { email, password } = req.body;

  try {
    const valid = await User.findOne({ email });
    if (!valid) return next(errorHandleer(401, "User not Found"));

    const validPassword = bycrptjs.compareSync(password, valid.password);
    if (!validPassword) return next(errorHandleer(401, "Wrong Crendials"));

    const token = jwt.sign({ id: valid._id }, process.env.JWT_SECRET);
    const { password: hashedpassword, ...other } = valid._doc;

    const expirydate = new Date(Date.now() + 3600000);
    res
      .cookie("access_token", token, { httpOnly: true, expires: expirydate })
      .status(200)
      .json(other);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      // User exists, generate token and send response
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc; // Exclude password from response
      const expiryDate = new Date(Date.now() + 3600000);

      res.cookie('access_token', token, {
        httpOnly: true,
        expires: expiryDate,
      }).status(200).json(rest);
    } else {
      // User does not exist, create a new user
      const generatedPassword = Math.random().toString(36).slice(-8);
      const hashedpassword = bycrptjs.hashSync(generatedPassword, 10);

      const newUser = new User({
        username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-8),
        email: req.body.email,
        password: hashedpassword, // Use the hashed password here
        profile: req.body.photoURL,
      });

      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password, ...rest } = newUser._doc; // Exclude password from response
      const expiryDate = new Date(Date.now() + 3600000);

      res.cookie('access_token', token, {
        httpOnly: true,
        expires: expiryDate,
      }).status(200).json(rest);
    }
  } catch (error) {
    if (!res.headersSent) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } else {
      next(error);
    }
  }
};

export const signout = async (req , res) =>{
  res.clearCookie('access_token').status(200).json({message : 'signout successfully'});
}