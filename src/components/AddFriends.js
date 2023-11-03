import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const AddFriends = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
  });
  const navigate = useNavigate(); // Use useNavigate to access navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to the API to add a new friend
    axios
      .post('http://localhost:9000/api/friends', formData, {
        headers: {
          // Add your authentication token here
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then(() => {
        // Redirect to the FriendsList route after successfully adding a friend
        navigate('/friends'); // Use navigate function instead of history
      })
      .catch((error) => {
        console.error('Error adding friend:', error);
        // Handle the error, show an error message, etc.
      });
  };


  return (
    <div>
      <h2>Add Friend</h2>
      <form onSubmit={handleSubmit}>
        {/* ... your form inputs ... */}
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriends;
