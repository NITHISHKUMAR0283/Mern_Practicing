import { Link } from "react-router-dom"; 
function Home(){
    
    const  project = [
    { id: 1, name: "React Website" },
    { id: 2, name: "Machine Learning App" }]
    return(
        <div>
            <p>This is home Page</p>
            <h1>this is also homme page</h1>
            <ul>
                
            {project.map((p)=>{
                return(
                <li key={p.id}>
                    <Link to={`/project/${p.id}`}>{`${p.name}`}</Link>
                </li>)
            })}</ul>
        </div>
    );
}
export default Home;