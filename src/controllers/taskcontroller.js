
const Task  = require("../models/Task");

const createTask = async (req,res)=>{
    try{
    const task = await Task.create(req.body);
    res.status(201).json({
        success:true,
        task_created:task
    })}
    catch(err){
        res.status(500).json({
            success:false,
            message:`there is a error ${err}`})
    }

}
const getTask = async (req,res)=>{
    try{
        const tasks = await Task.find();
        return res.status(200).json({
            success:true,
            task : tasks
        })
    }
    catch(err){
        res.status(400).json({
            success:false,
            message:`There is a retreiving the task${err}`
            
        })
    }
}
const getOneTask = async(req,res)=>{
    try{
        const task = await Task.findById(req.params.id);
        if (task ==null){
            return res.status(404).json({
                success:false,
                message:"Cant find the product"
            })
        }
        res.status(200).json({
            success:true,
            task:task
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:`There is a error finding the task in the given id ${err}`
            
        })
    }
}
const updateTask = async (req,res)=>{
    try{
    const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
    if (task == null){
        return res.status(404).json({
            success:false,
            message:"Cant find by the id given"
        })
    }
    res.status(200).json({
        success:true,
        message:`Successfully updated the tasks`,
        newtask:task
    })
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:`cant update the task ${err}`
        })
    }
}

module.exports = {createTask,getTask,updateTask,deleteTask}