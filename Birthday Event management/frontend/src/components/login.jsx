
// import { Link } from 'react-router-dom';
// import './login.css'
// const Login= () => {
//     return (

//   <div className="loginpage">
//   <div  className="wrapper">
//     <div className="title">Login </div>
//     <form action="#">
//       <div className="field">
//         <input type="text" required="" />
//         <label>Email Address</label>
//       </div>
//       <div className="field">
//         <input type="password" required="" />
//         <label>Password</label>
//       </div>
//       <div className="content">
//         <div className="checkbox">
//           <input type="checkbox" id="remember-me" />
//           <label htmlFor="remember-me">Remember me</label>
//         </div>
//         <div className="pass-link">
//           <a href="#">Forgot password?</a>
//         </div>
//       </div>
//       <div className="field">
//        <Link to='/home'><input type="submit" defaultValue="Login" /></Link>
//       </div>
//       <div className="signup-link">
//         <button><Link to={'/signup'}>
//           Signup</Link></button>
//       </div>
//     </form>
//   </div>
//   </div>
//     );
//   };
  
//   export default Login;


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { signIn } from './auth';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can perform any validation or processing before sending the data
    const form = {
      email: email,
      password: password
    };
    signIn(form)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      const decoded = jwtDecode(res.data.token);
      console.log(decoded.sub);
      console.log('====================================');
      console.log(res.data.token);
      console.log('====================================');
      if(decoded.sub === 
        
        
        
        
        
        
        "admin@gmail.com"){
      alert("Login Successful");
      navigate('/a');
      }
      else{
        navigate('/home');
      }
    })
    .catch((err) => {
      console.error(err);
    });
    // Example of sending the form data via POST method using fetch API
   
  };

  return (
    <div className="loginpage" >
      
      <div className="wrapper">
        <div className="title">Login</div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input type="text" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input type="password" required="" value={password} onChange={(e) => setPassword(e.target.value)} />
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
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            <button>
              <Link to="/signup">Signup</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

  