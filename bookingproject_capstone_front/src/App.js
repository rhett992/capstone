import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
// import Booking from './components/Booking/Booking';
import Login from './components/Login/Login';
import ContactUs from './components/Contact/ContactUs';

const App = () => {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      {/* <Route path='/booking' element={<Booking />} /> */}
      <Route path='/login' element={<Login />} />
      <Route path='/contactus' element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
