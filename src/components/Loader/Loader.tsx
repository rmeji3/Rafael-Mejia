'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Loader.module.css';

// Options: "random", "diagonal", "top-down", "bottom-up", "center-out"
const PIXEL_PATTERN: "random" | "diagonal" | "top-down" | "bottom-up" | "center-out" = "random";

export default function Loader() {
  const [phase, setPhase] = useState<'covering' | 'covered' | 'uncovering' | 'hidden'>('covering');
  const [dimensions, setDimensions] = useState({ columns: 0, rows: 0 });
  const [shuffledIndices, setShuffledIndices] = useState<number[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      const size = 60; // 60px pixel size
      const columns = Math.ceil(window.innerWidth / size);
      const rows = Math.ceil(window.innerHeight / size);
      setDimensions({ columns, rows });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const { columns, rows } = dimensions;
    const totalBlocks = columns * rows;
    if (totalBlocks > 0) {
      let indices = Array.from({ length: totalBlocks }, (_, i) => i);
      
      switch (PIXEL_PATTERN) {
        case "random":
          for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
          }
          break;
        case "diagonal":
          indices.sort((a, b) => {
            const xA = a % columns;
            const yA = Math.floor(a / columns);
            const xB = b % columns;
            const yB = Math.floor(b / columns);
            return (xA + yA) - (xB + yB);
          });
          break;
        case "center-out":
          indices.sort((a, b) => {
            const cx = columns / 2;
            const cy = rows / 2;
            const xA = a % columns;
            const yA = Math.floor(a / columns);
            const xB = b % columns;
            const yB = Math.floor(b / columns);
            const distA = Math.max(Math.abs(xA - cx), Math.abs(yA - cy));
            const distB = Math.max(Math.abs(xB - cx), Math.abs(yB - cy));
            return distA - distB;
          });
          break;
        case "top-down":
          // already sequential
          break;
        case "bottom-up":
          indices.sort((a, b) => {
            const yA = Math.floor(a / columns);
            const yB = Math.floor(b / columns);
            return yB - yA; // higher y (bottom) appears first
          });
          break;
      }
      
      setShuffledIndices(indices);
      setIsReady(true);
    }
  }, [dimensions]);

  useEffect(() => {
    if (!isReady) return;

    let isMounted = true;
    
    // Switch to 'covered' phase when the initial covering animation finishes
    const coverTimeout = setTimeout(() => {
      if (!isMounted) return;
      setPhase((p) => p === 'covering' ? 'covered' : p);
    }, 1200);

    const start = Date.now();
    const MIN_TIME = 2500; // Giving a bit more time for the typewriter to be visible

    const hideLoader = () => {
      if (!isMounted) return;
      const elapsed = Date.now() - start;
      const wait = Math.max(0, MIN_TIME - elapsed);
      
      setTimeout(() => {
        if (!isMounted) return;
        setPhase('uncovering');
        
        // Wait for uncovering to finish
        setTimeout(() => {
          if (!isMounted) return;
          setPhase('hidden');
          document.body.classList.remove('pre-anim');
          document.body.classList.add('reveal-hero');
        }, 1200); // Wait 1.2s for transition
      }, wait);
    };

    const fallbackTimer = setTimeout(hideLoader, 5000);

    const checkLoading = async () => {
      try {
        if (typeof document !== 'undefined') {
          if (document.fonts) {
            await document.fonts.ready;
          }
          const images = Array.from(document.images);
          await Promise.all(
            images.map(
              (img) =>
                new Promise((resolve) => {
                  if (img.complete) resolve(null);
                  else {
                    img.onload = () => resolve(null);
                    img.onerror = () => resolve(null);
                  }
                })
            )
          );
        }
      } catch (e) {
        console.error('Loader check failed:', e);
      } finally {
        clearTimeout(fallbackTimer);
        hideLoader();
      }
    };

    setTimeout(checkLoading, 100);

    return () => {
      isMounted = false;
      clearTimeout(coverTimeout);
      clearTimeout(fallbackTimer);
    };
  }, [isReady]);

  if (phase === 'hidden') return null;

  const { columns, rows } = dimensions;
  const totalBlocks = columns * rows;
  const blocks = Array.from({ length: totalBlocks }, (_, i) => i);

  return (
    <div className={styles.loaderContainer}>
      <div 
        className={styles.whiteBg} 
        style={{ display: phase === 'uncovering' ? 'none' : 'block' }}
      />
      
      {(phase === 'covered' || phase === 'uncovering') && (
        <motion.div 
          className={styles.typewriterContainer}
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 'uncovering' ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {"Loading".split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, repeat: Infinity, repeatType: "reverse", duration: 0.4 }}
          >
            _
          </motion.span>
        </motion.div>
      )}

      {isReady && columns > 0 && (
        <div 
          className={styles.pixelGrid}
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`
          }}
        >
          {blocks.map((i) => {
            const orderIndex = shuffledIndices.indexOf(i);
            const delay = orderIndex >= 0 ? (orderIndex / totalBlocks) * 1.0 : 0; // 1s total stagger

            // Reversing the delay so pixels disappear in the same or opposite order
            // If phase is 'uncovering', it might be cool if the last pixel to appear is the first to disappear
            // So uncoveringDelay = (1.0 - delay) * 0.8
            const uncoveringDelay = (1.0 - (delay / 1.0)) * 0.8;

            return (
              <motion.div
                key={i}
                className={styles.pixel}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: phase === 'uncovering' ? 0 : 1
                }}
                transition={{ 
                  duration: 0, // Instant switch for that pixel look
                  delay: phase === 'uncovering' ? uncoveringDelay : delay,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
