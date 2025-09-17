import styles from "./tools.module.css";
import React from "react";

import {
  FaBolt,
  FaEdit,
  FaImage,
  FaMagic,
  FaVideo,
  FaMicrophone,
  FaWalking,
  FaUserGraduate,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "Image",
    desc: "Generate Images with custom styles in Flux and ideogram.",
    icon: <FaImage />,
    gradient: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)",
  },
  {
    id: 2,
    title: "Video",
    desc: "Generate videos with Hailuo, Pika, RUnway, Luma, and more.",
    icon: <FaVideo />,
    gradient: "linear-gradient(135deg, #facc15 0%, #f59e0b 100%)",
  },
  {
    id: 3,
    title: "Realtime",
    desc: "Realtime AI rendering on a canvas. Instant feedback loops.",
    icon: <FaBolt />,
    gradient: "linear-gradient(135deg, #34d399 0%, #10b981 100%)",
  },
  {
    id: 4,
    title: "Enhancer",
    desc: "Upscale and enhance images and videos up to 22k.",
    icon: <FaMagic />,
    gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 10%)",
  },
  {
    id: 5,
    title: "Edit",
    desc: "Add objects, change style, or expand photos and generations.",
    icon: <FaEdit />,
    gradient: "linear-gradient(135deg, #7c3aed 0%, #f4f3f3 100%)",
  },
  {
    id: 6,
    title: "Video Lipsync",
    desc: "Lip Sync any video to any audio.",
    icon: <FaMicrophone />,
    gradient: "linear-gradient(135deg, #f87171 0%, #ef4444 100%)",
  },
  {
    id: 7,
    title: "Motion Transfer",
    desc: "Transfer motion to images and animate characters.",
    icon: <FaWalking />,
    gradient: "#111827",
  },
  {
    id: 8,
    title: "Train",
    desc: "Teach Krea to replicate your style, products, or characters.",
    icon: <FaUserGraduate />,
    gradient: "linear-gradient(135deg, #f472b6 0%, #ec4899 100%)",
  },
];

export default function Tools() {
  const [showAll, setShowAll] = useState(false);

  // Split into 4 and buttom 4
  const topItems = items.slice(0, 4);
  const bottomItems = items.slice(4);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Generate</h2>
        <button
          className={styles.toggleBtn}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? (
            <>
              <FaArrowUp /> Show less
            </>
          ) : (
            <>
              <FaArrowDown /> Show all
            </>
          )}
        </button>
      </div>

      {/* Top row (always visible) */}
      <div className={styles.grid}>
        {topItems.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>

      {/* Bottom row (collapsible) */}
      <div
        className={`${styles.grid} ${styles.collapse}`}
        style={{ maxHeight: showAll ? "500px" : "0", marginTop: "1rem" }}
      >
        {bottomItems.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

// Resuseable card component
function Card({ title, desc, icon, gradient }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap} style={{ background: gradient }}>
        {React.cloneElement(icon, { color: "#fff", size: 24 })}
      </div>
      <div className={styles.textWrap}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <button className={styles.openBtn}>Open</button>
    </div>
  );
}
