import Route from 'express';
import signin from '../middleware/signIn.js';
const Routes = Route.Router();
Routes.post("/signin",signin);

export default Routes;

