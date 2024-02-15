import '../components/profile.css';
import b2 from "./pro.jpg";
import CustomNavBar from '../components/CustomNavBar';

function Profile() {
  // Sample data
  const courses = [
    { id: 1, name: 'Programming and Web Development', progress: 60 },
    { id: 2, name: 'Data Science and Machine Learning', progress: 40 },
    { id: 3, name: 'Business and Marketing', progress: 75 },
    { id: 4, name: 'Graphic Design and Creative Arts', progress: 80 },
    { id: 5, name: 'IELTS Test Prep', progress: 55 },
    { id: 6, name: 'TOEFL iBL Exam Preparation', progress: 90 },
    { id: 7, name: 'IT and Networking', progress: 70 },
    { id: 8, name: 'Health and Fitness', progress: 85 },
    // Add more courses as needed
  ];

  const userData = {
    username: 'Dhanesh',
    email: 'dhanesh@123',
    age: 19,
    dob:'10/06/2004',
    country: 'INDIA',
    address: 'B K Pudhur,Coimbatore',

    occupation: 'Student',
    interests: ['Reading', 'Writing', 'Coding'],
    // Add more user parameters as needed
  };

  return (
    <>
      <CustomNavBar className="custom-navbar" />
      <div className="app_profile">
        <section className="user-section_profile">
          <div className="user-card_profile">
            <div className="user-image_profile">
              <img src={b2} alt="Profile Picture" />
            </div>
            <div className="user-details_profile">
              <h3 className="user-name_profile">{userData.username}</h3>
              <p className="user-email_profile">Email: {userData.email}</p>
              <p className="user-age_profile">Age: {userData.age}</p>
              <p className="user-age_profile">Dob: {userData.dob}</p>
              <p className="user-country_profile">Address: {userData.address}</p>
              {/* <p className="user-occupation_profile">Occupation: {userData.occupation}</p>
              <p className="user-interests_profile">Interests: {userData.interests.join(', ')}</p> */}
              {/* Add other user parameters here */}
            </div>
          </div>
        </section>
        
        
      </div>
    </>
  );
}

export default Profile;
