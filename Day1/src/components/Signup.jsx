import { Link } from "react-router-dom";
import '../components/Signup.css'


const Signup= () => {
    return (
      <>
      <>
  {/* Created By CodingNepal */}
  <meta charSet="utf-8" />
  <title>Login Form Design | CodeLab</title>
  <link rel="stylesheet" href="style.css" />
  <div className="wrapper" style={{marginLeft:500}}> 
    <div className="title">SignUp </div>
    <form action="#">
      <div className="field">
        <input type="text" required="" />
        <label>Name </label>
      </div>
      <div className="field">
        <input type="text" required="" />
        <label>Email Address</label>
      </div>
      <div className="field">
        <input type="password" required="" />
        <label>Password</label>
      </div>
      <div className="field">
        <input type="password" required="" />
        <label>Phone number </label>
      </div>
      <div className="content">
        <div className="checkbox">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <div className="pass-link" >
          <a href="#">Forgot password?</a>
        </div>
      </div>
      <div className="field">
        <Link to={'/'}><input type="submit" defaultValue="Login" /></Link>
      </div>
      <div className="signup-link">
        Not a member? <a href="#">Signup now</a>
      </div>
    </form>
  </div>
</>

      </>
    );
  };
  
  export default Signup;
  