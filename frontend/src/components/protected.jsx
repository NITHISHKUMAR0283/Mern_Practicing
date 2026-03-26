import { Navigate } from "react-router-dom";
function protected_route({isLoggedIn,children}){
    if(!isLoggedIn){
        return ( <Navigate to={"/"}/>)
    }
    return children;
}
export default protected_route;