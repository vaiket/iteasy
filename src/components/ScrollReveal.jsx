import React, { useEffect, useRef, useState } from 'react';
import styles from './ScrollReveal.module.css';

const ScrollReveal = ({ children, direction = 'bottom' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const getClassName = () => {
    if (isVisible) return styles.visible;
    if (direction === 'left') return styles.revealLeft;
    if (direction === 'right') return styles.revealRight;
    return styles.reveal;
  };

  return (
    <div ref={ref} className={getClassName()}>
      {children}
    </div>
  );
};

export default ScrollReveal;
