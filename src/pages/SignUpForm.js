import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import '../styles/SignUpForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_phone: '',
    user_password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Check if the user already exists
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = storedUsers.find(user => user.user_email === formData.user_email);

    if (existingUser) {
      setError('Email already registered. Please use a different email.');
    } else {
      // Save user data to local storage
      const newUser = {
        ...formData,
        user_lastname: 'Doe',
        user_city: 'Hyderabad',
        user_zipcode: '500072',
      };
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      navigate('/login');
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="user_firstname"
          type="text"
          value={formData.user_firstname}
          placeholder="First Name"
          onChange={handleChange}
        />
        <FormInput
          name="user_email"
          type="email"
          value={formData.user_email}
          placeholder="Email"
          onChange={handleChange}
        />
        <FormInput
          name="user_phone"
          type="tel"
          value={formData.user_phone}
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <FormInput
          name="user_password"
          type="password"
          value={formData.user_password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <p>Already have an account?</p>
      <button onClick={() => navigate('/login')}>Log In</button>
    </div>
  );
};

export default SignUpForm;
