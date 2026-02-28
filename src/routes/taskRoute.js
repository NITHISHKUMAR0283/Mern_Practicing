const express = require("express");
const isauthenticated = require("../middleware/authMiddleWare.js")
const router = express.Router()
const {createTask,getTask,getOneTask,updateTask,deleteTask}=require("../controllers/taskcontroller")
router.post("/",isauthenticated,createTask)
router.get("/",getTask);
router.get("/:id",getOneTask);
router.delete("/:id",isauthenticated,deleteTask);
router.put("/:id",isauthenticated,updateTask)

module.exports = router;