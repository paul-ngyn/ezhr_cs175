import React from 'react';
import Image from 'next/image';
import styles from './HomeBanner.module.css';
import bannerImage from '../../public/ezhr_banner.jpg';

const HomeBanner: React.FC = () => {
  return (
    <div className={styles.homebanner}>
      <Image src={bannerImage} alt="HomeBanner" layout="fill" objectFit="cover" quality={100} />
      <div className={styles.bannerText}>Onboard Smarter not Harder</div>
    </div>
  );
};

export default HomeBanner;