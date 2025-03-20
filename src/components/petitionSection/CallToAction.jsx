import React, { useState } from "react";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  const [signatures, setSignatures] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [customMessage, setCustomMessage] = useState("");

  const handlePetitionSign = () => {
    if (name && email) {
      setSignatures(signatures + 1);
      setName("");
      setEmail("");
      alert("Thank you for signing the petition!");
    } else {
      alert("Please fill out your name and email.");
    }
  };

  const handleSendLetter = () => {
    if (name && email && customMessage) {
      alert("Your letter has been sent!");
      setName("");
      setEmail("");
      setCustomMessage("");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className={styles.callToAction}>
      {/* Petition Section */}
      <section className={styles.petition}>
        <h2>Sign the Petition</h2>
        <p>Join {signatures} others in urging the government to halt illegal canal constructions.</p>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <button onClick={handlePetitionSign} className={styles.button}>
            Sign Petition
          </button>
        </form>
      </section>

      {/* Letter Campaign Tool */}
      <section className={styles.letterCampaign}>
        <h2>Send a Letter</h2>
        <p>Use our pre-drafted letter to make your voice heard.</p>
        <textarea
          placeholder="Customize your letter here..."
          value={customMessage}
          onChange={(e) => setCustomMessage(e.target.value)}
          className={styles.textarea}
        />
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <button onClick={handleSendLetter} className={styles.button}>
            Send Letter
          </button>
        </form>
      </section>
    </div>
  );
};

export default CallToAction;
