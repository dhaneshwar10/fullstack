// UserNavbar.js

import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file
import react from 'react';

const navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/user/profile"> </Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/event">Events </Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/">Logout</Link>
        </li>
        <li style={{marginLeft:100}}> 
          <Link to="/spd">DJV </Link>
         <img className='icon' src="src\pages\icon.jpeg"></img>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;