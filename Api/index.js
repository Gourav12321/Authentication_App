import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";
import userRoute from './route/user.route.js';
import authRoute from "./route/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from 'path';

const __dirname = path.resolve();
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Database is Connected Sucessfully!");
}).catch((error) => {
    console.error("Database connection error:", error);
});
app.use(cookieParser());
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