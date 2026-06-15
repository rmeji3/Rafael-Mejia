'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import headshot from '../../assets/headshot.jpg';
import { useScrollIndicator } from '../../hooks/useScrollIndicator';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { useTypewriter } from '../../hooks/useTypewriter';
import Parallax from '../Parallax/Parallax';
import styles from './Header.module.css';

export default function Header() {
  const showIndicator = useScrollIndicator('contact-me');
  const scrollToSection = useSmoothScroll();
  const typedRole = useTypewriter([
    'web developer',
    'problem solver',
    'react developer',
    'UI engineer',
  ]);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-me');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="header" className={styles.heroWrap}>
      <header className={styles.hero}>
        {/* Left Side */}
        <div className={styles.heroLeft}>
          <div style={{ width: '100%' }}>
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Freelance Web Developer
            </motion.p>
            <h1 className={styles.heroTitle}>
              <span className={styles.line}>
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.05 }}
                >
                  I'm a freelance
                </motion.span>
              </span>
              <span className={styles.line}>
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 }}
                >
                  <span className={styles.role}>{typedRole}</span>
                  <span className={styles.cursor}></span>
                </motion.span>
              </span>
              <span className={styles.line}>
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: 0.25 }}
                >
                  based in Chicago.
                </motion.span>
              </span>
            </h1>
          </div>

          <motion.div
            className={styles.heroCtaRow}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <button className="btn-primary" id="cta-work" onClick={handleScrollToContact}>
              let's work
              <span className={styles.arrow} aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <button className="btn-ghost" onClick={() => scrollToSection('projects', 5.5)}>
              view work
            </button>
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div
          className={styles.heroRight}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className={styles.profileCluster}>
            <div className={styles.profile}>
              <div className={styles.ring}></div>
              <div className={styles.circle}></div>
              <Image
                src={headshot}
                alt="Rafael Mejia"
                className={styles.image}
                priority
                placeholder="blur"
              />
            </div>
            <div className={styles.profileSocials}>
              <a
                href="https://github.com/rmeji3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rafaelmejia3/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.143 2.4 3.854c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.07 5.07 0 0 0 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/wa.fuh/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04 1.013.124 1.618.302 2.067a3.5 3.5 0 0 0 .916 1.275 3.5 3.5 0 0 0 1.275.916c.449.178 1.054.262 2.067.302.83.04 1.102.049 3.297.049 2.2 0 2.473-.01 3.3-.048 1.013-.04 1.618-.124 2.067-.302a3.5 3.5 0 0 0 1.275-.916 3.5 3.5 0 0 0 .916-1.275c.178-.449.262-1.054.302-2.067.04-.83.049-1.102.049-3.297 0-2.2-.01-2.473-.048-3.3-.04-1.013-.124-1.618-.302-2.067a3.5 3.5 0 0 0-.916-1.275 3.5 3.5 0 0 0-1.275-.916c-.449-.178-1.054-.262-2.067-.302C12.442.01 12.17.001 8 0zm0 1.441c2.146 0 2.399.008 3.248.047.782.036 1.206.166 1.488.276a2.5 2.5 0 0 1 .927.604 2.5 2.5 0 0 1 .604.927c.11.282.24.706.276 1.488.039.849.047 1.102.047 3.248 0 2.146-.008 2.399-.047 3.248-.036.782-.166 1.207-.276 1.488a2.5 2.5 0 0 1-.604.927 2.5 2.5 0 0 1-.927.604c-.282.11-.706.24-1.488.276-.849.039-1.102.047-3.248.047-2.146 0-2.399-.008-3.248-.047-.782-.036-1.207-.166-1.488-.276a2.5 2.5 0 0 1-.927-.604 2.5 2.5 0 0 1-.604-.927c-.11-.282-.24-.706-.276-1.488C1.43 8.351 1.42 8.098 1.42 5.95c0-2.146.008-2.399.047-3.248.036-.782.166-1.207.276-1.488a2.5 2.5 0 0 1 .604-.927 2.5 2.5 0 0 1 .927-.604c.28-.11.704-.24 1.488-.276.85-.039 1.103-.047 3.248-.047zm0 2.449A4.11 4.11 0 1 0 8 12.11a4.11 4.11 0 0 0 0-8.22zm0 6.78a2.67 2.67 0 1 1 0-5.34 2.67 2.67 0 0 1 0 5.34zm4.11-6.117a1.002 1.002 0 1 0 0-2.005 1.002 1.002 0 0 0 0 2.005z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Hero Subnav */}
      <motion.div
        className={styles.subnav}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
      >
        <button onClick={() => scrollToSection('about-me', 5.5)}>
          <span className={styles.num}>01</span> about me
        </button>
        <button onClick={() => scrollToSection('ping', 5.5)}>
          <span className={styles.num}>✦</span> ping
        </button>
        <button onClick={() => scrollToSection('nib', 5.5)}>
          <span className={styles.num}>✦</span> nib
        </button>
        <button onClick={() => scrollToSection('projects', 5.5)}>
          <span className={styles.num}>02</span> projects
        </button>
        <button onClick={() => scrollToSection('contact-me', 5.5)}>
          <span className={styles.num}>03</span> contact me
        </button>
      </motion.div>

      {/* Floating Chevron */}
      <div className={`${styles.scrollIndicator} ${showIndicator ? '' : styles.hidden}`}>
        <button onClick={handleScrollToContact} aria-label="Scroll to contact">
          <svg width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
