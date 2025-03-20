// src/components/Header.js
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
      <img src="../../../public/ajrak.jpeg" alt="Ajrak Logo" />
        <h1>Save Indus</h1>
      </div>
      <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
        <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link>
        <Link to="/letter-campaign" onClick={() => setMenuOpen(false)}>Letter Campaign</Link>
        <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
        <Link to="/donate" onClick={() => setMenuOpen(false)}>Donate</Link>
        <Link to="/about-us" onClick={() => setMenuOpen(false)}>About us</Link>
        <Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </nav>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
