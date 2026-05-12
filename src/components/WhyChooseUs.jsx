import { useEffect, useRef, useState } from "react";

const bars = [
  { label: "Design", pct: 92, color: "#fde8cc" },
  { label: "Development",    pct: 91, color: "#c8f0d8" },
  { label: "Branding",   pct: 79, color: "#f5c8e8" },
  { label: "Marketing",         pct: 87, color: "#cdd8fb" },
];

const MAX_H = 220;
const MAX_PCT = 92;

// Responsive constants
const MOBILE_MAX_H = 150;
const MOBILE_MAX_PCT = 92;

export default function WhyChooseUs() {
  const barRefs = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
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

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        barRefs.current.forEach((el, i) => {
          if (el) {
            const isMobile = window.innerWidth <= 768;
            const maxHeight = isMobile ? MOBILE_MAX_H : MAX_H;
            const maxPct = isMobile ? MOBILE_MAX_PCT : MAX_PCT;
            
            // Calculate height proportionally based on percentage
            const calculatedHeight = Math.round((bars[i].pct / maxPct) * maxHeight);
            
            // For mobile, ensure visible height differences
            let finalHeight = calculatedHeight;
            if (isMobile) {
              // Scale down the heights for better mobile visibility
              finalHeight = Math.round((bars[i].pct / 100) * 120);
              // Ensure minimum height but still maintain differences
              if (finalHeight < 30) finalHeight = 30;
            }
            
            el.style.height = `${finalHeight}px`;
            el.style.transform = "translateY(0px)";
            el.style.opacity = "1";
          }
        });
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div style={styles.wrapper} ref={sectionRef}>
      {/* ── Header ── */}
      <div style={styles.header}>
        <h2 style={styles.heading}>
          Why PixelStack is the right choice for you
        </h2>
        <span style={styles.badge}>Why us</span>
      </div>

      {/* ── Main Content Row ── */}
      <div style={styles.mainRow}>
        {/* ── Left Side - Bar Chart Section ── */}
        <div style={styles.leftSection}>
          <div style={styles.card}>
            <div style={styles.barsContainer}>
              {bars.map((bar, i) => (
                <div key={bar.label} style={styles.barGroup}>
                  <div style={styles.barWrap}>
                    <span style={styles.barPct}>{bar.pct}%</span>
                    <div
                      ref={(el) => (barRefs.current[i] = el)}
                      style={{
                        ...styles.bar,
                        background: bar.color,
                        height: "0px",
                      }}
                    />
                  </div>
                  <span style={styles.barLabel}>{bar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right Side - Content Cards ── */}
        <div style={styles.rightSection}>
          {/* Trust Card */}
          <div style={{ ...styles.card, ...styles.trustCard }}>
            <div>
              <div style={styles.avatarRow}>
                {["A", "B", "C", "D"].map((letter, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.avatar,
                      background: ["#e8a87c", "#7cb9e8", "#a8e87c", "#e87ca8"][i],
                      marginLeft: i === 0 ? 0 : -8,
                    }}
                  >
                    {letter}
                  </div>
                ))}
                <div style={{ ...styles.avatar, background: "#333", marginLeft: -8 }}>
                  +
                </div>
              </div>
              <p style={styles.ratingLine}>
                <span style={{ color: "#f5a623" }}>★★★★★</span>&nbsp; 13k rating (4.7 Rating)
              </p>
            </div>
            <div style={styles.trustHeading}>
              Trustworthy IT Services
              <br />
              positive 99.9% uptime
            </div>
          </div>

          {/* Info Card */}
          <div style={{ ...styles.card, ...styles.infoCard }}>
            <p style={styles.tagLine}>
              Experience assured quality through trusted IT service partners.
            </p>
            <div style={styles.statsRow}>
              <div>
                <div style={styles.statNum}>200+</div>
                <div style={styles.statDesc}>Completed Projects</div>
              </div>
              <div>
                <div style={styles.statNum}>50</div>
                <div style={styles.statDesc}>IT Experts</div>
              </div>
            </div>
            {/* Star illustration */}
            <svg
              style={styles.illus}
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="27" cy="27" r="27" fill="#f3eeff" />
              <rect x="14" y="20" width="26" height="18" rx="3" fill="#c8b4f5" />
              <rect x="18" y="24" width="8" height="6" rx="1" fill="#fff" opacity="0.7" />
              <rect x="28" y="24" width="8" height="2" rx="1" fill="#fff" opacity="0.5" />
              <rect x="28" y="28" width="5" height="2" rx="1" fill="#fff" opacity="0.5" />
              <polygon
                points="27,10 30,17 37,17 31,22 33,29 27,24 21,29 23,22 17,17 24,17"
                fill="#f5c542"
                opacity="0.85"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Styles ── */
const styles = {
  wrapper: {
    fontFamily: "'Sora', 'Segoe UI', sans-serif",
    maxWidth: "clamp(20rem, 90vw, 68.75rem)",
    margin: "0 auto",
    padding: "clamp(2rem, 6vw, 3rem) clamp(1rem, 4vw, 1.5rem)",
    background: "#F2EFF8",
    width: "100%",
    minWidth: "280px",
    overflowX: "hidden",
  },
  header: {
    textAlign: "center",
    marginBottom: "clamp(1rem, 3vw, 1.5rem)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "clamp(0.5rem, 2vw, 0.75rem)",
  },
  heading: {
    fontSize: "clamp(1.25rem, 4vw, 2rem)",
    fontWeight: 800,
    color: "#111",
    lineHeight: 1.1,
    display: "block",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    textAlign: "center",
    maxWidth: "100%",
    margin: "0 auto",
  },
  badge: {
    display: "inline-block",
    background: "#0f8db3",
    marginLeft: "0",
    color: "#fff",
    fontSize: "clamp(0.65rem, 2vw, 0.75rem)",
    fontWeight: 600,
    padding: "clamp(0.25rem, 1vw, 0.25rem) clamp(0.75rem, 2vw, 0.75rem)",
    borderRadius: "clamp(1rem, 3vw, 1.25rem)",
    marginBottom: "0",
    animation: "upDown 3s ease-in-out infinite",
    whiteSpace: "nowrap",
    alignSelf: "center",
    flexShrink: 0,
  },
  card: {
    background: "#fff",
    borderRadius: "clamp(1rem, 3vw, 1.5rem)",
    border: "clamp(0.0625rem, 0.2vw, 0.0625rem) solid #ebebeb",
    padding: "clamp(1.5rem, 4vw, 2rem) clamp(0.75rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.25rem)",
    marginBottom: "clamp(1rem, 3vw, 1.25rem)",
  },
  barsContainer: {
    display: "flex",
    alignItems: "flex-end",
    gap: "clamp(0.75rem, 2.5vw, 1.5rem)",
    height: "clamp(10rem, 20vw, 17.5rem)",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "100%",
    overflow: "hidden",
  },
  barGroup: {
    width: "clamp(3rem, 8vw, 5rem)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "flex-end",
    minWidth: "clamp(2.5rem, 6vw, 3rem)",
    maxWidth: "100%",
    overflow: "hidden",
  },
  barWrap: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    maxWidth: "100%",
    overflow: "hidden",
  },
  barPct: {
    fontSize: "clamp(0.65rem, 2vw, 0.75rem)",
    fontWeight: 700,
    color: "#333",
    marginBottom: "clamp(0.4rem, 1.5vw, 0.4rem)",
    whiteSpace: "nowrap",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  bar: {
    width: "100%",
    borderRadius: "clamp(0.75rem, 2vw, 0.75rem) clamp(0.75rem, 2vw, 0.75rem) clamp(0.5rem, 1.5vw, 0.5rem) clamp(0.5rem, 1.5vw, 0.5rem)",
    transition: "height 1.2s cubic-bezier(.4,0,.2,1)",
    transform: "translateY(clamp(0.75rem, 2vw, 1.25rem))",
    opacity: 0,
  },
  barLabel: {
    fontSize: "clamp(0.625rem, 2vw, 0.75rem)",
    color: "#888",
    marginTop: "clamp(0.625rem, 2vw, 0.625rem)",
    textAlign: "center",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  mainRow: {
    display: "flex",
    gap: "clamp(1rem, 3vw, 1.5rem)",
    alignItems: "stretch",
    flexWrap: "wrap",
  },
  leftSection: {
    flex: "1 1 clamp(15rem, 40vw, 25rem)",
    width: "100%",
    minWidth: "clamp(12rem, 35vw, 18.75rem)",
  },
  rightSection: {
    flex: "1 1 clamp(15rem, 40vw, 25rem)",
    display: "flex",
    flexDirection: "column",
    gap: "clamp(1rem, 3vw, 1.25rem)",
    minWidth: "clamp(12rem, 35vw, 18.75rem)",
  },
  infoCard: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
    marginBottom: 0,
    paddingBottom: 24,
  },
  tagLine: {
    fontSize: "clamp(0.875rem, 2.5vw, 0.9375rem)",
    fontWeight: 600,
    color: "#222",
    lineHeight: 1.4,
    marginBottom: "clamp(1rem, 3vw, 1.125rem)",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  statsRow: {
    display: "flex",
    gap: "clamp(1rem, 3vw, 1.5rem)",
    flexWrap: "wrap",
  },
  statNum: {
    fontSize: "clamp(1.5rem, 3vw, 1.60rem)",
    fontWeight: 500,
    color: "#111",
  },
  statDesc: {
    fontSize: "clamp(0.625rem, 2vw, 0.6875rem)",
    color: "#999",
    marginTop: "clamp(0.125rem, 0.5vw, 0.125rem)",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  illus: {
    position: "absolute",
    bottom: "clamp(0.75rem, 2vw, 0.75rem)",
    right: "clamp(0.75rem, 2vw, 0.75rem)",
    width: "clamp(2.5rem, 6vw, 4rem)",
    height: "clamp(2.5rem, 6vw, 4rem)",
  },
  trustCard: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  avatarRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "clamp(0.5rem, 2vw, 0.5rem)",
    flexWrap: "wrap",
  },
  avatar: {
    width: "clamp(2rem, 5vw, 2.25rem)",
    height: "clamp(2rem, 5vw, 2.25rem)",
    borderRadius: "50%",
    border: "clamp(0.125rem, 0.3vw, 0.125rem) solid #fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "clamp(0.75rem, 2vw, 0.8125rem)",
    fontWeight: 700,
    color: "#fff",
  },
  ratingLine: {
    fontSize: "clamp(0.625rem, 2vw, 0.6875rem)",
    color: "#999",
    marginBottom: "clamp(1rem, 3vw, 1rem)",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  trustHeading: {
    fontSize: "clamp(1rem, 2.5vw, 1rem)",
    fontWeight: 700,
    color: "#111",
    lineHeight: 1.3,
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
};
