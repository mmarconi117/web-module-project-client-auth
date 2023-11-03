import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logout from './Logout';



const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a GET request to fetch the list of friends
    axios
      .get('http://localhost:9000/api/friends', {
        headers: {
          // Add your authentication token here
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setFriends(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching friends:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Friends List</h2>
      <Logout />
      {loading ? (
        <p>Loading friends...</p>
      ) : (
        <div>
          <Link to="/friends/add">Add Friend</Link>
          <ul>
            {friends.map((friend) => (
              <li key={friend.id}>
                <p>Name: {friend.name}</p>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FriendsList;
