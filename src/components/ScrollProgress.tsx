'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Scroll progress indicator bar displayed fixed at the top of the viewport.
 * Uses Framer Motion's spring calculations for smooth scrolling feedback.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Create a spring animation on top of scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: '#ffffff',
        transformOrigin: '0%',
        zIndex: 1200,
        mixBlendMode: 'difference',
        boxShadow: '0 0 12px rgba(255, 255, 255, 0.4)',
      }}
    />
  );
}
