import React from "react";
import styles from "./status.module.css";
import Image from "next/image";
import { StatusDate } from "../../type/type";
import { statusDate } from "./data";

const Status = () => {
  return (
    <div>
      <div className={styles.parentActives}>
        <div className={styles.flexStatus}>
          {statusDate.map((item: StatusDate) => {
            return (
              <div key={item.id} className={styles.mapStatus}>
                <div className={styles.flexText}>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>

                <Image
                  src={item.src}
                  alt="status"
                  width={200}
                  height={200}
                  priority={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Status;
