'use client';

import React, { useState, useEffect } from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const MIN_TIME = 650; // Ensure it is visible briefly to prevent jumpiness

    const hideLoader = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, MIN_TIME - elapsed);
      setTimeout(() => {
        setIsDone(true);
        // Remove loading state and trigger hero reveal transitions
        document.body.classList.remove('pre-anim');
        document.body.classList.add('reveal-hero');
      }, wait);
    };

    // Safe fallback timer
    const fallbackTimer = setTimeout(hideLoader, 3000);

    const checkLoading = async () => {
      try {
        if (typeof document !== 'undefined') {
          if (document.fonts) {
            await document.fonts.ready;
          }
        }
      } catch (e) {
        console.error('Loader fonts check failed:', e);
      } finally {
        clearTimeout(fallbackTimer);
        hideLoader();
      }
    };

    checkLoading();

    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <div className={`${styles.loader} ${isDone ? styles.done : ''}`}>
      <div className={styles.mark}>Portfolio</div>
      <div className={styles.name}>
        Rafael Mejia<span className={styles.dot}>.</span>
      </div>
      <div className={styles.bar}>
        <span></span>
      </div>
    </div>
  );
}
