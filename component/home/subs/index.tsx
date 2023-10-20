import styles from "./subs.module.css";
import { subscribContentData } from "./data";

const SubScriptionContent = () => {
  return (
    <div className={styles.parentSubsCribe}>
      <p className={styles.title1Subs}>Select Your Plan</p>
      <p className={styles.title2Subs}>
        No hidden fees, equipment rentals, or installation appointments.
      </p>
      <div className={styles.parentSubsItem}>
        <div className={styles.itemSubs}>
          {subscribContentData.map((item) => {
            return (
              <div key={item.id}>
                <div className={styles.parentPrice}>
                  <p className={styles.plan}>{item.plan}</p>
                  <p className={styles.price}>{item.price}</p>
                  <button className={styles.btnSubscribe}>choose plan</button>
                </div>

                <div className={styles.parentTextSubs}>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                  <p>{item.text3}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SubScriptionContent;
