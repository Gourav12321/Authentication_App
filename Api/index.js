import express from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose";
import userRoute from './route/user.route.js'
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Database is Connected Sucessfully!");
}).catch((error) => {
    console.error("Database connection error:", error);
});

app.use("/user",userRoute);

app.listen(3000, ()=>{
    console.log("Server is running on 3000 port");
})