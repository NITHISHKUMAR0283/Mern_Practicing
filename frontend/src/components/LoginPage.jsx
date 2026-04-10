import './LoginPage.css'
import { useState } from 'react';
import signin from '../services/authentication'
import {useNavigate} from 'react-router-dom'
function loginPage(){
    const navigate = useNavigate();
    const [form,setForm] =useState({name:"",email:"",password:""});
    const handleChange = (event)=>{
        event.preventDefault();
        const ele = event.target.name;
        setForm({...form,[ele]:event.target.value})
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();       
        if(!await signin(form)){
            navigate("/");

        }
        else{
        navigate('/');}


    }
    return(
        <div id="loginPage">
            <div id="LoginCard">
            
            <form action="Submit" onChange={handleChange} onSubmit={handleSubmit}  id='LoginForm'>
                <h1>Sign in</h1>
                <li>
                    <label htmlFor="Name">Name</label>
                    <input type="text" name='name' className="Name" />
                </li>
                
                <li>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' className="Email" />
                </li>
                <li>
                    <label htmlFor="Password">Password</label>
                    <input type="text" name='password' className="Password" />
                </li>
                <button type='Submit'>Submit</button>
            </form>
            </div>
        </div>
    )
}
export default loginPage;