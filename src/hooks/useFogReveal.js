import { useState, useEffect, useRef } from 'react';

export default function useFogReveal(options = {}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef(null);

  const {
    threshold = 0.6,
    rootMargin = '0px',
    triggerOnce = false,
  } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else {
          if (!triggerOnce) {
            setIsRevealed(false);
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

  return [ref, isRevealed];
}
