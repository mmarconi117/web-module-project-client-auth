import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';
import { axiosWithAuth } from './util/axiosWithAuth';

function App() {
  return (
    <div className="App">
      <Router> {/* This is your top-level Router */}
        <h2>Client Auth Project</h2>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/friends/add" element={<AddFriends />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
