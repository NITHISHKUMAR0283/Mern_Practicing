const express = require("express");
const router = express.Router()
const {createTask,getTask,getOneTask,updateTask,deleteTask}=require("../controllers/taskcontroller")
router.post("/create",createTask)
router.get("/get",getTask);
router.get("/get/:id",getOneTask);
router.delete("/delete/:id",deleteTask);
router.put("/update/:id",updateTask)