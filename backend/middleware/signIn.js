
import USER from '../models/user.js';
import generate_token from './Token.js';


const SignUp =async (req,res)=>{
    try{
        
        const newuser =await USER.create({...req.body});
    if(!newuser){
        res.status(400).json({
            success:false,
            message:"Cant able to create the user backend problem is there"
        })
    }
    const token = await generate_token(newuser._id);

    res.status(200).json({
        success:true,
        message:"Successfully created the user",
        token :token
    })
}catch(err){
    res.status(400).json({
        success:false,
        message:"Error while creating the user in the db",
        error:err
    })
}
}

export default SignUp;