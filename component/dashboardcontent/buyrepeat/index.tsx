import React from "react";
import styles from "./buyRepeat.module.css";
import { buyRepeatDate } from "./data";
import { BuyRepeat } from "../../type/type";
import Image from "next/image";
import Link from "next/link";
const BuyRepeat = () => {
  return (
    <div className={styles.parentAllBuyRepeat}>
      <p className={styles.FrequentPurchases}>Frequent purchases</p>
      <div className={styles.parentBuyRepeat}>
        {buyRepeatDate.map((item: BuyRepeat) => {
          return (
            <Link href={item.href}>
              <div key={item.id} className={styles.mapBuyRepeat}>
                <Image
                  src={item.src}
                  alt={item.text}
                  width={200}
                  height={200}
                  priority={true}
                />
                <p>{item.text}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BuyRepeat;
