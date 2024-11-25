"use client";
import React from 'react';
import styles from './Pricing.module.css';

interface PricingProps {
  setPage: (page: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ setPage }) => {
  return (
    <button onClick={() => setPage('pricing')} className={styles.navButton}>
      Pricing
    </button>
  );
};

export default Pricing;