const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.get("/",(req,res)=>{
    console.log("sending res");
    res.send("Hello world");
});
app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`);
})