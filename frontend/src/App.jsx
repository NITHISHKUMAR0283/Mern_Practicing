import TextSignUp from "./components/TextSignUp.jsx";
import {Route,Routes} from 'react-router-dom'
import Project from './components/project.jsx'
import Home from "./components/Home";
import Protected_route from "./components/protected.jsx";
import React, { useState } from 'react'; 
function App() {
  const [isLogged,setLogged]=useState(false);
  return (
    <div>
    <Routes>
      
      <Route path='/project/:id'element={<Project/>}/>
      <Route path='/protected' element ={<Protected_route isLoggedIn={isLogged}><Home/></Protected_route>}/>
      <Route path ='/' element={<TextSignUp setlogin = {setLogged}/>}/>
      <Route path= '/login' element ={}
    </Routes>
      
    </div>
);
}
export default App;