import styles from "./imageSlide.module.css";
import { useState } from "react";

import slide1 from "../../assets/Images/slide1.webp";
import slide2 from "../../assets/Images/slide2.webp";
import slide3 from "../../assets/Images/slide3.webp";

const slides = [
  {
    id: 1,
    src: slide1,
    title: "WAN 2.2 Image generation",
    text: "Generate complex images with the brand new and powerful WAN 2.2 model, Exceptional prompt and adherence and ultra- realistic textures.",
    button: "Try WAN 2.2",
  },
  {
    id: 1,
    src: slide2,
    title: "Flux.1 Krea",
    text: "We're making the weights to our FLUX.1 Krea model open-source, Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    button: "Try Flux.1",
  },
  {
    id: 1,
    src: slide3,
    title: "Luxury Product Photography",
    text: "Luxury liquor product scene, ribbled crystal bottle of ruby-red spirit with gold neck and white label, matchin...",
    button: "Try This",
  },
];

export default function ImageSlide() {
  //Index of the first visible slide (desktop shows index & index + 1)
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  //To next image (loops back at the end)
  function next() {
    setCurrent((i) => (i + 1) % total);
  }

  //To previous image, (loops around)
  function prev() {
    setCurrent((i) => (i - 1 + total) % total);
  }

  //Helper: returns the index to show alongside current (for desktop)
  const secondIndex = (current + 1) % total;

  return (
    <div className={styles.slider}>
      <span className={styles.imageSlider}>
        {/* Slides Container */}
        <div className={styles.track}>
          {/* First visible slide */}
          <SlideCard slide={slides[current]} />
        </div>
        <div>
          {/* Second visible slide for desktop only*/}
          <SlideCard
            slide={slides[secondIndex]}
            className={styles.desktopOnly}
          />
        </div>
      </span>
      {/* Bottom control section: dots + arrow */}
      <div className={styles.controls}>
        {/* Navigation dots */}
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`${styles.dot} ${
                i === current ? styles.dotActive : ""
              }`}
            />
          ))}
        </div>

        {/* Left/Right arrow buttons */}
        <div className={styles.arrows}>
          <button onClick={prev} aria-label="Previous Slide">
            &lt;
          </button>

          <button onClick={next} aria-label="Next Slide">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

// Small presentational component for a single Slide

function SlideCard({ slide, className }) {
  return (
    <div className={`${styles.slide} ${className || ""}`}>
      <img src={slide.src} alt={slide.title} />
      <div className={styles.caption}>
        <div className={styles.captionText}>
          <h2>{slide.title}</h2>
          <p>{slide.text}</p>
        </div>
        <button className={styles.cta}>{slide.button}</button>
      </div>
    </div>
  );
}
