
import React from 'react';
import styles from './section1.module.css';
import { web3Data } from './data';
import { Web3Data } from '../../type/type';
const Section1=()=> {
  return (
    <div >
      <div className={styles.parentTitle}>
        <h2 className={styles.title}> library of captivating crime thrillers </h2>
        <p className={styles.text}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quisquam similique doloribus ullam amet officiis et ab dolorem placeat iste?
       
          </p>
      </div>

      <div className={styles.parentMapText}>
        {
          web3Data.map((item:Web3Data) => {
            return <div key={item.id} className={styles.mapText} >
                 <img src={item.src} alt={item.title} className={styles.img}   />
              <p className={styles.titleWeb3}>{item.title}</p>
              <span className={styles.textWeb3}>{item.text}</span>
            </div>


          })
        }
      </div>


    </div>
  )
}

export default Section1