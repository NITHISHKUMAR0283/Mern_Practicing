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

const updateProject = async (req,res,next)=>{
    try{
        const updated = await Project.findOneAndUpdate({owner:req.user._id,_id:req.params.id},req.body,{new:true,runValidators:true});
        if(!updated){
            return res.status(404).json({
                message:"cant update the project"
            }
            )
        }
        res.status(200).json({
            message:"Updation succesfull",
            success:true,
            updated_Project:updated
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Error when updating the project"
        }
        )
    }
}

const deleteProject = async (req,res,next)=>{
    try{
        const deleted = await Project.findOneAndDelete({owner:req.user._id,_id:req.params.id});
        if(!deleted){
            return res.status(404).json({
                success:false,
                message:"cant able to delete the project"
            })}
        res.status(200).json({
            success:true,
            message:"Deleted Successfully"
        })
        
    }catch(err){
        res.status(500).json({
            success:false,
            error:err
        })
    }
}
module.exports= {createProject,getProject,getOneProject,updateProject,deleteProject};