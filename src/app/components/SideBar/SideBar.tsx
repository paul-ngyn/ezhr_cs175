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
            {popupContent === 'Add Employee' && (
              <>
                <h2 className={styles.boldText}>Please enter employee name</h2>
                <input type="text" placeholder="Enter Employee Name here" />
                <h3 className={styles.boldText}>Employee Type</h3>
                <select>
                  <option value="Engineer">Engineer</option>
                  <option value="HR">HR</option>
                  <option value="Sales">Sales</option>
                </select>
              </>
            )}
            {popupContent === 'Add Software' && (
              <>
                <h2 className={styles.boldText}>Choose software to add.</h2>
                <select>
                  <option value="software1">Software 1</option>
                  <option value="software2">Software 2</option>
                  <option value="software3">Software 3</option>
                </select>
                <h2 className={styles.boldText}>Upload Software or Video</h2>
                <input type="file" />
              </>
            )}
            {popupContent === 'Edit' && (
              <h2>Please choose employee or software to edit.</h2>
              // Add your edit form or content here
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;