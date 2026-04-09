
import {Link} from  'react-router-dom'
function HomePage(){
    return(
        <div>
            
        <nav>this is a nav bar</nav>
        <h1>this is home page</h1>
        <h1>please login for more experience</h1>
        <Link to={'/login'}>
        <button >Login</button></Link>
        </div>
    )
}
export default HomePage;