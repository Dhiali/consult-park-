import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Page Components
import Home from './pages/HomePage.jsx';
import AboutUs from './pages/AboutPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import BPO from './pages/BusinessProcessOutsourcingPage.jsx';
import Contact from './pages/ContactPage.jsx';

import Navbar from './components/NavBar.jsx';
// import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/bpo" element={<BPO />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
};

export default App;
