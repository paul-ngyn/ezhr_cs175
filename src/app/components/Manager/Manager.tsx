"use client";
import React from 'react';
import styles from './Manager.module.css';

interface ManagerProps {
  setPage: (page: string) => void;
}

const Manager: React.FC<ManagerProps> = ({ setPage }) => {
  return (
    <button onClick={() => setPage('manager')} className={styles.navButton}>
      Manager
    </button>
  );
};

export default Manager;