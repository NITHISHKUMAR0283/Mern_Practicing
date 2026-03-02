const express = require("express");
const isauthorized = require("../middleware/authorization.js")
const Task = require("../models/Task")
const isauthenticated = require("../middleware/authMiddleWare.js")
const router = express.Router()
const {createTask,getTask,getOneTask,updateTask,deleteTask}=require("../controllers/taskcontroller")
router.post("/",isauthenticated,createTask)
router.get("/",isauthenticated,getTask);
router.get("/:id",isauthenticated,getOneTask);
router.delete("/:id",isauthenticated,isauthorized(Task),deleteTask);
router.put("/:id",isauthenticated,isauthorized(Task),updateTask)

module.exports = router;