'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import pingAppImg from '../../assets/ping.png';
import cubeSvg from '../../assets/cube.svg';
import pingIcon from '../../assets/ping-icon.svg';
import Parallax from '../Parallax/Parallax';
import styles from './PingFeatured.module.css';

const ReactIcon = () => (
  <svg role="img" viewBox="0 0 24 24" width="15" height="15" fill="#61DAFB" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
);

const DotNetIcon = () => (
  <svg role="img" viewBox="0 0 24 24" width="16" height="16" fill="#512bd4" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}><path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z"/></svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 384 512" width="15" height="15" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
);

const MapPinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{display:'block'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);

const revealVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function PingFeatured() {
  const sectionRef = React.useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Custom vertical transforms that perfectly align to 0 at 0.5 progress (center of screen)
  const yCube = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const yTag1 = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);
  const yTag2 = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
  const yTag3 = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);
  const yTag4 = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  return (
    <section className={styles.ping} id="ping" ref={sectionRef}>
      <p className={styles.pingTag}>✦ / Featured Project</p>

      <div className={styles.inner} id="ping-middle">
        {/* Left Column */}
        <Parallax speed={0.04} className={styles.col}>
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <p className={styles.miniTitle}>Ping: iOS App</p>
            <h2 className={styles.title}>
              Stop gatekeeping the <span className={styles.hl}>experiences</span> worth having.
            </h2>
            <p className={styles.body}>
              Ping is a social app for discovering, rating, and sharing real-world experiences the
              spots, events, and moments people actually loved, surfaced by the people who went.
            </p>

            <a
              className={styles.link}
              href="https://ping-app.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Ping{' '}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 12L12 4M6 4h6v6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </Parallax>

        {/* Phone Mockup Column */}
        <Parallax speed={0.1} className={styles.phoneWrap}>
          <div className={styles.phoneGlow}></div>
          <motion.div
            className={styles.phone}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9 }}
          >
            <Image
              src={pingAppImg}
              alt="Ping App Screenshot"
              placeholder="blur"
              priority
            />
          </motion.div>
        </Parallax>

        {/* Right Column */}
        <Parallax speed={0.06} className={`${styles.col} ${styles.right}`}>
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div className={styles.cubeGroupWrapper} style={{ y: yCube }}>
              <div className={styles.mainCubeWrap}>
                <Image
                  src={cubeSvg}
                  alt="Isometric Cube"
                  className={styles.mainCube}
                  priority
                />
                <motion.div
                  className={styles.floatingIcon}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Image src={pingIcon} alt="Ping Icon" />
                </motion.div>
              </div>
            </motion.div>

            <h3 className={styles.featureTitle}>The Explore feed</h3>
            <p className={styles.featureBody}>
              Find hidden gems, verified venues, and custom spots shared by your friends. Explore the city like never before.
            </p>
            <a
              className={styles.featureLink}
              href="https://ping-app.net/#how-it-works"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more{' '}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 12L12 4M6 4h6v6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <div className={styles.tagsContainer}>
              <motion.div className={styles.chipWrapper} style={{ y: yTag1 }}>
                <div className={styles.chipInner}>
                  <span className={styles.k}><ReactIcon /></span> React Native
                </div>
              </motion.div>
              <motion.div className={styles.chipWrapper} style={{ y: yTag2 }}>
                <div className={styles.chipInner}>
                  <span className={styles.k}><DotNetIcon /></span> ASP.NET Core
                </div>
              </motion.div>
              <motion.div className={styles.chipWrapper} style={{ y: yTag3 }}>
                <div className={styles.chipInner}>
                  <span className={styles.k}><AppleIcon /></span> iOS
                </div>
              </motion.div>
              <motion.div className={styles.chipWrapper} style={{ y: yTag4 }}>
                <div className={styles.chipInner}>
                  <span className={styles.k}><MapPinIcon /></span> Location Based
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Parallax>
      </div>
    </section>
  );
}
