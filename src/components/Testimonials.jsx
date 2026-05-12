import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    logo: "✦ TechFlow·",
    name: "Darshan Patel",
    role: "Founder of TechFlow",
    initials: "DP",
    color: "#c8b89a",
    textColor: "#5a3e28",
    text: "PixelStack created an incredible brand identity for TechFlow. The logo design and visual system perfectly capture our vision. Our brand recognition has increased significantly since the rebrand.",
  },
  {
    logo: "◈ Nexus·",
    name: "Rinkal Mahida",
    role: "CEO of Nexus Technologies",
    initials: "RM",
    color: "#b4c8a0",
    textColor: "#2a5a1a",
    text: "The mobile app design for Nexus exceeded our expectations. The UI is intuitive and the user experience is seamless. Our users love the new design and engagement has improved by 40%.",
  },
  {
    logo: "⬡ Prism·",
    name: "Hitesh Patel",
    role: "Founder of Prism Analytics",
    initials: "HP",
    color: "#a8b4d0",
    textColor: "#1a2a5a",
    text: "Prism's dashboard was complex, but PixelStack transformed it into a user-friendly platform. The data visualization is now clear and actionable. Our team's productivity has increased dramatically.",
  },
  {
    logo: "▲ ChatFlow·",
    name: "Richa Prajapati",
    role: "CEO of ChatFlow Technologies",
    initials: "RP",
    color: "#d0c0b0",
    textColor: "#4a3020",
    text: "The AI chatbox system for our customer support is revolutionary. Response times dropped by 78% and customer satisfaction is at 92%. The conversational design feels natural and human-like.",
  },
  {
    logo: "◆ CloudBase·",
    name: "Amit Shah",
    role: "CTO of CloudBase",
    initials: "AS",
    color: "#b8a0c8",
    textColor: "#3a285a",
    text: "Our cloud platform needed a complete UI overhaul. PixelStack delivered a modern, intuitive interface that reduced user training time by 60%. The team's attention to detail was exceptional.",
  },
  {
    logo: "⬥ FinTech·",
    name: "Priya Sharma",
    role: "Product Lead at FinTech",
    initials: "PS",
    color: "#c8b8a0",
    textColor: "#5a4a28",
    text: "The fintech dashboard PixelStack built is stunning. Complex financial data is now presented in a clean, digestible format. Our clients love the new interface and it's boosted our retention rates.",
  },
];

const WORDS_LINE1 = ["What", "Our", "Clients"];
const WORDS_LINE2 = ["Say", "About", "Us"];

function AnimatedWord({ word, delay, isGradient }) {
  return (
    <span
      style={{
        display: "inline-block",
        overflow: "hidden",
        verticalAlign: "bottom",
        marginRight: "0.28em",
      }}
    >
      <span
        style={{
          display: "inline-block",
          transform: "translateY(110%)",
          animation: `wordSlideUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards`,
          animationDelay: `${delay}s`,
          ...(isGradient
            ? {
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }
            : {}),
        }}
      >
        {word}
      </span>
    </span>
  );
}

