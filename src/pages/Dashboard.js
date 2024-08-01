import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className='bg-container'>
      <div className="dashboard">
        <h1>Welcome, {user.user_firstname}!</h1>
        <p>Email: {user.user_email}</p>
        <p>Username: {user.user_firstname}</p>
        <button className='logout-btn' onClick={handleLogout}>Log Out</button>
      </div>
    </div>
    
  );
};

export default Dashboard;

