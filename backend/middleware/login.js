import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import generatetoken from "../middleware/Token.js"
export const login =(req,res,next)=>{
    try{
        const user = User.findOne({email:req.body.email}).select("+password");
        if(!user){
            res.status(400).json({
                success:false,
                message:"email not found"
            })
        }
        if(!user.comparePassword(user.password)){
            res.status(400).json({
                success:false,
                message:"Password does not match"
            })
        }
        const token = generatetoken(user.id,user.role);
        res.status(200).json({
            success:true,
            message:"login Successfull",
            token:token
        });
    }catch(err){
        res.status(200).json({
            success:false,
            message:"Error while loggin ",
            error:err
        })
    }
}