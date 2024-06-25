// import React from 'react'
import jwt from 'jsonwebtoken';
function VerifyToken(req, res , next) {
    const token = req.cookies.access_token;

    if (!token) return res.status(401).json("You need to login");
    jwt.verify(token , process.env.JWT_SECRET, (err  , user)=>{
        if (err) return res.status(403).json("Token is not Valid");
        req.user = user;
        next();
    });
}

export default VerifyToken