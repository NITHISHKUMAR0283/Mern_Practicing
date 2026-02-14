const express = require("express");
const dotenv = require("dotenv");
const TaskRoute = require("./src/routes/taskRoute")
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.get("/",(req,res)=>{
    console.log("sending res");
    res.send("Hello world");});
app.use("/api/task",TaskRoute);
app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`);
})