
import { Link } from 'react-router-dom';
import './login.css'
const Login= () => {
    return (

  <div className="loginpage">
  <div  className="wrapper">
    <div className="title">Login </div>
    <form action="#">
      <div className="field">
        <input type="text" required="" />
        <label>Email Address</label>
      </div>
      <div className="field">
        <input type="password" required="" />
        <label>Password</label>
      </div>
      <div className="content">
        <div className="checkbox">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <div className="pass-link">
          <a href="#">Forgot password?</a>
        </div>
      </div>
      <div className="field">
        <Link to={'/home'} ><input type="submit" defaultValue="Login" /></Link>
      </div>
      <div className="signup-link">
        Not a member?<Link to={'/signup'}> <a href="#">Signup now</a> </Link> 
      </div>
    </form>
  </div>
  </div>
    );
  };
  
  export default Login;
  