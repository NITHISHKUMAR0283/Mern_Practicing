async function signin (Form){
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
    const Token =  data.token;
    localStorage.setItem("token",Token);
    return true;
}
export default signin;