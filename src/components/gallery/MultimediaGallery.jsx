import React from "react";
import styles from "./MultimediaGallery.module.css";

const MultimediaGallery = () => {
  const photos = [
    "/images/indus1.jpg",
    "/images/indus2.jpg",
    "/images/protest1.jpg",
  ];

  const videos = [
    { src: "https://www.youtube.com/embed/example1", title: "Protest Highlights" },
    { src: "https://www.youtube.com/embed/example2", title: "Indus River Journey" },
  ];

  return (
    <div className={styles.gallery}>
      <section className={styles.photos}>
        <h2>Photo Gallery</h2>
        <div className={styles.photoGrid}>
          {photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Photo ${index + 1}`} className={styles.photo} />
          ))}
        </div>
      </section>

      <section className={styles.videos}>
        <h2>Video Gallery</h2>
        <div className={styles.videoGrid}>
          {videos.map((video, index) => (
            <div key={index} className={styles.videoWrapper}>
              <iframe
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.documentaries}>
        <h2>Documentaries</h2>
        <p>Explore documentaries explaining the impact on the Indus River and its communities.</p>
        <div className={styles.videoGrid}>
          <div className={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/example3"
              title="Documentary: The Indus Crisis"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultimediaGallery;
