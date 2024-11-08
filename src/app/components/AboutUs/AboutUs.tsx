"use client";
import React from 'react';
import styles from './AboutUs.module.css';

interface AboutUsProps {
  setPage: (page: string) => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ setPage }) => {
  return (
    <button onClick={() => setPage('about')} className={styles.navButton}>
      About Us
    </button>
  );
};

export default AboutUs;