"use client";
import React from 'react';
import styles from './Login.module.css';

interface LoginProps {
  setPage: (page: string) => void;
}

const Login: React.FC<LoginProps> = ({ setPage }) => {
  return (
    <button onClick={() => setPage('login')} className={styles.navButton}>
      Login
    </button>
  );
};

export default Login;