"use client";

import React from "react";
import styles from "./Section3.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { useInView } from "framer-motion"

const Section3 = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const variants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div>
      <div className={styles.parentAlmost}>
        <div>
          <p className={styles.almost}>Almost Adults</p>
          <p className={styles.textCaption}>
            This comedy feature follows two best friends in their final year of
            college while they transition into adulthood. One embraces her
            sexuality and….
          </p>
          <Link href={"/"}>
            {" "}
            <button className={styles.btnPlay}>play now</button>
          </Link>
        </div>

        <div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1 }}
          >
            {" "}
            <Image
              src={"/img/video.jpg"}
              alt="Almost Adults"
              className={styles.imgBg}
              width={1000}
              height={800}
              priority={true}
            />{" "}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Section3;
