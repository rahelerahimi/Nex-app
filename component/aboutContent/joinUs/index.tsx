import styles from './joinUs.module.css';
import Image from 'next/image';
const JoinUs = () => {
  return (
    <div className={styles.parentCommunity}>
      <div className={styles.flexComunity}>
        <Image src={'/img/comunity.webp'} alt='hj' width={800} height={800} priority={true} />
        <div>
          <p>Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Etiam erat velit scelerisque in. Sed libero enim sed faucibus turpis in eu mi bibendum. In dictum non consectetur a erat nam at lectus. Massa ultricies mi quis hendrerit dolor magna.</p>
          <button className={styles.btnJoinUs}>Join our community</button>
        </div>
      </div>
    </div>
  )
}
export default JoinUs;