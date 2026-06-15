'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import nibImg from '../../assets/nib-example.png';
import cubeSvg from '../../assets/cube.svg';
import placeholderIcon from '../../assets/nib.svg';
import Parallax from '../Parallax/Parallax';
import styles from './NibFeatured.module.css';

const ReactIcon = () => (
  <svg role="img" viewBox="0 0 24 24" width="15" height="15" fill="#61DAFB" xmlns="http://www.w3.org/2000/svg" style={{display:'block'}}><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
);

const DatabaseIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{display:'block'}}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);

const ServerIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{display:'block'}}><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
);

const SparklesIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{display:'block'}}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>
);

const NIB_TAGS = [
  { icon: <ReactIcon />, text: 'React' },
  { icon: <ServerIcon />, text: 'Springboot' },
  { icon: <DatabaseIcon />, text: 'PostgreSQL' },
  { icon: <SparklesIcon />, text: 'RAG & AI' },
];

const revealVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function NibFeatured() {
  const sectionRef = React.useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yCube = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const yTag1 = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40]);
  const yTag2 = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
  const yTag3 = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);
  const yTag4 = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);

  return (
    <section className={styles.nib} id="nib" ref={sectionRef}>
      <p className={styles.nibTag}>✦ / Featured Project</p>

      <div className={styles.inner}>
        {/* Left Column */}
        <Parallax speed={0.04} className={styles.col}>
          <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <p className={styles.miniTitle} id="nib-middle">Nib: Web App</p>
            <h2 className={styles.title}>
              Read smarter with <span className={styles.hl}>Grounded AI</span> assistance.
            </h2>
            <p className={styles.body}>
              Nib is a powerful PDF reader that uses Retrieval-Augmented Generation to help you understand complex documents, finding accurate citations instantly.
            </p>

            <a
              className={styles.link}
              href="https://readnib.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Nib{' '}
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

        {/* Desktop Mockup Column */}
        <Parallax speed={0.1} className={styles.desktopWrap}>
          <div className={styles.desktopGlow}></div>
          <motion.div
            className={styles.desktopApp}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9 }}
          >
            <Image
              src={nibImg}
              alt="Nib App Screenshot"
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
                  animate={{ 
                    scale: [1, 1, 1.4, 0.85, 1.05, 1] 
                  }}
                  transition={{ 
                    duration: 5, 
                    times: [0, 0.65, 0.75, 0.82, 0.88, 1], 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className={styles.iconSquare}>
                    <motion.div
                      style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      animate={{ 
                        rotate: [0, 0, 380, 355, 360, 360]
                      }}
                      transition={{ 
                        duration: 5, 
                        times: [0, 0.65, 0.75, 0.82, 0.88, 1], 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <Image src={placeholderIcon} alt="Nib Icon" className={styles.blackLogo} />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <h3 className={styles.featureTitle}>Chat with your PDFs</h3>
            <p className={styles.featureBody}>
              Upload your documents and let our AI summarize, answer questions, and highlight exactly where the information comes from.
            </p>
            <a
              className={styles.featureLink}
              href="https://readnib.com"
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
                  <span className={styles.k}><ReactIcon /></span> React
                </div>
              </motion.div>
              <motion.div className={styles.chipWrapper} style={{ y: yTag2 }}>
                <div className={styles.chipInner}>
                  <span className={styles.k}><ServerIcon /></span> Springboot
                </div>
              </motion.div>
              <motion.div className={styles.chipWrapper} style={{ y: yTag3 }}>
                <div className={styles.chipInner}>
                  <span className={styles.k}><DatabaseIcon /></span> PostgreSQL
                </div>
              </motion.div>
              <motion.div className={styles.chipWrapper} style={{ y: yTag4 }}>
                <div className={styles.chipInner}>
                  <span className={styles.k}><SparklesIcon /></span> RAG & AI
                </div>
              </motion.div>
            </div>
          </motion.div>
        </Parallax>

        {/* Mobile/Tablet Tags Marquee */}
        <motion.div
          className={styles.mobileTags}
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className={styles.marqueeRow}>
            <motion.div
              className={styles.marqueeTrack}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            >
              {[...NIB_TAGS, ...NIB_TAGS, ...NIB_TAGS, ...NIB_TAGS, ...NIB_TAGS, ...NIB_TAGS, ...NIB_TAGS, ...NIB_TAGS].map((tag, i) => (
                <div key={`nt1-${i}`} className={styles.chipWrapper}>
                  <div className={styles.chipInner}>
                    <span className={styles.k}>{tag.icon}</span> {tag.text}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className={styles.marqueeRow}>
            <motion.div
              className={styles.marqueeTrack}
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 65, ease: "linear" }}
            >
              {[...NIB_TAGS, ...NIB_TAGS, ...NIB_TAGS, ...NIB_TAGS, ...NIB_TAGS, ...NIB_TAGS, ...NIB_TAGS, ...NIB_TAGS].map((tag, i) => (
                <div key={`nt2-${i}`} className={styles.chipWrapper}>
                  <div className={styles.chipInner}>
                    <span className={styles.k}>{tag.icon}</span> {tag.text}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
