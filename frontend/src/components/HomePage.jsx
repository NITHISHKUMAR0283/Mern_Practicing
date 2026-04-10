
import {Link} from  'react-router-dom'
function HomePage(){
    const token = localStorage.getItem("token");
    return(
        <div>
            
        <nav>this is a nav bar</nav>
        <h1>this is home page</h1>
        {!token&& <h1>please login for more experience</h1>}
        <Link to={'/login'}>
        {!token && <button >Login</button>}</Link>
        </div>
    )
}
export default HomePage;