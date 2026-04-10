import express from "express"
import connectDb from "../backend/config/connectDb.js";
import dotenv from 'dotenv';
import authRoute from "./routes/authRoutes.js"
import cors from 'cors';
dotenv.config();


connectDb();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
app.use("/api/auth",authRoute);
app.listen(port||5000,()=>{
    console.log(`Listening backend api on ${port||5000}`)
})