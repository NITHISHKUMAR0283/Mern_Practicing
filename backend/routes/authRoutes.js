import express from 'express';
import signin from '../middleware/signIn.js';
import {login} from "../middleware/login.js"
const Routes = express.Router();
Routes.post("/signin",signin);
Routes.post("/login",login);


export default Routes;

