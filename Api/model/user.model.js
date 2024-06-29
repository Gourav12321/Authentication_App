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
        default: "https://t3.ftcdn.net/jpg/05/87/76/66/360_F_587766653_PkBNyGx7mQh9l1XXPtCAq1lBgOsLl6xH.jpg",
    }
} , {timestamps : true});

const User =  mongoose.model('User' , userSchema);

export default User;