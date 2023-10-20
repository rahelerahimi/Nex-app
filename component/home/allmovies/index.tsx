import React from "react";
import styles from "./AllMovies.module.css";
import Image from "next/image";
import Link from "next/link";
import { allMoviesData } from "./data";
import { SwiperData } from "../../type/type";

const AllMovies = () => {
  return (
    <div className={styles.parentAllMovies}>
      <h1 className={styles.titleAllMovies}>All movies</h1>
      <div className={styles.parentImageMovies}>
        {allMoviesData.map((item: SwiperData) => {
          return (
            <figure className={styles.figure}>
              <Image
                className={styles.imageMovies}
                alt={item.alt}
                src={item.src}
                width={900}
                height={700}
                priority={true}
              />
              <Link href={"/allmovies"}>
                <div className={styles.moviesAbsolute}>
                  <button className={styles.btnShow}>see all movies</button>
                </div>
              </Link>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default AllMovies;
