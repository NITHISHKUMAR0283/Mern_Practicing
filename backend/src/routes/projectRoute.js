const express = require("express");
const Router = express.Router();
const isauthenticated = require("../middleware/authMiddleWare.js")
const {createProject,getProject,getOneProject,updateProject,deleteProject} = require("../controllers/projectcontroller");

Router.use(isauthenticated);
Router.post("/",createProject);
Router.get("/",getProject);
Router.get("/:id",getOneProject);
Router.put("/:id",updateProject);
Router.delete("/:id",deleteProject)

module.exports =  Router;