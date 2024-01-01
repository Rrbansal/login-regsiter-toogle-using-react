import './Register.css'
import Login from '../Login/Login';
function Register()
{
    return(
        <div >
            <div className='mainreg'>
            <div className="reg">
            <div>
            <h1>INSTAGRAM</h1>
            <input type="number" name="" id="" placeholder="enter mobilenumber" /><br/>
            <input type="text" name="" id="" placeholder="enter name" /><br/>
            <input type="email" name="" id="" placeholder="enter email" /><br/>
            <input type="password" name="" id="" placeholder="enter password"/><br/>
            <div className='btn'>
            <button>sign up</button><br/>
            </div>
            <p><a href="/Login">sign in</a></p>
            </div>
            </div>
            </div>
            {window.location.pathname === '/Login' ? <Login /> : null}
        </div>
    )

}


export default Register;