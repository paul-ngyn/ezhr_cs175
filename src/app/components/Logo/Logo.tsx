"use client";
import React from 'react';
import styles from './Logo.module.css';
import logo from '../../public/ezhr_logo.png';
import Image from 'next/image';

interface LogoProps {
  setPage: (page: string) => void;
}

const Logo: React.FC<LogoProps> = ({ setPage }) => {
  return (
    <button onClick={() => setPage('logo')} className={styles.navButton}>
      <Image src={logo} alt="EZHR Logo" className={styles.logoImage} />
    </button>
  );
};

export default Logo;