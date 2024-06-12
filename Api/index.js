import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";
import userRoute from './route/user.route.js';
import authRoute from "./route/auth.route.js";
const app = express();
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Database is Connected Sucessfully!");
}).catch((error) => {
    console.error("Database connection error:", error);
});

app.use("/user",userRoute);
app.use("/auth",authRoute);

app.listen(3000, ()=>{
    console.log("Server is running on 3000 port");
});

app.use((err , req , res , next) =>{
    const statusCode = err.statusCode || 500 ;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});