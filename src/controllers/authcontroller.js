const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const User = require("../models/user");
const registerUser = async (req,res)=>{
    try{
    const User = User.create(req.body);
    if (User == null){
        res.status(400).json({
            success:false,
            error:"Cant able to create the user"
        })
    }
    const Token = await jwt.sign({User},process.env.JWT_SECRET,{expiresIn:"1d"});
    res.status(200).json({
        success:true,
        user: User}
    )}
    catch(err){
        res.status(400).json({
            success:false,
            error:err
        })
    }
}
const loginUser = async (req,res)=>{
    try{
    const user = await User.findOne({email:req.body.email}).select("+password");
    if (user == null){
        res.status(404).json({
            success:false,
            message:"cant able to find the userid"
        })
    }
    if( ! await User.matchpassword(req.body.password)){
        res.status(400).json({
            success:false,
            message:"invalid credentials"
        })
    }
    const Token = await jwt.sign({id:user.id},process.env.JWT_SECRET,{expiresIn:"1d"});

    res.status(200).json({
        success:true,
        token:Token
    });
}
    catch(err){
        res.status(500).json({
            succes:false,
            error:err

        })
    }
    

}