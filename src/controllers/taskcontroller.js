
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

module.exports = {createTask,getTask,updateTask,deleteTask}