import jwt from 'jsonwebtoken'
export const login =(req,res,next)=>{
    console.log(req.headers);
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({ message: "No token" });
    }
    try{
        const payload =  jwt.verify(token,process.env.JWT_SECRET);
        req.user = payload;
        next();
    }
    catch(err){
        res.status(401).json({ message: "Invalid token" });
    }
}