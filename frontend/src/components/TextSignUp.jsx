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
        if(form.name.trim()===""){
            errors.name ="Please enter the name";
        }
        if(form.email.trim()===""){
            errors.email = "please enter valid email";
        }
        if(form.password.length<8){
            errors.password = "please enter valid password";
        }
        return errors;
    }

    function handleSubmit(e){
        e.preventDefault();
        let err = validate();
        if(Object.keys(err).length>0){
            seterror(err);
        }
        else{
            alert("Form submitted successfully");
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