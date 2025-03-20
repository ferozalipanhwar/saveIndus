import React from "react";
import styles from "./HeroSection.module.css"; // Import CSS Module

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Save Our <span className={styles.highlight}>Rivers</span>
        </h1>
        <p className={styles.subtitle}>
          Protect Sindh's heritage and future by raising your voice against illegal canals.
        </p>
        <div className={styles.buttons}>
          <button className={styles.buttonPrimary}>Sign the Petition</button>
          <button className={styles.buttonSecondary}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
