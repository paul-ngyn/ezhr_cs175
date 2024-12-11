// components/NavBar/NavBar.tsx
"use client";
import React from 'react';
import Logo from '../Logo/Logo';
import AboutUs from '../AboutUs/AboutUs';
import Login from '../Login/Login';
import Manager from '../Manager/Manager';
import Pricing from '../Pricing/Pricing';
import styles from './NavBar.module.css';

interface NavBarProps {
  setPage: (page: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setPage }) => {
  const handlePageChange = (page: string) => {
    setPage(page);
  };

  return (
    <nav className={styles.navbar}>
      <Logo setPage={handlePageChange} />
      <AboutUs setPage={handlePageChange} />
      <Login setPage={handlePageChange} />
      <Manager setPage={handlePageChange} />
      <Pricing setPage={handlePageChange} />
    </nav>
  );
};

export default NavBar;