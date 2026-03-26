const getData = async ()=>{
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    return data;}
    catch(err){
        console.log("error when fetching  ",err);
    }}
export default getData;