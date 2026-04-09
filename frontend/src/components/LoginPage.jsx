import './LoginPage.css'
function loginPage(){
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log("Called the submit function by on submit")
    }
    return(
        <div id="loginPage">
            <div id="LoginCard">
            
            <form action="Submit" onSubmit={handleSubmit}  id='LoginForm'>
                <h1>Login</h1>
                <li>
                    <label htmlFor="Name">Name</label>
                    <input type="text" className="Name" />
                </li>
                
                <li>
                    <label htmlFor="email">Email</label>
                    <input type="text" className="Email" />
                </li>
                <li>
                    <label htmlFor="Password">Password</label>
                    <input type="text" className="Password" />
                </li>
                <button type='Submit'>Submit</button>
            </form>
            </div>
        </div>
    )
}
export default loginPage;