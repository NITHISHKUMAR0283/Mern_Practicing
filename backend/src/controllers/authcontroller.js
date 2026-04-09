const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const User = require("../models/user");
const registerUser = async (req,res)=>{
    try{
    const user = await User.create(req.body);
    if (user == null){
        return res.status(400).json({
            success:false,
            error:"Cant able to create the user"
        })
    }
    const Token =jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"});
    res.status(200).json({
        token: Token,
        success:true,
        user: user}
    )}
    catch(err){
        res.status(400).json({
            success:false,
            error:err
        })
    }
}
const generaterefresh = async (user)=>{
    const refresh =jwt.sign({user:user._id},process.env.JWT_REFRESH,{expiresIn:"7d"});
    return refresh;
}

const generateaccess = async (user)=>{
    const access =jwt.sign({user:user._id},process.env.JWT_ACCESS,{expiresIn:"7d"});
    return access;
}

const loginUser = async (req,res)=>{
    try{
    const user = await User.findOne({email:req.body.email}).select("+password");
    if (user == null){
        return res.status(404).json({
            success:false,
            message:"cant able to find the userid"
        })
    }
    if( ! await user.matchpassword(req.body.password)){
        return res.status(400).json({
            success:false,
            message:"invalid credentials"
        })
    }
    const refreshtoken = await generaterefresh(user);
    const accesstoken = await generateaccess(user);

    user.refreshtoken = refreshtoken
    await user.save()
    res.cookie("refreshtoken",refreshtoken,{
        httpOnly:true,
        secure : process.env.NODE_ENV==="production",
        sameSite:"Strict",
        path:"/auth/refresh"
    }).json({access:accesstoken})
}
    catch(err){
        res.status(500).json({
            success:false,
            error:err

        })
    }
    

}

const logoutUser = async (req,res) =>{

    try{
    const refreshtoken = req.cookies.refreshtoken
        if (!refreshtoken){
        return res.status(401).json({
            success:false,
            message:"Token not found"
        })
    }
    const payload = jwt.verify(refreshtoken,process.env.JWT_REFRESH);
    const userid = payload.user
    const user = await User.findById(userid);
    if (user == null){
        return res.status(400).json({
            success:false,
            message:"User not found"
        })
    }
    user.refreshtoken = null;
    await user.save();
    res.clearCookie("refreshtoken",{path:"/auth/refresh"});
    res.sendStatus(200);}
    catch(err){
        res.status(500).json({
            success:false,
            error:err

        })
    }
}

    

module.exports ={registerUser,loginUser,logoutUser}