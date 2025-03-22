import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import SignUp from './pages/SignUp';
import { UserProvider, UserContext } from './context/UserContext';
import './App.css'; // Import external styles

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="app-container">
          <Nav />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profiles" element={<UserProfile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
};

const Nav = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link className="nav-link" to="/">Dashboard</Link></li>
        {user ? (
          <>
            <li><Link className="nav-link" to="/profiles">Profiles</Link></li>
            <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><Link className="nav-link" to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default App;
