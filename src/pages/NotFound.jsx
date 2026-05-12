import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.inner}>

        {/* Text - Left Side */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>Oops! Page not found</h1>
          <p className={styles.subtitle}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className={styles.homeButton}>
            ← Back to Home
          </Link>
        </div>

        {/* Video - Right Side */}
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          className={styles.errorGif}
        >
          <source src="/video/main404.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
    </div>
  );
};

export default NotFound;