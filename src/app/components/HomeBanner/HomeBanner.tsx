import React from 'react';
import Image from 'next/image';
import styles from './HomeBanner.module.css'; // Assuming you have specific styles for the logo
import bannerImage from '../../public/ezhr_banner.jpg';

const HomeBanner: React.FC = () => {
  return (
    <div className={styles.homebanner}>
          <Image src={bannerImage} alt="HomeBanner" layout="fill" objectFit="cover" quality={100} />
    </div>
  );
};

export default HomeBanner;