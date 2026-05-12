import { useState, useEffect, useRef } from 'react';

export default function useScrollBlur(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const {
    threshold = 0.3,
    rootMargin = '0px',
    triggerOnce = false,
    blurAmount = 12,
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  const blurStyle = {
    filter: isVisible ? 'blur(0px)' : `blur(${blurAmount}px)`,
    opacity: isVisible ? 1 : 0,
    transition: 'filter 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'filter, opacity',
  };

  return [ref, blurStyle, isVisible];
}
