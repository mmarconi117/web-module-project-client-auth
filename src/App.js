import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <h2>Friends Database</h2>
        <Link className="link" to="/login">Login</Link><br />
        <Link className="link" to="/friends">Friends List</Link><br />
        <Link className="link" to="/friends/add">Add Friends</Link><br />
        <Link className="link" to="/logout">Logout</Link>
      </header>
        <h2>Client Auth Project</h2>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/friends" element={<PrivateRoute><FriendsList /></PrivateRoute>} />
          <Route path="/friends/add" element={<PrivateRoute><AddFriends /></PrivateRoute>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
