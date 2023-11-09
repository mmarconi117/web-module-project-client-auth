import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    // Redirect the user to the login page or any other appropriate page.
    window.location.href = '/login';
    // Make a POST request to the logout endpoint
    axios
      .post('http://localhost:9000/api/logout', {}, {
        headers: {
          // Add your authentication token here
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(() => {
        // Remove the token from local storage
        localStorage.removeItem('token');

        // Redirect to the login page after successful logout
        navigate('/login');
      })
      .catch((error) => {
        console.error('Logout error:', error);
        // Handle the error, show an error message, etc.
      });
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
