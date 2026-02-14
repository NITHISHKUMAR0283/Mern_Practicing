const express = require("express");
const dotenv = require("dotenv");
const TaskRoute = require("./src/routes/taskRoute")
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.get("/",(req,res)=>{
    console.log("sending res");
    res.send("Hello world");});
app.get("/Task",TaskRoute);
app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`);
})