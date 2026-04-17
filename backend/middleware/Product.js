import Product from '../models/product.js';
export const createProduct = async (req,res)=>{
    try{
        const newProduct = await Product.create({...req.body});
        if(!newProduct){
            res.status(400).json({
                success:false,
                message:"Error creating product",
            })}
        res.status(200).json({
            success:true,
            product:newProduct
        });
    }
    catch(err){
        res.status(200).json({
            success:false,
            message:`Error creating product ${err.message}`
        })
    }
}
export const getProduct = async (req,res)=>{
    try{
        const product = await Product.find();
        if(!product){
            res.status(400).json({
                success: false,
                message:`cant fetch the product ${product}`
            });
        }
        res.status(200).json({
            status:true,
            message:"successfully fetched the products",
            products:product
        })
    }
    catch(err){
        res.status(400).json({
                success: false,
                message:`cant fetch the product ${err.message}`
            });
    }
}
export const delProduct = async(req,res)=>{
    try{
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({
            message: "Product deleted successfully",
            deletedProduct: deleted
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}