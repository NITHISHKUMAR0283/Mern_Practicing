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

const getProject = async (req,res,next)=>{
    try{
    const projects  = await Project.find({owner:req.user._id});
    res.status(200).json({
        message:"Retrieved all the projects",
        Projects:projects
    })
    }
    catch(err){
        res.status(500).json({
            message:"Error retrieving projects",
            error:err
        })
    }

}
module.exports= {createProject,getProject};