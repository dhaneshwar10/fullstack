// import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMobileAlt,} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>Email: djvbirthdayevents@gmail.com</p>
          <p>Phone: +91 8903884371</p>
        </div>

        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
          
            <li>
              <NavLink to="/plans">Events</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Themes</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nett Inc. All rights reserved.</p>
      </div>

      <footer className="foo">
        <div className="footersection">
          <div className="footericons">
            <FontAwesomeIcon icon={faCreditCard} />
            <div style={{ marginLeft: 20 }}>
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            {/* <div style={{ marginLeft: 20 }}>
              <FontAwesomeIcon icon={faWifi} />
            </div> */}
            {/* Add more icons as needed */}
          </div>
          <p>&copy; {new Date().getFullYear()} Nett Inc.</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;