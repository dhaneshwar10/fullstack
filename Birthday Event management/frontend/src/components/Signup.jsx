import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Signup.css';
import { signUp } from './auth';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can perform any validation or processing before sending the data
    const form = {
      name: name,
      email: email,
      password: password
    };

    signUp(form)
    .then((res) => {
      
      console.log('====================================');
      console.log(res.data.token);
      console.log('====================================');
      alert("Register  Successful");
      navigate('/');
    })
    .catch((err) => {
      console.error(err);
    });
  };

  return (
    <div className='m'>
      <div className="wrapper" style={{ marginLeft: 500 }}>
        <div className="title">SignUp</div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <input type="text" required="" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Name</label>
          </div>
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
            <input type="submit" value="Signup" />
          </div>
          <div className="signup-link">
            Already a member? <Link to="/">Login now</Link>
          </div>
        </form>
      </div>
      </div>
  );
};

export default Signup;
