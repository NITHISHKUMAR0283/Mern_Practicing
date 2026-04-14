import mongoose from "mongoose";

const UserSchema = await mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    }
})
export default  mongoose.model("USER",UserSchema);