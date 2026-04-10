import mongoose from "mongoose"
const connectDb = async ()=>{
    try{
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected succesfully");
    }
    catch(err){
        console.log("error while connecting", err);
    }
}
export default connectDb;