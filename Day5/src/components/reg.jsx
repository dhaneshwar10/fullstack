import React, { useState } from 'react';
import CustomNavBar from './CustomNavBar';
import { Link } from 'react-router-dom';

const styles = {
  yogaRegistrationContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '400px',
    margin: 'auto',
  },
  h2: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    margin: '10px 0',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    marginBottom: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  /* Added styles for email field */
  emailInput: {
    /* Customize the styles for the email input field */
  },
};

const YogaRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    experienceLevel: '',
    preferredClassTime: '',
    medicalConditions: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your yoga academy registration logic here (e.g., API call, validation, etc.)
    console.log('Form Data:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      age: '',
      experienceLevel: '',
      preferredClassTime: '',
      medicalConditions: '',
      email: '',
    });
  };

  return (
    <div>
           <header>
                <CustomNavBar/>
            </header>
            <br></br>
            <br></br>
    <div style={styles.yogaRegistrationContainer}>
     
      <h2 style={styles.h2}>Event Booking </h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Enter the Applicant Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Enter the Mobile no:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
            Name of Event:
          <input
            type="text"
            name=""
            value={formData.experienceLevel}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Enter Time of Event:
          <input
            type="text"
            name="preferredClassTime"
            value={formData.preferredClassTime}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Enter number of peoples:
          <textarea
            name="medicalConditions"
            value={formData.medicalConditions}
            onChange={handleChange}
            style={styles.input}
          ></textarea>
        </label>
        <label style={styles.label}>
            Enter Applicant Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ ...styles.input, ...styles.emailInput }}
          />
        </label>


        <Link to={'/food'}>
        <button type="submit" style={styles.button}>
          Submit
        </button>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default YogaRegistration;