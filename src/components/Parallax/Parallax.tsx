'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ParallaxProps {
  children?: React.ReactNode;
  speed?: number; // positive moves upwards, negative moves downwards
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Reusable parallax scroll effect container.
 * Calculates translation offset relative to the component entering/leaving the viewport.
 */
export default function Parallax({ children, speed = 0.05, className, style }: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll position of the element inside the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Translate scrollYProgress (0 to 1) into pixels of displacement based on speed factor
  // Center of viewport (0.5 progress) translates to 0 displacement
  const y = useTransform(scrollYProgress, [0, 1], [speed * 300, speed * -300]);

  return (
    <div ref={containerRef} style={{ display: 'contents' }}>
      <motion.div
        style={shouldReduceMotion ? { ...style } : { ...style, y }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
