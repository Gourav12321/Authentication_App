import { errorHandleer } from "../error.js";
import bcryptjs from 'bcryptjs';
import User from "../model/user.model.js";

// Test endpoint
export const test = (req, res) => {
  return res.json(`${console.log("hello")}`);
};

// Update user endpoint
export const updateUser = async (req, res, next) => {
    try {
        // Ensure the authenticated user is updating their own account
        if (req.user.id !== req.params.id) {
            return next(errorHandleer(401, "You can only update your account"));
        }

        // Hash the password if provided in the request body
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        // Update the user document
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    profile: req.body.profile,
                }
            },
            { new: true } // Return the updated document
        );

        // Remove hashed password from the response
        const { password, ...rest } = updateUser._doc;

        // Respond with the updated user object
        res.status(200).json(rest);
    } catch (error) {
        // Pass any caught errors to the Express error handler
        next(error);
    }
};

export const deleteUser = async (req , res ,next) =>{
    if(req.user.id !== req.params.id){
        return next(errorHandleer(401 , "You can only delete your account"));
    }
    try{
        await User.findOneAndDelete(req.user.id);
        res.status(200).json("User has been deleted");
    }catch(error){
        next(error);
    }
}