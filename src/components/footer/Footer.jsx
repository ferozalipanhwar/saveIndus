import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="../../../public/ajrak.jpeg" alt="Ajrak Logo" />
          <h3>Indus Awareness</h3>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#petition">Sign Petition</a></li>
            <li><a href="#stories">Stories</a></li>
            <li><a href="#map">Map</a></li>
            <li><a href="#donations">Donations</a></li>

          </ul>
        </div>

        <div className={styles.social}>
          <h4>Follow Us</h4>
          <div className={styles.icons}>
            <FaFacebook className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaInstagram className={styles.icon} />
            <FaYoutube className={styles.icon} />
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        <p>&copy; {new Date().getFullYear()} Indus Awareness. All rights reserved PanhwarCode.</p>
      </div>
    </footer>
  );
};

export default Footer;
