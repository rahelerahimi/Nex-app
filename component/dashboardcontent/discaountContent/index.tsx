import React from "react";
import Image from "next/image";
import { discountContentDate } from "./data";
import { DiscountContentDate } from "../../type/type";
import styles from './discountContent.module.css';

const DiscountContent = () => {
  return (
    <div style={{direction:'ltr'}}>
      <p className={styles.titleSubScribe}>Your Gift history</p>
      <div className={styles.parentMapDiscount}>
        {
          discountContentDate.map((item: DiscountContentDate) => {
            return (
              <div key={item.id} className={styles.mapDiscount}>
                              <Image src={item.src} alt={item.title} width={100} height={200} priority={true} />
                <div>
                <div className={styles.parentCountTitle}>
                  <p >{item.count}</p>
                  <p>{item.title}</p>
                </div>

                 <p className={styles.textDiscount}>{item.text}</p>
               </div>

              </div>
            )
          })

        }
      </div>
    </div>
  )
}
export default DiscountContent;