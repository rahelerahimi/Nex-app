import styles from './subsUs.module.css';
const SubUs=()=> {
     return (
       <div className={styles.parentSubsUs}>
        <div></div>
      <p>What are you waiting for? Subscribe Now.</p>
      <p>Subscribe for $5.99/ Month. Cancel anytime.</p>
      <button className={styles.btnSubsUs}>start free trial</button>
       </div>
     )
   }
   export default SubUs;