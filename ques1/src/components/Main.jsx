import Login from "./Login/Login";
import Register from "./Register/Register";

function Main()
{
    return(
    <>
    <a href="/Login"> log in </a>
    <br/>
    <a href="/Register">resgister</a>
    {window.location.pathname === '/Login' ? <Login /> : null}
    {window.location.pathname === '/Register' ? <Register /> : null}
    </>
    )
}


export default Main;