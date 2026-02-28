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

const getOneProject = async (req,res,next)=>{
    try{
    const project = await Project.findOne({owner:req.user._id,_id:req.params.id});
    if(!project){
        return res.status(404).json({
            message:"Cant find a project by the given id",
        })
    }
    res.status(200).json({
        message:"Successfully found the project by id",
        project_:project
    })
}
    catch(err){
        res.status(500).json({
            message:"Error in finding the project by given id ",
            error:err
        })
    }
}
module.exports= {createProject,getProject,getOneProject};