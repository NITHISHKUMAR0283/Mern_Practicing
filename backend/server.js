const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const TaskRoute = require("./src/routes/taskRoute")
const connectDB = require("./src/config/connectDB");
const authRoute = require("./src/routes/authRoute");
const projectRoute = require("./src/routes/projectRoute");
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(cookieParser());
app.use(express.json());
connectDB();
app.get("/",(req,res)=>{
    console.log("sending res");
    res.send("Hello world");});
app.use("/api/task",TaskRoute);
app.use("/api/auth",authRoute);
app.use("/api/project",projectRoute);






app.use((err,req,res,next)=>{
    console.log("error function called");
    res.status(500).json({
        
        message:err.message
    })
});
app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`);
})