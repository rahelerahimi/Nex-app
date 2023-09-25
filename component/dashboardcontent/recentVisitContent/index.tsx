import Image from "next/image";
import Link from "next/link";
import { buyRepeatDate } from "../buyrepeat/data";
import styles from './recentVisit.module.css';

const RecentVisitContent = () => {
  return (
    <div className={styles.parentRecentVisit}  style={{ direction: 'ltr' }}>
      <p className={styles.titleRecentVisit}>recent visit</p>
    <div className={styles.parentMapRecentVisit}>

      {
        buyRepeatDate.map((item) => {
          return (
            <Link href={item.href}> <div key={item.id} >
              <Image src={item.src} alt={item.text} width={200} height={200} priority={true}  />
              <p>{item.text}</p>
              <button className={styles.btnComment}>add to list</button>
            </div>
            </Link>
          )
        })
      }
    </div>
    </div>
  )
}
export default RecentVisitContent;