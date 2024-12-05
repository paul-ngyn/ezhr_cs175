"use client";

import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const [popupContent, setPopupContent] = useState<string | null>(null);

  const handleButtonClick = (content: string) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <div className={styles.sidebar}>
      <button onClick={() => handleButtonClick('Add Employee')} className={styles.sidebarButton}>
        Add Employee
      </button>
      <button onClick={() => handleButtonClick('Add Software')} className={styles.sidebarButton}>
        Add Software
      </button>
      <button onClick={() => handleButtonClick('Edit')} className={styles.sidebarButton}>
        Edit
      </button>

      {popupContent && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.closeButton} onClick={closePopup}>&times;</span>
            <h2>{popupContent}</h2>
            {/* Add your form or content here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;