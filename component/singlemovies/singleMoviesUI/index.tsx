"use client";
import React, { FC } from "react";
import styles from "./singleMoviesUi.module.css";
import Image from "next/image";
import { useMyContext } from "../../../app/context/theme";
import Card from "../card";
import Comment from "../comment/commentui";
import { SingleMoviesProps } from "../../type/type";
import { AiOutlineStar, AiOutlinePlayCircle } from "react-icons/ai";

const SingleMoviesUi: FC<SingleMoviesProps> = ({ data }) => {
  const { addShowCart } = useMyContext();

  return (
    <div>
      {
        <div className={styles.flexParent}>
          <figure className={styles.figureSinglePage}>
            <Image
              src={data.poster}
              alt={"singlemovie"}
              width={600}
              height={800}
              priority={true}
              className={styles.imgSinglePage}
            />
          </figure>

          <div className={styles.flexColSinglePage}>
            <p className={styles.titleSinglePage}>{data.title}</p>
            <div className={styles.parentStar}>
              {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <div key={index}>
                    {" "}
                    <AiOutlineStar />
                  </div>
                );
              })}
            </div>

            <p className={styles.captionSinglePage}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quisquam, laudantium suscipit sit ad rem praesentium
              eum doloremque assumenda nesciunt.
            </p>
            <p>
              <span>price : </span>
              <span className={styles.price}>130 $</span>
            </p>
            <p>
              <span>Production Year :</span> {data.year}
            </p>
            <p>
              <span>country : </span>
              {data.country}
            </p>

            <div className={styles.genres}>
              <span> genres :</span>
              {data.genres.map((item: string, index) => {
                return (
                  <div key={index}>
                    <p> {item}</p>
                  </div>
                );
              })}
            </div>

            <button className={styles.buy} onClick={() => addShowCart(data)}>
              add to list
            </button>

            <div>
              <Card />
            </div>

            <p className={styles.recommended}>Recommended For You</p>
            <div className={styles.moreImageSinglePage}>
              {data.images.map((img: string, index) => {
                return (
                  <div key={index}>
                    <figure className={styles.figureTrend}>
                      <Image
                        src={img}
                        alt={"moreImageSinglePage"}
                        className={styles.imgVideo}
                        width={1000}
                        height={800}
                        priority={true}
                      />
                      <div>
                        <span className={styles.iconTrend}>
                          <AiOutlinePlayCircle />
                        </span>
                        <button className={styles.btnTrend}>
                          add to my list
                        </button>
                      </div>
                    </figure>
                  </div>
                );
              })}
            </div>
            <Comment title={data.title} />
          </div>
        </div>
      }
    </div>
  );
};

export default SingleMoviesUi;
