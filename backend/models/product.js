import mongoose from 'mongoose';
const ProductSchema = await mongoose.Schema({
    name:{
        type:String,
        requried:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    }
});
export default mongoose.model("Product",ProductSchema);