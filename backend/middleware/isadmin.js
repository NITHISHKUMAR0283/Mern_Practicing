export const isadmin = (req,res,next)=>{

    if(req.user.role==="admin"){
        next();
    }
    else{
        res.status(400).json({
            success:false,
            message:"unauthorized access"
        })
    }
}