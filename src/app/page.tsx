import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import PingFeatured from '../components/PingFeatured/PingFeatured';
import Projects from '../components/Projects/Projects';
import ContactMe from '../components/ContactMe/ContactMe';
import ScrollProgress from '../components/ScrollProgress';

export default function Home() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Navbar header */}
      <Navbar />

      {/* Hero Full Width 3D Parallax Section */}
      <Hero />

      {/* Content that slides OVER the Hero */}
      <div 
        className="wrapper" 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          backgroundColor: 'var(--bg)', // or var(--bg-2) for contrast
          paddingTop: '4rem',
          boxShadow: '0 -20px 40px rgba(0,0,0,0.1)' 
        }}
      >
        {/* About */}
        <About />

        {/* Featured Project - Ping Showcase */}
        <PingFeatured />

        {/* Secondary Projects Grid */}
        <Projects />
      </div>

      {/* Contact Panel Footer */}
      <div style={{ position: 'relative', zIndex: 10, backgroundColor: 'var(--bg)' }}>
        <ContactMe />
      </div>
    </div>
  );
}
