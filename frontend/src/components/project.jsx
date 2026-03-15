
import { useParams } from "react-router-dom";

function project (){
    const {id} = useParams();
    return(
        <div>
        <h1>{`product id :${id}`}</h1>
        </div>
    )
}
export default project;