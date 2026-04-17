import mongoose from "mongoose";
import bycrypt from "bcryptjs"
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
});
UserSchema.pre("save",async function(next){
    if(!this.isModified(password))return next();
    else{
        const salt = await bycrypt.genSalt(10);
        this.password = await bycrypt.hash(this.password,salt);
        
    }
})
UserSchema.methods.comparePassword=async function(password){
    return await bycrypt.compare(password,this.password);
}
export default  mongoose.model("USER",UserSchema);