const mongoose = require("mongoose");

const projectSchema =new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    description:{
        type: String,
    },
    status:{
        type:String,
        enum:["active","on-hold","completed"],
        default:"active"
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now

    }
});
module.exports=mongoose.model("Project",projectSchema);