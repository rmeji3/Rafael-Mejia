'use client';

import React from 'react';
import { motion } from 'framer-motion';
import lupes from '../../assets/lupes.png';
import marias from '../../assets/marias.png';
import sanchezInnovations from '../../assets/sanchez_innovations.png';
import ping from '../../assets/ping-app-cover.png';
import nib from '../../assets/nib-cover.png';
import styles from './Projects.module.css';
import ThreeDCarousel from '../lightswind/3d-carousel';

const cardRevealVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
      delay: customDelay,
    },
  }),
};

const GithubWidget = () => {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    fetch('https://api.github.com/users/rmeji3')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div style={{ backgroundColor: '#0d1117', aspectRatio: '16 / 9', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', overflow: 'hidden', borderBottom: '1px solid #30363d', color: '#c9d1d9', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif' }}>
      {data ? (
        <>
          <img src={data.avatar_url} alt="avatar" style={{ width: '20%', maxWidth: 80, aspectRatio: '1 / 1', borderRadius: '50%', marginBottom: '0.5rem', border: '2px solid #30363d' }} />
          <h3 style={{ margin: 0, color: '#c9d1d9', fontSize: '1.25rem', fontWeight: 600 }}>{data.name || 'Rafael Mejia'}</h3>
          <p style={{ margin: '0.25rem 0 1.25rem 0', color: '#8b949e', fontSize: '0.875rem' }}>@{data.login}</p>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontWeight: 600, color: '#c9d1d9', fontSize: '1.125rem' }}>{data.public_repos}</span>
              <span style={{ color: '#8b949e' }}>Repos</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontWeight: 600, color: '#c9d1d9', fontSize: '1.125rem' }}>{data.followers}</span>
              <span style={{ color: '#8b949e' }}>Followers</span>
            </div>
          </div>
        </>
      ) : (
        <div style={{ color: '#8b949e' }}>Loading GitHub Stats...</div>
      )}
    </div>
  );
};

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Ping',
      desc: 'Social Experiences App · iOS',
      href: 'https://ping-app.net',
      imgSrc: ping,
      delay: 0.12,
      tags: ['React Native', 'Redis', 'ASP.NET', 'AWS', 'PostgreSQL', 'OpenAI'],
    },
    {
      id: 2,
      title: 'Nib',
      desc: 'Grounded AI PDF Reader · Web',
      href: 'https://readnib.com',
      imgSrc: nib,
      delay: 0.12,
      tags: ['React', 'Redis', 'Springboot', 'PostgreSQL', 'Gemini', 'Mistral', 'RAG', 'Supabase', 'Stripe'],
    },
    {
      id: 3,
      title: "Lupe's Garage Doors",
      desc: 'Garage Door Installation Business',
      href: 'https://www.lupesgaragedoors.com',
      imgSrc: lupes,
      delay: 0,
    },
    {
      id: 4,
      title: "Maria's Tamales",
      desc: 'Mexican Restaurant',
      href: 'https://www.mariastamalesychampurrado.com/',
      imgSrc: marias,
      delay: 0.08,
    },
    {
      id: 5,
      title: 'Sanchez Innovations',
      desc: 'Lawncare Business',
      href: 'https://sanchez-innovations.com/',
      imgSrc: sanchezInnovations,
      delay: 0.04,
    },
  ];

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.head}>
        <div>
          <motion.p
            className={styles.workLabel}
            id="projects-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            Work
          </motion.p>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Projects
          </motion.h2>
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <ThreeDCarousel 
          items={[...projectsData, {
            id: 6,
            title: "More on GitHub",
            desc: "Source, experiments & more",
            href: "https://github.com/rmeji3",
            imgSrc: sanchezInnovations, // Just using a placeholder image for GitHub to avoid a blank card, or better yet, maybe make it look different
            delay: 0.16
          }].map(p => ({
            id: p.id,
            title: p.title,
            brand: "",
            description: p.desc || "",
            tags: p.id === 5 ? ["Open Source", "Experiments"] : (p.tags || ["React", "Next.js", "Tailwind"]),
            imageUrl: p.id === 5 ? undefined : (typeof p.imgSrc === 'string' ? p.imgSrc : p.imgSrc.src),
            link: p.href,
            bgColor: p.id === 5 ? '#0d1117' : undefined,
            textColor: p.id === 5 ? '#c9d1d9' : undefined,
            customHeader: p.id === 5 ? <GithubWidget /> : undefined
          }))}
          autoRotate={true}
          rotateInterval={3000}
        />
      </div>
    </section>
  );
}
