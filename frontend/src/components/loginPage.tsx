
function LoginPage (){
    const  handleSubmit  = async ()=>{
    const response =fetch("/api/auth/login",{
        method:"GET",
        headers:{
            Authorization : `Bearer ${localStorage.getItem("token")}`
        }
    }
);};
    return (
        <div>
            
        </div>
    )
}