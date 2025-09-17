import styles from "./topBar.module.css";
import logo from "../../assets/Images/logo.webp";
import TabBar from "../TabBar/TabBar";
import RightContent from "../RIghtContent/RightContent";

export default function TopBar() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img
          src={logo}
          alt="krea ai logo"
          width={20}
          height={20}
          style={{ backgroundColor: "#000", borderRadius: "5px" }}
        />

        <span>Krea AI</span>
      </div>
      <div className={styles.center}>
        <TabBar />
      </div>
      <div className={styles.right}>
        <RightContent />
      </div>
    </div>
  );
}
