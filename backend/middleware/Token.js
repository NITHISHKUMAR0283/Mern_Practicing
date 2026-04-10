import jwt from 'jsonwebtoken';
const generate_token = async (user_id)=>{
    try{
    const token = jwt.sign({id:user_id},process.env.JWT_SECRET,{expiresIn:"1d"});
    
    return token;  }
    catch(err){
        console.log(err);
        return err;}}
export default generate_token;