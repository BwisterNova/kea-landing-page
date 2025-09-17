import {
  FaBell,
  FaHeadphones,
  FaImage,
  FaMoon,
  FaSun,
  FaUser,
} from "react-icons/fa";
import styles from "./rightContent.module.css";
import { useTheme } from "../../Theme/ThemeContext";

// RightContent now uses global theme context
export default function RightContent() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.rightContentContainer}>
      <span className={`${styles.span} ${styles.spanInvisible}`}>
        <FaImage style={{ marginRight: "10px" }} />
        Gallery
      </span>
      <span className={`${styles.span} ${styles.spanInvisible}`}>
        <FaHeadphones style={{ marginRight: "10px" }} /> Support
      </span>
      <span className={styles.span}>
        <FaBell />{" "}
      </span>
      {/* Theme toggle: sun/moon icon, switches theme globally */}
      <span
        className={styles.span}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        title={
          theme === "light" ? "Switch to dark mode" : "Switch to light mode"
        }
        style={{ cursor: "pointer" }}
      >
        {theme === "dark" ? <FaMoon /> : <FaSun />}
      </span>
      <span className={`${styles.span} ${styles.profile}`}>
        <FaUser />
      </span>
    </div>
  );
}
