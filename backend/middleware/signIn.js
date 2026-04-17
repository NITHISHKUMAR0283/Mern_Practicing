
import USER from '../models/user.js';

const SignUp =async (req,res)=>{
    try{
        console.log(req.body);
        
        const newuser =await USER.create({...req.body});
    if(!newuser){
        return res.status(400).json({
            success:false,
            message:"Cant able to create the user backend problem is there"
        })
    }
    res.status(200).json({
        success:true,
        message:"Successfully created the user",
        
    })
}catch(err){
    res.status(400).json({
        success:false,
        message:"Error while creating the user in the db",
        error: err.message || err.toString()
    })
}
}

export default SignUp;