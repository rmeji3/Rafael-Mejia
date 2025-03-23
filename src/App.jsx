import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import './App.css';

import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: false,
      offset: 400, 
    });
    
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
