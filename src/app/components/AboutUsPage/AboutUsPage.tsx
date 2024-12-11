import React from 'react';
import styles from './AboutUsPage.module.css';
import Image from 'next/image';
import Paul from '../../public/DSC04670.jpg';
import Raskal from '../../public/EE958DF9-51C6-4754-8F26-4DFCAFA74ACA.jpg';
import Stef from '../../public/add_glasses.jpeg';
import Gilbert from '../../public/upload_img_25489818_12_03_2024_20_22_23_728439_4817177810641741345.png'; // Add the path to the new image
import Brian from '../../public/image0.jpg'; // Add the path to the new image

const AboutUsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.employees}>
        <div className={styles.employee}>
          <div className={styles.imageContainer}>
            <Image src={Paul} alt="Employee 1" layout="fill" objectFit="cover" quality={100} />
          </div>
          <p className={styles.text}>Paul Nguyen - CTO</p>
        </div>
        <div className={styles.employee}>
          <div className={styles.imageContainer}>
            <Image src={Stef} alt="Employee 2" layout="fill" objectFit="cover" quality={100} />
          </div>
          <p className={styles.text}>Stefan Vo - CEO</p>
        </div>
        <div className={styles.employee}>
          <div className={styles.imageContainer}>
            <Image src={Raskal} alt="Employee 3" layout="fill" objectFit="cover" quality={100} />
          </div>
          <p className={styles.text}>Russell Kondoker - CMO</p>
        </div>
        <div className={styles.employee}>
          <div className={styles.imageContainer}>
            <Image src={Gilbert} alt="Employee 4" layout="fill" objectFit="cover" quality={100} />
          </div>
          <p className={styles.text}>Gilbert Herrera - CFO</p>
        </div>
        <div className={styles.employee}>
          <div className={styles.imageContainer}>
            <Image src={Brian} alt="Employee 5" layout="fill" objectFit="cover" quality={100} />
          </div>
          <p className={styles.text}>Brian Trujillo - COO</p>
        </div>
      </div>
      <div className={styles.footerText}>
        <p>Our team of top-tier college students instructed by none other than Professor Faloutsos are dedicated to helping your team get to work as fast as possible without the stress of onboarding. Be sure to connect with us on LinkedIn to hear more from us!</p>
      </div>
    </div>
  );
};

export default AboutUsPage;