import TextSignUp from "./components/TextSignUp.jsx";
import {Route,Routes} from 'react-router-dom'
import Project from './components/project.jsx'
import Home from "./components/Home";
function App() {
  return (
    <div>
    <Routes>
      <Route path='/text'element={<TextSignUp /> }/>
      <Route path='/home'element ={<Home/>}/>
      <Route path='/project/:id'element={<Project/>}/>
    </Routes>
      
    </div>
);
}
export default App;