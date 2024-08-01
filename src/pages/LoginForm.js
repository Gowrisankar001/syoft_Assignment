import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({ user_email: '', user_password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Retrieve stored users from local storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(
      (user) => user.user_email === formData.user_email && user.user_password === formData.user_password
    );

    if (user) {
      // Save the logged-in user to local storage and navigate to the dashboard
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='container'>
      <div className='image-container col-md-6'>
          <h1>Welcome to <br /> our community</h1>
          <p className='paragraph'>
            Fuse helps developers to build and well coded
            dashboards full of beautiful and rich modules. Join
            us and start duilding your application today.
          </p>
      </div>
      <div className="login-form col-md-6">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="user_email"
          type="email"
          value={formData.user_email}
          placeholder="Email"
          onChange={handleChange}
        />
        <FormInput
          name="user_password"
          type="password"
          value={formData.user_password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit" className='login-btn'>Log In</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <p className='para'>Don't have an account?</p>
      <button className='signup-btn' onClick={() => navigate('/signup')}>Sign Up</button>
    </div>
    </div>
    
  );
};

export default LoginForm;
