// import React from 'react';
import { Link } from 'react-router-dom';
import './Anav.css';

const Ahome = () => {
  return (
    <div>
      <div id="viewport">
        {/* Sidebar */}
        <div id="sidebar">
          <header>
            <Link to="/Adminprofile">
              <a href="#">Admin</a>
            </Link>
          </header>
          <header>
            <Link to="/a">
              <a>DashBoard</a>
            </Link>
          </header>
          <header>
            <Link to={'/Aonline'}>
              <a>Yoga Courses</a>
            </Link>
          </header>
          <header>
            <Link to={'/Atrain'}>
              <a>Trainings</a>
            </Link>
          </header>
          <header>
            <Link to={'/'}>
              <a>Log Out</a>
            </Link>
          </header>
        </div>
        {/* Content */}
        <div id="content">
          <div className="containerr">
            <div className="row">
              <div style={{textAlign:'center'}} className="col-md-8">
                {/* Main Content (Home) */}
                <h1> Admin Birthday Events</h1>
                {/* Add more admin content as needed */}
              </div>
              <div className="col-md-4">
                {/* Right Side Content */}
                {/* <div className="card"> */}
                  <img
                  style={{marginLeft:400,marginTop:60}}
                    src="https://www.shutterstock.com/image-vector/birthday-banner-frame-hand-drawn-260nw-2164316229.jpg"
                    alt="Card Image 1"
                    className="card-img-top"
                    
                  />
                  {/* <div className="card-bodyy"> */}
                    {/* <h5 className="card-titlee">AdminPage</h5> */}
                    {/* <p className="card-textt" style={{textAlign:'center',marginTop:40}}>Clicking on this link takes the admin to the profile page where they can view and manage their administrative profile details.</p> */}
                  {/* </div> */}
                {/* </div> */}
                {/* Add more card elements as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ahome;