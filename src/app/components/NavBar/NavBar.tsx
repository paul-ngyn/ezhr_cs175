"use client";
import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import styles from './NavBar.module.css';

interface NavBarProps {
  setPage: (page: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setPage }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <nav className={styles.navbar}>
        <Logo setPage={setPage} />
        <AboutUs setPage={setPage} />
        <ContactUs setPage={setPage} />
    </nav>
  );
};

export default NavBar;