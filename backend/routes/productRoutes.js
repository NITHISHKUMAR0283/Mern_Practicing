import express from 'express';
import {createProduct,getProduct,delProduct} from '../middleware/Product.js'

const Router = express.Router();
Router.post("/createProduct",createProduct);
Router.get("/getProduct",getProduct);
Router.delete("/delProduct/:id",delProduct);

export default Router;