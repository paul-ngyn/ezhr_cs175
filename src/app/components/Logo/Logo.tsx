"use client";
import React from 'react';
import styles from './Logo.module.css';

interface LogoProps {
  setPage: (page: string) => void;
}

const Logo: React.FC<LogoProps> = ({ setPage }) => {
  return (
    <button onClick={() => setPage('logo')} className={styles.navButton}>
     EZHR
    </button>
  );
};

export default Logo;