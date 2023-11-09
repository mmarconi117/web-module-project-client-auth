import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriends from "./components/AddFriends";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <h2>Client Auth Project</h2>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Use PrivateRoute for protected routes */}
          <PrivateRoute path="/friends" element={<FriendsList />} />
          <PrivateRoute path="/friends/add" element={<AddFriends />} />
          <Route path="/logout" element={<Logout />} />
          {/* Redirect to login for unknown routes */}
          <Route path="/*" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
