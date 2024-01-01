import './Login.css'
import Register from '../Register/Register';
function Login()
{
    return(
        <div >
            <div className='mainreg'>
            <div className="reg">
            <div>
            <h1>INSTAGRAM</h1>
            <input type="number" name="" id="" placeholder="enter mobilenumber" /><br/>
            <input type="password" name="" id="" placeholder="enter password"/><br/>
            <div className='btn'>
            <button>sign in</button>
            </div>
            <p><a href="/Register">register</a></p>
            </div>
            </div>
            </div>
            {window.location.pathname === '/Register' ? <Register /> : null}

        </div>
    )

}


export default Login;