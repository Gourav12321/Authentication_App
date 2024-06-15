import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";
import userRoute from './route/user.route.js';
import authRoute from "./route/auth.route.js";
import cors from "cors";


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Database is Connected Sucessfully!");
}).catch((error) => {
    console.error("Database connection error:", error);
});

app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);

app.listen(3000, ()=>{
    console.log("Server is running on 3000 port");
});

app.use((err , req , res , next) =>{
    const statusCode = err.statusCode ;
    const message = err.message ;
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});