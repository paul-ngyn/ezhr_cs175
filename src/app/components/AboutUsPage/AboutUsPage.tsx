import React from 'react';
import styles from './AboutUsPage.module.css';

const AboutUsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>About Us</h1>
      <div className={styles.employees}>
        <div className={styles.employee}>
          <img src="/path/to/employee1.jpg" alt="Employee 1" className={styles.image} />
          <p className={styles.text}>Employee 1 - Position</p>
        </div>
        <div className={styles.employee}>
          <img src="/path/to/employee2.jpg" alt="Employee 2" className={styles.image} />
          <p className={styles.text}>Employee 2 - Position</p>
        </div>
        <div className={styles.employee}>
          <img src="/path/to/employee3.jpg" alt="Employee 3" className={styles.image} />
          <p className={styles.text}>Employee 3 - Position</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;