
const isauthorized = (Model)=>{
    return async(req,res,next)=>{
        const resource = await Model.findById(req.params.id);
        if(!resource){
            return res.status(404).json({
                message:"Resource not found"
            })
        }
        const created_by = resource.createdBy;
        if( req.user._id.toString()!=created_by.toString()){
            return res.status(403).json({
                message:"Forbidden"
            })
        }
        next();
    }
    
}