import React from 'react';
import {Navigate, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import ContactUs from './components/Contact/ContactUs';
import Home from './components/Home/Home';
import About from './components/About/About';
import Booking from './components/Booking/Booking';


  const App = () => {
    const isAuthenticated = localStorage.getItem('login_token');
  return (
    <Router>
      <Header />
      <Routes>
          <Route path="/auth/login" element={<Login />} />

            {/* User Routes */}
            <Route
              path="/"
              element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/auth/login" />}
            />
            {/* <Route path="/home/*" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/booking" element={<Booking />} /> */}
        </Routes>
    </Router>
  );
};

export default App;
