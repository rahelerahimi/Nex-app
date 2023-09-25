 import styles from './address.module.css';
 import {FaRegComment } from 'react-icons/fa';
 import {BsTelephone} from 'react-icons/bs';
import {AiOutlineUser} from 'react-icons/ai';

 const AddressContent=()=> {
     return (
       <div  style={{direction:'ltr'}} className={styles.parentAddress}>
       <p className={styles.titleAddress}>address</p>
       <div className={styles.parentContentAddress}>
        <p>Lorem ipsum dolor sit amet.</p>
        <p><span><FaRegComment/></span><span>4551285142</span></p>
        <p><span><BsTelephone/></span><span>09120000000</span></p>
        <p><span><AiOutlineUser/></span><span>Rahele Rahimi</span></p>
       </div>
       </div>
     )
   }
   export default AddressContent;