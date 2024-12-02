"use client";
import React from 'react';
import styles from './FindOutMore.module.css';

interface FindOutMoreProps {
  setPage: (page: string) => void;
}

const FindOutMore: React.FC<FindOutMoreProps> = ({ setPage }) => {
  return (
    <button onClick={() => setPage('about')} className={styles.navButton}>
      Find Out More
    </button>
  );
};

export default FindOutMore;