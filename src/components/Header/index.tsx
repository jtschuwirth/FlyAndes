import styles from "./style.module.css"

export const Header  = () => {
  return (
    <div className={styles.header}>
      <div className={styles.first_row}>
        <img alt="" src="/assets/fly-andes-logo.webp"/>
        <div className={styles.btns}>
          <button className={styles.btn}>Portfolio</button>
          <button className={styles.btn}>Pricing</button>
          <button className={styles.btn}>Contact Us</button>
        </div>
      </div>
      <div className={styles.second_row}>
        <span className={styles.subtitle}>Real Estate Drone Videography And Photography Services</span>
        
      </div>
        
    </div>
  );
};
