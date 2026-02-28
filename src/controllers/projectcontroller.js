const Project = require("../models/projects")
const createProject = async (req,res,next)=>{
    try{
    const project = await Project.create({...req.body,owner:req.user._id});
    res.status(201).json({
        message:"Project created Successfully",
        Project_object:project
    })
}
    catch(err){
        res.status(500).json({
            message:"Error creating project",
            error:err
        })
    }
}
module.exports= {createProject};