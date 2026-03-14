import {useState} from "react";

function SignUp(){
    const [ form , setform]=useState({
        name:"",
        email:"",
        password:""
    });
    function handlechange(e){
        const {name,value} = e.target;
        setform({
            ...form,
            [name] :value
        });
    }
    const [error,seterror]=useState({});
    function validate(){
        let errors ={};
        const PasswordPattern = /^(?=.*[A-Z])(?=(?:.*\d){4,}).{8,}$/
        const EmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(form.name.trim()===""){
            errors.name ="Please enter the name";
        }
        if(!EmailPattern.test(form.email)){
            errors.email = "please enter valid email";
        }
        if(!PasswordPattern.test(form.password)){
            errors.password = "Enter a strong password Minimum 8 Characters,1 Upper Case, 4 digits";
        }
        return errors;
    }

    function handleSubmit(e){
        e.preventDefault();
        let err = validate();
        console.log(err);
        if(Object.keys(err).length>0){
            seterror(err);
        }
        else{
            alert("Form submitted successfully");
            seterror({name:"",password:"",email:""});
        }

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input name= "email" type="text"placeholder="Email"onChange={handlechange} value={form.email} />
            {error.email&& <p>{error.email}</p>}
            <input name = "password" type="text"placeholder="password" onChange={handlechange} value ={form.password}/>
            {error.password&&<p>{error.password}</p>}
            <input 
           name = "name" type="text"placeholder="name"onChange={handlechange}value ={form.name} />
            {error.name&&<p>{error.name}</p>}
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}
export default SignUp;