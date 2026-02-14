const express = require("express");
const router = express.Router()
const {createTask,getTask,getOneTask,updateTask,deleteTask}=require("../controllers/taskcontroller")
router.post("/",createTask)
router.get("/",getTask);
router.get("/:id",getOneTask);
router.delete("/:id",deleteTask);
router.put("/:id",updateTask)

module.exports = router;