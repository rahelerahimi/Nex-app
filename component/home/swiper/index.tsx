"use client";

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Swip.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { MovieData, DataProps } from "../../type/type";
import { Navigation } from "swiper/modules";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";

const Swip: FC<DataProps> = ({ data }) => {
  return (
    <div className={styles.parentSwiper}>
      <p className={styles.title}>TV Series</p>
      <Swiper
        className="mySwiper"
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        // navigation={true}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
        breakpoints={{
          250: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          990: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
        modules={[Navigation]}
      >
        {data.map((item: MovieData) => {
          return (
            <SwiperSlide key={item.id}>
              <Link href={`/movies/${item.id}`}>
                <div key={item.id} className={styles.parentMap}>
                  <Image
                    width={200}
                    height={300}
                    priority={true}
                    alt={item.title}
                    src={item.poster}
                    className={styles.imgSlider}
                  />
                  <div className={styles.absoluteMap}>
                    <p className={styles.countryMap}>
                      country : {item.country}
                    </p>
                    <button className={styles.btnMap}>add to list</button>
                  </div>
                  <p className={styles.textSlider}>{item.title}</p>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}

        <div className={`${styles.navigation} swiper-navigation`}>
          <div className={`${styles.stylenavigation} next-button `}>
            <MdOutlineArrowBackIosNew />
          </div>
          <div className={`${styles.stylenavigation} prev-button  `}>
            <MdOutlineArrowForwardIos />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Swip;
