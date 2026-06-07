'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import Parallax from '../Parallax/Parallax';
import upperLeft from '../../assets/hero/upper-left-rec.svg';
import upperRight from '../../assets/hero/upper-right-rec.svg';
import lowerLeft from '../../assets/hero/lower-left-rec.svg';
import lowerRight from '../../assets/hero/lower-right-rec.svg';
import logo from '../../assets/logo.svg';
import styles from './ContactMe.module.css';

const revealVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ContactMe() {
  const scrollToSection = useSmoothScroll();
  const sectionRef = React.useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <footer className={styles.contact} id="contact-me" ref={sectionRef}>
      <div className={styles.footerPanel}>
        {/* Left Side */}
        <motion.div
          className={styles.footerMain}
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <img src={logo.src} alt="Logo" className={styles.logoMark} />
          <div>
            <p className={styles.footerName}>Rafael Mejia</p>
            <p className={styles.footerMeta}>
              Freelance Web Developer
              <br />
              Based in Chicago, IL
            </p>
          </div>
          <div className={styles.footerBottom}>
            <div>
              <p className={styles.footerCta}>Let's build something together.</p>
              <a className={styles.footerEmail} href="mailto:rafamej12@gmail.com">
                rafamej12@gmail.com
              </a>
            </div>
            <div className={styles.footerSocials}>
              <a href="https://github.com/rmeji3" target="_blank" rel="noopener noreferrer">
                <span className={styles.ico}>↗</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/rafaelmejia3/" target="_blank" rel="noopener noreferrer">
                <span className={styles.ico}>↗</span> LinkedIn
              </a>
              <a href="https://www.instagram.com/wa.fuh/" target="_blank" rel="noopener noreferrer">
                <span className={styles.ico}>↗</span> Instagram
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className={styles.footerSide}
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <nav className={styles.footerNav}>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
            <button onClick={() => scrollToSection('about-heading', 5.5)}>About</button>
            <button onClick={() => scrollToSection('ping-middle', 5.5)}>Ping</button>
            <button onClick={() => scrollToSection('projects-heading', 1.5)}>Work</button>
          </nav>

          <div className={styles.footerArt}>
            {/* upperRight */}
            <motion.div style={{ y: y1 }} className={styles.upperRight}>
              <motion.img 
                src={upperRight.src} 
                alt="3D Shape" 
                animate={{ y: [0, -12, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>
            
            {/* upperLeft */}
            <motion.div style={{ y: y2 }} className={styles.upperLeft}>
              <motion.img 
                src={upperLeft.src} 
                alt="3D Shape" 
                animate={{ y: [0, -18, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>

            {/* lowerRight */}
            <motion.div style={{ y: y3 }} className={styles.lowerRight}>
              <motion.img 
                src={lowerRight.src} 
                alt="3D Shape" 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>

            {/* lowerLeft */}
            <motion.div style={{ y: y4 }} className={styles.lowerLeft}>
              <motion.img 
                src={lowerLeft.src} 
                alt="3D Shape" 
                animate={{ y: [0, -20, 0] }} 
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>
          </div>
        </motion.div>

        <p className={styles.footerAttrib}>© {new Date().getFullYear()} All rights reserved Rafael Mejia.</p>
      </div>
    </footer>
  );
}
