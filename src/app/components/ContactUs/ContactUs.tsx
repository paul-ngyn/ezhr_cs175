"use client";
import React from 'react';
import styles from './ContactUs.module.css';

interface ContactUsProps {
  setPage: (page: string) => void;
}

const ContactUs: React.FC<ContactUsProps> = ({ setPage }) => {
  return (
    <button onClick={() => setPage('contact')} className={styles.navButton}>
      Contact Us
    </button>
  );
};

export default ContactUs;