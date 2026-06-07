"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import styles from './Hero.module.css';

// Import SVGs
import upperLeft from '../../assets/hero/upper-left-rec.svg';
import upperRight from '../../assets/hero/upper-right-rec.svg';
import lowerLeft from '../../assets/hero/lower-left-rec.svg';
import lowerRight from '../../assets/hero/lower-right-rec.svg';
import leftHand from '../../assets/hero/left-hand.svg';
import rightHand from '../../assets/hero/right-hand.svg';
import bottomShadow from '../../assets/hero/bottom-shadow.svg';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollToSection = useSmoothScroll();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for blocks. Negative values mean they move UP relative to the container.
  // All boxes move up, but the bottom-left box moves up the SLOWEST.
  const yUpperRight = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const yUpperLeft = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const yLowerRight = useTransform(scrollYProgress, [0, 1], [0, -300]);
  
  // The bottom-left box moves up the slowest
  const yLowerLeft = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  // Parallax for hands
  const yLeftHand = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const yRightHand = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Shadow moves DOWN much faster on scroll
  const yShadow = useTransform(scrollYProgress, [0, 1], [0, 400]);
  
  // Typing effect for the role block
  const roles = ["SOFTWARE ENGINEER", "DESIGNER", "WEB DEVELOPER", "CLOUD ENGINEER"];
  const typingRole = useTypewriter(roles, 80, 40, 2000, 400);

  return (
    <div className={styles.heroWrapper} ref={containerRef}>
      
      {/* Hands with distinct parallax speeds */}
      <motion.img 
        src={leftHand.src} 
        alt="Left Hand" 
        className={`${styles.hand} ${styles.leftHand}`} 
        style={{ y: yLeftHand }}
      />
      <motion.img 
        src={rightHand.src} 
        alt="Right Hand" 
        className={`${styles.hand} ${styles.rightHand}`} 
        style={{ y: yRightHand }}
      />

      <div className={styles.heroContainer}>
        <div className={styles.cluster}>
          {/* Back small block */}
          <motion.div className={`${styles.blockWrapper} ${styles.posUpperRight}`} style={{ y: yUpperRight, zIndex: 1 }}>
            <img src={upperRight.src} alt="Upper Right Block" className={styles.svgBlock} />
            <button 
              className={`${styles.clampedText} ${styles.iconRightFace} ${styles.iconUpperRight} ${styles.bounce}`} 
              onClick={() => scrollToSection('about-heading', 5.5, 2000)}
              aria-label="Scroll down"
            >
              <svg className={styles.responsiveIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </button>
          </motion.div>

          {/* Middle tall block */}
          <motion.div className={`${styles.blockWrapper} ${styles.posUpperLeft}`} style={{ y: yUpperLeft, zIndex: 4 }}>
            <img src={upperLeft.src} alt="Upper Left Block" className={styles.svgBlock} />
            <div className={`${styles.clampedText} ${styles.textUpperLeftFace} ${styles.textUpperLeft}`}>
              RAFAEL
            </div>
          </motion.div>

          {/* Left front block */}
          <motion.div className={`${styles.blockWrapper} ${styles.posLowerLeft}`} style={{ y: yLowerLeft, zIndex: 3 }}>
            <img src={lowerLeft.src} alt="Lower Left Block" className={styles.svgBlock} />
            <div className={`${styles.clampedText} ${styles.textLowerLeftFace} ${styles.textLowerLeft}`}>
              <span>
                {typingRole}
                <span className={styles.cursor}>|</span>
              </span>
            </div>
          </motion.div>

          {/* Right front block */}
          <motion.div className={`${styles.blockWrapper} ${styles.posLowerRight}`} style={{ y: yLowerRight, zIndex: 5 }}>
            <img src={lowerRight.src} alt="Lower Right Block" className={styles.svgBlock} />
            <div className={`${styles.clampedText} ${styles.textRightFace} ${styles.textLowerRight}`}>
              MEJIA
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Anchor the shadow exactly to the bottom of the hero section */}
      <motion.img 
        src={bottomShadow.src} 
        alt="Bottom Shadow" 
        className={styles.shadow} 
        style={{ x: "-50%", y: yShadow }}
      />
    </div>
  );
}
