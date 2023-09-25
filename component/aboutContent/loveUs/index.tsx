import Image from 'next/image';
import styles from './loveUs.module.css';
import { loveUsData } from './data';
import { LoveUsData } from '../../type/type';

const LoveUs=()=> {
     return (
       <div className={styles.parentLoveUs}>
     <p className={styles.titleLoveUs}>Why You'll Love Us</p>
     <div  className={styles.parentMapLoveUsdata}>

          {
               loveUsData.map((item:LoveUsData)=>{
                    return(
                         <div key={item.id}>
                          <Image  src={item.src} alt={item.title} width={300} height={300} priority={true}/>
                           <p>{item.title}</p>
                           <p>{item.text}</p>   
                         </div>
                    )
               })
          }
     </div>
       </div>
     )
   }
   export default LoveUs;