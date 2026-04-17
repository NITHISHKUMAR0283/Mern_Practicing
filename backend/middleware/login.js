import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import generatetoken from "../middleware/Token.js"
export const login =async (req,res,next)=>{
    try{
        const user = await User.findOne({email:req.body.email}).select("+password");
        if(!user){
            return res.status(400).json({
                success:false,
                message:"email not found"
            })
        }
        if(!await user.comparePassword(req.body.password)){
            return res.status(400).json({
                success:false,
                message:"Password does not match"
            })
        }
        const token = await generatetoken(user.id,user.role);
        res.status(200).json({
            success:true,
            message:"login Successfull",
            token:token
        });
    }catch(err){
        return res.status(200).json({
            success:false,
            message:"Error while loggin ",
            error:err.message
        })
    }
}