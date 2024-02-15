

// export default CustomNavBar;

import { Navbar, Nav, Dropdown } from 'rsuite'; // Include Dropdown in the import
// import HomeIcon from '@rsuite/icons/legacy/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from 'react-router-dom';


const CustomNavBar = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#">
        { <img
          // src="https://makemyevent.in/wp-content/uploads/2019/11/cropped-cropped-Logo-Home-Header-1-2048x691.png"
          alt="DJV"
          // style={{ height: '30px', marginRight: '5px' }} // Adjusted marginRight
        /> }
      </Navbar.Brand>
      <Nav sx={{ flexGrow: 0, '&:hover': { textDecoration: 'none',color: 'Black' }, color: 'black' }}>
        <Nav.Item><Link to={'/home'}>HOME</Link></Nav.Item>
        <Nav.Item><Link to={'/event'}>EVENTS</Link></Nav.Item>
        <Nav.Item><Link to={'/food'}>FOOD ITEMS</Link></Nav.Item>
        <Nav.Item><Link to={'/gallery'}> IMAGES </Link></Nav.Item>
        <Nav.Item><Link to={'/aboutus'}>ABOUT US</Link></Nav.Item>
        <Nav.Item><Link to={'/pay'}>PAYMENT</Link></Nav.Item>

      </Nav>
      <Nav pullRight>
      
          <Dropdown icon={<CogIcon />} title="SETTINGS">
            {/* Use Dropdown from the imported rsuite */}
            <Dropdown.Item>
             <Link to={'/prof'}><Nav.Item>
                <FontAwesomeIcon icon={faUser} />PROFILE
              </Nav.Item></Link> 
            </Dropdown.Item>
            <Dropdown.Item>
              <Nav.Item>
                <Link to={'/'}><FontAwesomeIcon icon={faSignOutAlt} /> LOGOUT
                </Link> </Nav.Item>
            </Dropdown.Item>
          </Dropdown>
       
      </Nav>
    </Navbar>
  );
};

export default CustomNavBar;