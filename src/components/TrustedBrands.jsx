import { useEffect, useRef, useState } from "react";

const technologies = [
  "Web Development", "GitHub", "Website Architecture", "E-commerce", "Odoo", "Zoho", 
  "LinkedIn Optimization", "AI Chatbots", "NotebookLM", "UI/UX", "Canva", 
  "UI Design", "Digital Marketing", "Landing Page", "AI Integration", "SEO", 
  "Logo Design", "Slide Deck", "Infographic", "AI Images"
];

const technologyIcons = {
  "Web Development": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 17L12 13L16 17" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  "GitHub": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  "Website Architecture": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
      <path d="M9 21V9" stroke="currentColor" strokeWidth="2"/>
      <path d="M15 21V9" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  "E-commerce": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 2L3 6V14C3 14.5304 3.21071 15.0391 3.58579 15.4142C3.96086 15.7893 4.46957 16 5 16H19C19.5304 16 20.0391 15.7893 20.4142 15.4142C20.7893 15.0391 21 14.5304 21 14V6L18 2H6Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 6H21" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  "Odoo": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="7" r="2" fill="currentColor"/>
    </svg>
  ),
  "Zoho": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 8L16 8M8 12L16 12M8 16L12 16" stroke="currentColor" strokeWidth="2"/>
      <circle cx="18" cy="6" r="2" fill="currentColor"/>
    </svg>
  ),
  "LinkedIn Optimization": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  "AI Chatbots": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H17L12 22L7 17H5C4.46957 17 3.96086 16.7893 3.58579 16.4142C3.21071 16.0391 3 15.5304 3 15V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2"/>
      <circle cx="8" cy="9" r="1" fill="currentColor"/>
      <circle cx="12" cy="9" r="1" fill="currentColor"/>
      <circle cx="16" cy="9" r="1" fill="currentColor"/>
    </svg>
  ),
  "NotebookLM": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M2 2H8V22H2V2Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 2H22V8H8V2Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 10H22V16H8V10Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 18H22V22H8V18Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  "UI/UX": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
      <circle cx="7.5" cy="6.5" r="1.5" fill="currentColor"/>
      <path d="M7 12H17" stroke="currentColor" strokeWidth="2"/>
      <path d="M7 16H17" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  "Canva": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="canvaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C4CC"/>
          <stop offset="100%" stopColor="#7B2FF7"/>
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#canvaGradient)"/>
      <path d="M8 8L16 8M8 12L16 12M8 16L13 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="17" cy="7" r="2" fill="white"/>
    </svg>
  ),
  "UI Design": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
      <circle cx="7.5" cy="6.5" r="1.5" fill="currentColor"/>
      <path d="M7 12H17" stroke="currentColor" strokeWidth="2"/>
      <path d="M7 16H17" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  "Digital Marketing": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="7" r="2" fill="currentColor"/>
      <path d="M8 16L12 12L16 16" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  "Landing Page": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
      <path d="M7 12H17" stroke="currentColor" strokeWidth="2"/>
      <path d="M7 16H17" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  "AI Integration": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 1V6M12 18V23M4.22 4.22L7.05 7.05M16.95 16.95L19.78 19.78M1 12H6M18 12H23M4.22 19.78L7.05 16.95M16.95 7.05L19.78 4.22" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  "SEO": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 11L10 13L14 9" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  "Logo Design": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M9 7L11 9L15 5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  "Slide Deck": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 12H16" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 16H16" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  "Infographic": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  "AI Images": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
      <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
};

const allTechnologies = [...technologies, ...technologies];

