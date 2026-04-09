import { Link } from "react-router-dom"; 
import api from '../services/fetchdata';
import {useEffect,useState} from 'react'
function Home(){
    api.putData();
    const [project,setproject] = useState([]);
    useEffect(()=>{
        api.getData().then(data=>setproject(data));
    },[])
    console.log(project);
    return(
        <div>
            <p>This is home Page</p>
            <h1>this is also homme page</h1>
            <ul>
                
            {project.map((p)=>{
                return(
                <li key={p.id}>
                    <Link to={`/project/${p.id}`}>{`${p.title}`}</Link>
                </li>)
            })}</ul>
        </div>
    );
}
export default Home;