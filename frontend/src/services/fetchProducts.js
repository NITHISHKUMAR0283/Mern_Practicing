export const fetchProduct =async ()=>{
    try{
    const response = await fetch("http://localhost:8000/api/product/getProduct",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    });
    const data = await response.json();
    const products = data.products;
    
    return products;}
   
    catch(err){
        console.log(`Error happened during fetching produce ${err.message}`);
        return ;
    }
}