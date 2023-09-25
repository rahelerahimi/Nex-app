import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';
import { dataFooter } from './data';
import { FooterData } from '../../type/type';
import { IoLogoFacebook } from 'react-icons/io';
import { AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';


 const Footer=()=>{
  return (
    <div className={styles.parentFooter}>

      <div>
         <Link href={'/'}> <Image src={"./img/logo.svg"}  alt={'logo'}  width={200} height={200} priority={true}/></Link>
        <p className={styles.contact}>Connect with us</p>
        <div className={styles.iconParent}>
          
          <span className={styles.iconx}><IoLogoFacebook /></span>
          <span className={styles.iconx}><AiOutlineTwitter /></span>
          <span className={styles.iconx}><AiFillGithub /></span>
        </div>
        <Link href={'/'}><p className={styles.dnlText}>Download Streamvid mobile app</p></Link>
           
            
      
      </div>
      {
        dataFooter.map((item:FooterData) => {
          return <div key={item.id} className={styles.parentListFooter}>

            <p className={styles.titleFooter}> {item.t1}</p>
            <ul className={styles.ulfooter}>
            <Link href={'/'}> <li className={styles.lifooter}>{item.t2}</li></Link>
            <Link href={'/'}>  <li className={styles.lifooter}>{item.t3}</li></Link>
            <Link href={'/'}> <li className={styles.lifooter}>{item.t4}</li></Link>
            <Link href={'/'}> <li className={styles.lifooter}>{item.t5}</li></Link>
            <Link href={'/'}> <li className={styles.lifooter}>{item.t6}</li></Link>
            </ul>
          </div>
        })
      }
    </div>
  )
}
export default Footer;