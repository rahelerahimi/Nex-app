'use client'
import React from 'react';
import styles from './Section5.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section5 = () => {

  const [ref, inView] = useInView({
    triggerOnce:false, 
  });

  const variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };


  return (
    <div className={styles.parentDragon}>
      
      <div className={styles.backDragon}>
      <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 1 }}
    >
        <Image src={'/img/dragon.webp'} alt="dragon" className={styles.imgDragon} width={200}  height={200} priority={true} />
        </motion.div>

        <div className={styles.parentHouse}>
          <p className={styles.house}>house</p>
          <p className={styles.dragon}> dragon</p>
          <p className={styles.new}>new series</p>
        </div>

        <div className={styles.parentOct}>
          <p className={styles.stream}>streaming on </p>
          <p className={styles.stream}>OCT 15</p>
        </div>

        <div>
         <Link href={'/'}> <button className={styles.btnWatch}>watch trailer</button></Link>
        </div>
      </div>
    </div>
  )
}
export default Section5;
