import { useState } from "react";
import styles from "./tabBar.module.css";
import {
  FaFolder,
  FaHome,
  FaImage,
  FaVideo,
  FaMagic,
  FaBolt,
  FaEdit,
} from "react-icons/fa";

export default function TabBar() {
  const [active, setActive] = useState("home");

  const tab = [
    {
      id: "home",
      label: "Home",
      icon: <FaHome width={30} height={30} />,
    },

    {
      id: "image",
      label: "Image",
      icon: <FaImage width={30} height={30} />,
    },

    {
      id: "video",
      label: "Video",
      icon: <FaVideo width={30} height={30} />,
    },

    {
      id: "Enhancer",
      label: "Enhancer",
      icon: <FaMagic width={30} height={30} />,
    },
    {
      id: "Realtime",
      label: "Realtime",
      icon: <FaBolt width={30} height={30} />,
    },
    {
      id: "Edit",
      label: "Edit",
      icon: (
        <FaEdit width={30} height={30} className={styles.invisbleOnMobile} />
      ),
    },

    {
      id: "Assets",
      label: "Assets",
      icon: (
        <FaFolder width={30} height={30} className={styles.invisbleOnMobile} />
      ),
    },
  ];

  //for sliding indicator compute left offset based on active index

  const activeIndex = tab.findIndex((t) => t.id === active);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabBar}>
        {/* Sliding background */}
        <span
          className={styles.slider}
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
        />
        {tab.map((tabs) => (
          <button
            key={tabs.id}
            className={`${styles.tab} ${
              active === tabs.id ? styles.active : ""
            }`}
            onClick={() => setActive(tabs.id)}
            aria-label={tabs.label}
          >
            <span className={styles.icon}> {tabs.icon} </span>
            <span className={styles.tooltip}> {tabs.label} </span>
          </button>
        ))}
      </div>
    </div>
  );
}
