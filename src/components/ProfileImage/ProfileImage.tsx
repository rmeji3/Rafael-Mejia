import React from 'react';
import Image from 'next/image';
import img from '../../assets/headshot.jpg';
import styles from './ProfileImage.module.css';

export default function ProfileImage() {
  return (
    <div className={styles.container}>
      {/* Background circle */}
      <div className={styles.circle}></div>

      {/* Headshot */}
      <Image
        src={img}
        alt="Rafael Mejia Headshot"
        className={styles.image}
        priority
      />
    </div>
  );
}
