import styles from './commentContent.module.css';
import Image from 'next/image';
import { buyRepeatDate } from '../buyrepeat/data';
import { BuyRepeat } from '../../type/type';
const CommentsContent = () => {
  return (
    <div style={{ direction: 'ltr' }}>
      <p className={styles.commentsTitle}>my comments</p>
      <div className={styles.parentMapComment}>

        {
          buyRepeatDate.slice(0,2).map((item:BuyRepeat) => {
            return (
              <div key={item.id}  className={styles.mapComment}>
                <div>
                <Image src={item.src} alt={item.text} width={200} height={200} priority={true} className={styles.imgComment} />
                <p>{item.text}</p>
             
                </div>
                <button className={styles.btnComment}>Register comment</button>
               
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default CommentsContent;