function AnimatedHeading() {
  return (
    <>
      <style>{`
        @keyframes wordSlideUp {
          to { transform: translateY(0%); }
        }
        @keyframes underlineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(36px, 5.5vw, 80px)",
          fontWeight: 700,
          lineHeight: 1.1,
          color: "#111",
          letterSpacing: -2,
          marginBottom: 20,
        }}
      >
        <div>
          {WORDS_LINE1.map((word, i) => (
            <AnimatedWord key={word} word={word} delay={0.15 + i * 0.12} isGradient={false} />
          ))}
        </div>
        <div style={{ position: "relative", display: "inline-block" }}>
          {WORDS_LINE2.map((word, i) => (
            <AnimatedWord key={word} word={word} delay={0.55 + i * 0.12} isGradient={true} />
          ))}
          <span
            style={{
              display: "block",
              height: 4,
              borderRadius: 2,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              transformOrigin: "left center",
              transform: "scaleX(0)",
              animation: "underlineGrow 0.7s cubic-bezier(0.22,1,0.36,1) forwards 1.1s",
            }}
          />
        </div>
      </div>
    </>
  );
}

/* ── Responsive hook ── */
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideOutIndex, setSlideOutIndex] = useState(null);
  const timerRef = useRef(null);
  const windowWidth = useWindowWidth();

  /* breakpoints */
  const isMobile = windowWidth < 600;
  const isTablet = windowWidth >= 600 && windowWidth < 900;
  const isDesktop = windowWidth >= 900;

  /* card dimensions */
  const cardWidth = isMobile
    ? Math.min(windowWidth - 32, 420)
    : isTablet
    ? Math.min(windowWidth - 48, 500)
    : 560;

  const cardPad = isMobile ? "28px 24px 24px" : "36px 40px 32px";

  const total = reviews.length;

  useEffect(() => {
    const advance = () => {
      if (isAnimating) return;
      setIsAnimating(true);
      setSlideOutIndex(0);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % total);
        setSlideOutIndex(null);
        setIsAnimating(false);
      }, 700);
    };
    timerRef.current = setInterval(advance, 3200);
    return () => clearInterval(timerRef.current);
  }, [isAnimating, total]);

  const getCard = (offset) => reviews[(current + offset) % total];

  /* stack offsets — tighter on small screens */
  const positionStyles = isMobile
    ? [
        { zIndex: 4, transform: "translateY(0px) scale(1)", opacity: 1, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" },
        { zIndex: 3, transform: "translateY(10px) scale(0.97)", opacity: 0.7, boxShadow: "0 4px 16px rgba(0,0,0,0.07)" },
        { zIndex: 2, transform: "translateY(18px) scale(0.94)", opacity: 0.4, boxShadow: "none" },
        { zIndex: 1, transform: "translateY(24px) scale(0.91)", opacity: 0 },
      ]
    : [
        { zIndex: 4, transform: "translateY(0px) scale(1)", opacity: 1, boxShadow: "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)" },
        { zIndex: 3, transform: "translateY(14px) scale(0.96)", opacity: 0.85, boxShadow: "0 4px 16px rgba(0,0,0,0.07)" },
        { zIndex: 2, transform: "translateY(24px) scale(0.92)", opacity: 0.65, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" },
        { zIndex: 1, transform: "translateY(32px) scale(0.88)", opacity: 0 },
      ];

  /* stack wrapper height */
  const stackHeight = isMobile ? 320 : isTablet ? 380 : 420;

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#E8E4F0",
        display: "flex",
        flexDirection: isDesktop ? "row" : "column",
        alignItems: isDesktop ? "center" : "flex-start",
        justifyContent: "center",
        padding: isMobile
          ? "40px 16px 56px"
          : isTablet
          ? "48px 24px 64px"
          : "60px 48px 80px",
        position: "relative",
        overflow: "hidden",
        gap: isMobile ? 40 : isTablet ? 48 : 64,
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(0,0,0,0.04) 39px, rgba(0,0,0,0.04) 40px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(0,0,0,0.04) 39px, rgba(0,0,0,0.04) 40px)
          `,
          pointerEvents: "none",
        }}
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideOut {
          0%   { transform: translateY(0px) scale(1); opacity: 1; z-index: 5; }
          40%  { transform: translateY(-60px) scale(0.95) rotate(-3deg); opacity: 0.7; }
          100% { transform: translateY(320px) scale(0.85) rotate(6deg); opacity: 0; }
        }
        * { box-sizing: border-box; }
      `}</style>

      {/* ── LEFT — Text ── */}
      <div
        style={{
          flex: isDesktop ? 1 : "unset",
          position: "relative",
          maxWidth: isDesktop ? 520 : "100%",
          width: "100%",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "#667eea",
            textTransform: "uppercase",
            marginBottom: 16,
            opacity: 0,
            animation: "fadeSlideUp 0.6s ease forwards 0.05s",
          }}
        >
          Testimonials
        </div>

        <AnimatedHeading />

        {/* Subtitle */}
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(14px, 2vw, 17px)",
            color: "#666",
            fontWeight: 400,
            lineHeight: 1.65,
            marginBottom: 24,
            opacity: 0,
            animation: "fadeSlideUp 0.7s ease forwards 1.2s",
            maxWidth: 480,
          }}
        >
          Trusted by industry leaders to deliver outstanding results through innovative design and cutting-edge technology.
        </div>

        {/* Rating */}
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(13px, 1.8vw, 15px)",
            fontWeight: 600,
            color: "#111",
            letterSpacing: -0.3,
            opacity: 0,
            animation: "fadeSlideUp 0.7s ease forwards 1.35s",
          }}
        >
          4.9/5 Client Satisfaction Rating
        </div>
      </div>

      {/* ── RIGHT — Card Stack ── */}
      <div
        style={{
          position: "relative",
          width: cardWidth,
          maxWidth: "100%",
          flexShrink: 0,
          opacity: 0,
          animation: "fadeSlideUp 0.8s ease forwards 0.3s",
          alignSelf: isDesktop ? "center" : "center",
          zIndex: 1,
        }}
      >
        {/* Stack wrapper */}
        <div
          style={{
            position: "relative",
            width: cardWidth,
            maxWidth: "100%",
            height: stackHeight,
            marginTop: isMobile ? 32 : 60,
            marginBottom: 16,
          }}
        >
          {[0, 1, 2, 3].map((offset) => {
            const review = getCard(offset);
            const pos = positionStyles[offset];
            const isSliding = offset === slideOutIndex;

            return (
              <div
                key={`${current}-${offset}`}
                style={{
                  position: "absolute",
                  width: "100%",
                  background: "#fff",
                  borderRadius: isMobile ? 18 : 22,
                  padding: cardPad,
                  border: "1px solid rgba(0,0,0,0.07)",
                  transition:
                    "transform 0.72s cubic-bezier(0.77,0,0.18,1), opacity 0.72s ease",
                  animation: isSliding
                    ? "slideOut 0.72s cubic-bezier(0.77,0,0.18,1) forwards"
                    : "none",
                  ...pos,
                }}
              >
                {/* Clip top */}
                <div
                  style={{
                    position: "absolute",
                    top: -22,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 36,
                    height: 28,
                    background: "linear-gradient(180deg, #ccc 0%, #aaa 100%)",
                    borderRadius: "6px 6px 4px 4px",
                    clipPath: "polygon(10% 0%, 90% 0%, 100% 60%, 85% 100%, 15% 100%, 0% 60%)",
                    zIndex: 10,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: -10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 8,
                    height: 14,
                    background: "#888",
                    borderRadius: 2,
                    zIndex: 11,
                  }}
                />

                {/* Card content */}
                <div
                  style={{
                    fontSize: isMobile ? 12 : 14,
                    fontWeight: 600,
                    color: "#111",
                    marginBottom: 14,
                  }}
                >
                  {review.logo}
                </div>

                <div
                  style={{
                    fontSize: isMobile ? 22 : 28,
                    color: "#111",
                    lineHeight: 1,
                    marginBottom: 10,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  ❝❝
                </div>

                <div
                  style={{
                    fontSize: isMobile ? 13 : 14,
                    lineHeight: 1.75,
                    color: "#555",
                    marginBottom: isMobile ? 18 : 26,
                    /* clamp lines on mobile so card doesn't overflow */
                    display: "-webkit-box",
                    WebkitLineClamp: isMobile ? 5 : "unset",
                    WebkitBoxOrient: "vertical",
                    overflow: isMobile ? "hidden" : "visible",
                  }}
                >
                  {review.text}
                </div>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: isMobile ? 36 : 42,
                      height: isMobile ? 36 : 42,
                      borderRadius: "50%",
                      background: review.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: isMobile ? 11 : 13,
                      fontWeight: 700,
                      color: review.textColor,
                      flexShrink: 0,
                    }}
                  >
                    {review.initials}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: isMobile ? 13 : 14,
                        fontWeight: 600,
                        color: "#111",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {review.name}
                    </div>
                    <div
                      style={{
                        fontSize: isMobile ? 10 : 11,
                        color: "#aaa",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {review.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress dots */}
        {/* <div
          style={{
            display: "flex",
            gap: 6,
            justifyContent: "center",
            marginTop: 12,
          }}
        >
          {reviews.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === current ? 20 : 7,
                height: 7,
                borderRadius: 999,
                background:
                  i === current
                    ? "linear-gradient(135deg, #667eea, #764ba2)"
                    : "#ccc",
                transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                cursor: "pointer",
              }}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setSlideOutIndex(0);
                  setTimeout(() => {
                    setCurrent(i);
                    setSlideOutIndex(null);
                    setIsAnimating(false);
                  }, 700);
                }
              }}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}