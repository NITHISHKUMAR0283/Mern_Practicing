export async function signin (Form){
    const response = await fetch("http://localhost:8000/api/auth/signin",{
        method:"POST" ,
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(Form)        
    })
    
    const data = await response.json();
    if (!data || !data.token){
        return false;
    }
    return true;
}
export async function login (Form){
    try{
        const response = await fetch("http://localhost:8000/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(Form)
        })
        const data =await response.json();
        if(!data || !data.token){
            return false;
        }
        localStorage.setItem("token",data.token);
        console.log(data);
        return true;


    }
    catch(err){
        console.log(` error happened when logginin ${err.message}`)
    }
}