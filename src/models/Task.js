const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    priority:{
        type:String,
        enum:["low","medium","high"]
    }
})
module.exports = mongoose.model("Task",taskSchema);