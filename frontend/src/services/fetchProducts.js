export const fetchProduct =async ()=>{
    try{
    const response = await fetch("Backend url to fetch products",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    });
    const data = response.json();
    const products = data.products;
    
    return products;}
   
    catch(err){
        console.log(`Error happened during fetching produce ${err}`);
        return ;
    }
}