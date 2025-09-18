import styles from "./landingPage.module.css";
import ImageSlide from "../../components/ImageSlide/ImageSlide";
import TabBar from "../../components/TabBar/TabBar";
import Tools from "../../components/Tools/Tools";

export default function LandingPage() {
  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.middleTabs}>
        <TabBar />
      </div>
      <span>
        <ImageSlide />
      </span>

      <div>
        <Tools />
      </div>
    </div>
  );
}
