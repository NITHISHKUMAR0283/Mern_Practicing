import express from 'express';
import signin from '../middleware/signIn.js';
import {login} from "../middleware/login.js"
import { isadmin } from '../middleware/isadmin.js';
const Routes = express.Router();
Routes.post("/signin",signin);
Routes.post("/login",isadmin,login)


export default Routes;

