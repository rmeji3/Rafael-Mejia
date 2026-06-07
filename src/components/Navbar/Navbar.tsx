'use client';

import React, { useState, useEffect } from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import logo from '../../assets/logo.svg';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const scrollToSection = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar when we scroll past the 100vh hero section (minus a small buffer)
      setScrolled(window.scrollY > window.innerHeight - 60);

      // Check if we are over a dark section to explicitly change navbar colors
      let overDark = false;
      const ping = document.getElementById('ping');
      if (ping) {
        const rect = ping.getBoundingClientRect();
        // Check if the vertical center of the navbar (approx 32px from top) is inside the section
        if (rect.top <= 32 && rect.bottom >= 32) {
          overDark = true;
        }
      }
      
      if (!overDark) {
        const footer = document.querySelector('[class*="footerPanel"]');
        if (footer) {
          const rect = footer.getBoundingClientRect();
          if (rect.top <= 32 && rect.bottom >= 32) {
            overDark = true;
          }
        }
      }
      
      setIsDarkBg(overDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${isDarkBg ? styles.dark : ''}`}>
      <button onClick={handleScrollToTop} className={styles.brand} aria-label="Scroll to top">
        <img src={logo.src} alt="Logo" className={styles.logo} />
        Rafael Mejia
      </button>

      <div className={styles.links}>
        <button onClick={() => scrollToSection('about-heading', 8.5)}>about</button>
        <button onClick={() => scrollToSection('ping-middle', 8.5)}>ping</button>
        <button onClick={() => scrollToSection('projects-heading', 8.5)}>work</button>
        <button onClick={() => scrollToSection('contact-me', 8.5)}>contact</button>
      </div>
    </nav>
  );
}
