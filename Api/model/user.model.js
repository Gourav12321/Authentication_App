import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique : true
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true,
    
    },
    profile :{
        type : String,
        default: "https://www.pikpng.com/pngl/m/16-168770_user-iconset-no-profile-picture-icon-circle-clipart.png",
    }
} , {timestamps : true});

const User =  mongoose.model('User' , userSchema);

export default User;