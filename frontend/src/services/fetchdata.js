const getData = async ()=>{
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
    return data;}
    catch(err){
        console.log("error when fetching  ",err);}}
const putData = async ()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                title: "New Post",
                body: "Learning POST request",
                userId: 1
            })
        })
        const data = await response.json();
        console.log("received data",data);
        return data;
    }
    catch(err){
        console.log("Error when fetching ",err);
    }
}
putData();
export default {getData,putData};