export default function TrustedBrands() {
  const trackRef = useRef(null);
  const animRef = useRef(null);
  const posRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredTech, setHoveredTech] = useState(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2;
    let last = null;
    const speed = 1.2;

    const step = (ts) => {
      if (!isPaused) {
        if (last !== null) {
          posRef.current += speed;
          if (posRef.current >= totalWidth) posRef.current = 0;
          track.style.transform = `translateX(-${posRef.current}px)`;
        }
        last = ts;
        animRef.current = requestAnimationFrame(step);
      }
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [isPaused]);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
      `}</style>
      <section style={styles.section}>
        {/* Header */}
        <div style={styles.header}>
        <div style={styles.headerContent}>
          <h2 style={styles.heading}>
            Technologies<br />
            <span style={styles.highlight}>We Use</span>
          </h2>
          <p style={styles.subheading}>
            Modern tools for exceptional results
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div style={styles.marqueeContainer}>
        <div 
          style={styles.marqueeWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div ref={trackRef} style={styles.track}>
            {allTechnologies.map((tech, i) => {
              const isHovered = hoveredTech === tech;
              const animationDelay = i * 0.1;
              return (
                <div 
                  key={i} 
                  style={{
                    ...styles.technologyItem,
                    animation: `float ${3 + (i % 3)}s ease-in-out ${animationDelay}s infinite`,
                    transform: isHovered ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)',
                    background: isHovered ? 'linear-gradient(145deg, #667eea 0%, #764ba2 100%)' : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                    border: isHovered ? '1px solid rgba(102, 126, 234, 0.3)' : '1px solid rgba(0,0,0,0.08)',
                    boxShadow: isHovered ? '0 12px 24px rgba(102, 126, 234, 0.3)' : '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                  onMouseEnter={() => setHoveredTech(tech)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div 
                    className="icon" 
                    style={{
                      ...styles.iconContainer,
                      transform: isHovered ? 'rotate(360deg) scale(1.2)' : 'rotate(0deg) scale(1)',
                      color: isHovered ? '#ffffff' : '#667eea',
                      animation: isHovered ? 'pulse 1s ease-in-out infinite' : 'none',
                    }}
                  >
                    {technologyIcons[tech]}
                  </div>
                  <span 
                    className="text" 
                    style={{
                      ...styles.technologyText,
                      color: isHovered ? '#ffffff' : '#475569',
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

const styles = {
  section: {
    padding: "clamp(3rem, 8vw, 6rem) clamp(2rem, 5vw, 4rem)",
    maxWidth: "1400px",
    margin: "0 auto",
    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
    borderRadius: "24px",
    boxShadow: "0 4px 40px rgba(0,0,0,0.06)",
    border: "1px solid rgba(0,0,0,0.05)",
  },
  header: {
    textAlign: "center",
    marginBottom: "clamp(3rem, 6vw, 5rem)",
  },
  headerContent: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: "800",
    lineHeight: "1.1",
    color: "#1a202c",
    margin: "0 0 clamp(1rem, 2vw, 1.5rem) 0",
    letterSpacing: "-0.02em",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  highlight: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subheading: {
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    color: "#64748b",
    margin: 0,
    lineHeight: "1.6",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  marqueeContainer: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "16px",
    background: "#ffffff",
    border: "1px solid rgba(0,0,0,0.05)",
    padding: "clamp(2rem, 4vw, 3rem) 0",
  },
  marqueeWrapper: {
    overflow: "hidden",
    position: "relative",
  },
  track: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(2rem, 4vw, 3rem)",
    willChange: "transform",
    width: "max-content",
  },
  technologyItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "clamp(100px, 12vw, 120px)",
    height: "clamp(100px, 12vw, 120px)",
    background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
    borderRadius: "50%",
    border: "1px solid rgba(0,0,0,0.08)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    flexShrink: 0,
    padding: "clamp(0.5rem, 1vw, 0.75rem)",
    gap: "clamp(0.25rem, 0.5vw, 0.5rem)",
    position: "relative",
    overflow: "hidden",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "clamp(20px, 2.5vw, 24px)",
    height: "clamp(20px, 2.5vw, 24px)",
    color: "#667eea",
    flexShrink: 0,
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  technologyText: {
    fontSize: "clamp(0.6rem, 0.9vw, 0.7rem)",
    fontWeight: "600",
    color: "#475569",
    textAlign: "center",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: "0.01em",
    whiteSpace: "nowrap",
    lineHeight: "1.1",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
};
