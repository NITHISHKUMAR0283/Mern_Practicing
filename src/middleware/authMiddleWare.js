const jwt = require("jsonwebtoken")
const User = require("../models/user")
const isAuthenticated = async (req,res,next)=>{
    const header = req.headers.authorization;
    if(!header || !header.startsWith("Bearer ")){
        return res.status(401).json({
            message:"Unathorized access"});
    }
    const token = header.split(" ")[1];
    if (!token){
        res.status(401).json({
            message:"No token provided"
        });
    }
    try{
    const payload = jwt.verify(token,process.env.JWT_SECRET);
    const user = await User.findById(payload.id).select("-password");
    if (!user){
        res.status(401).json({
            message:"User not found"
        })
    }
    req.user = user;
    next();
    }
    catch(err){
        return res.status(401).json({
            message:"Invalid or expired token"
        })
    }
    }
module.exports=isAuthenticated;
