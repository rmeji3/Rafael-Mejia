import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Navbar from '../components/Navbar';
function Home() {
  return (
    <div>
        <Navbar />
        <div className='body-wrapper'>
            <Header />
            <About />   
            <Projects /> 
        </div>
        <ContactMe />
        
    </div>
  );
}

export default Home;
