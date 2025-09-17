import styles from "./footer.module.css";

import logo from "../../assets/Images/logo.webp";
import mobbinLogo from "../../assets/Images/mobbinLogo.png";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.side}>
        <img src={logo} alt="krea ai logo " width={25} height={20} />
        <h3>Krea AI</h3>
      </div>
      <div className={styles.side}>
        <h3>curated by</h3>{" "}
        <img src={mobbinLogo} alt="Mobbin logo " width={40} height={40} />
        <p>Mobbin</p>
      </div>
    </div>
  );
}
