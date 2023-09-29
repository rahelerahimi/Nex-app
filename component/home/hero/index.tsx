'use client'

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Hero.module.css';
import { swiperData } from './data';
import { SwiperData } from '../../type/type';

 const Hero=()=> {



  return (
    <div className={styles.parentHerox} >
      <div className={styles.boxHero} >
        <div className={styles.parentHeroText}>
          <span id='bg-gradient-to-l' className={styles.buy}>Watch</span>
          <span id='bg-gradient-to-2' className={styles.sell}>Video</span>
          <span className={styles.textAnd}>and</span>
          <span className={styles.watchResponce}>Watch video </span>
          <h1 className={styles.textCenter}>
          Enjoy Forever</h1>
          <p className={styles.caption}>Enjoy exclusive Amazon Originals as well as popular movies and TV shows for USD 120z/month. Watch now, cancel anytime.</p>
          <div>
            <button className={styles.buttonLeft}>Play now</button>
            <button className={styles.buttonRight} >Watch later</button>
          </div>
        </div>

        <div className={styles.parentSwiper}>

          <Swiper navigation={true} modules={[Navigation]} className=" mySwiper">
            {
              swiperData.map((item:SwiperData) => {
                return <SwiperSlide key={item.id}  >
                  <figure className={styles.figureSwip}>
                  <Image alt={item.alt} src={item.src}  width={800} height={600} priority={true}/>
          
                  </figure>
                  </SwiperSlide>
              })
            }

          </Swiper>
        </div>


      </div>


    </div>
  )
}
export default Hero;