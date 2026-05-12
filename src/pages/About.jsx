import { useState } from "react";
import styles from "./About.module.css";

/* ═══════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════ */
export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        img { max-width: 100%; display: block; }

        /* Ghost cards */
        .hero-ghost3 {
          position: absolute;
          top: clamp(2.5rem,6vw,3.75rem);
          left: clamp(2.5rem,6vw,4.25rem);
          right: clamp(2.5rem,6vw,4.25rem);
          bottom: clamp(1.5rem,4vw,2.125rem);
          border: 1px solid #e8e8e8;
          border-radius: clamp(1rem,3vw,1.25rem);
          background: #fff;
          z-index: 0;
        }
        .hero-ghost2 {
          position: absolute;
          top: clamp(2.25rem,5.5vw,3.375rem);
          left: clamp(2rem,5vw,3.25rem);
          right: clamp(2rem,5vw,3.25rem);
          bottom: clamp(1.25rem,3.5vw,1.75rem);
          border: 1px solid #ddd;
          border-radius: clamp(1rem,3vw,1.25rem);
          background: #fff;
          z-index: 0;
        }
        .hero-ghost1 {
          position: absolute;
          top: clamp(2rem,5vw,3rem);
          left: clamp(1.5rem,4vw,2.375rem);
          right: clamp(1.5rem,4vw,2.375rem);
          bottom: clamp(1rem,3vw,1.375rem);
          border: none;
          border-radius: clamp(1rem,3vw,1.25rem);
          background: transparent;
          z-index: 1;
        }

        /* Accordion */
        .acc-row { transition: background 0.15s; cursor: pointer; }
        .acc-row:hover { background: rgba(0,0,0,0.02) !important; }
        .acc-icon {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
          display: inline-block;
          font-size: 20px;
          font-weight: 300;
          color: #111;
          flex-shrink: 0;
          line-height: 1;
        }
        .acc-body { overflow: hidden; transition: max-height 0.35s ease, opacity 0.3s ease; }

        /* WeBuildBrands image */
        .team-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: clamp(1rem,3vw,1.25rem);
        }

        /* Responsive: stack WeBuildBrands & WhyTrustUs on small screens */
        @media (max-width: 700px) {
          .wb-inner { flex-direction: column !important; }
          .wb-imgwrap {
            width: 100% !important;
            min-width: unset !important;
            flex: unset !important;
            height: clamp(14rem,60vw,22rem) !important;
          }
          .wb-right { min-width: unset !important; flex: unset !important; width: 100% !important; }
          .wts-inner { flex-direction: column !important; }
          .wts-left { position: static !important; width: 100% !important; flex: unset !important; }
          .wts-cards { width: 100% !important; flex: unset !important; min-width: unset !important; }
          .qs-statsbox { flex-direction: column !important; align-items: flex-start !important; gap: 1.5rem !important; padding: 1.5rem !important; }
          .qs-statitem { gap: 1rem !important; }
          .qs-slash { display: none !important; }
        }

        @media (max-width: 480px) {
          .hero-card-inner { flex-direction: column !important; gap: 0.5rem !important; }
          .wts-card { flex-direction: column !important; }
          .wts-iconwrap { width: 3rem !important; height: 3rem !important; }
        }
      `}</style>

      <section style={{ width: "100%", background: "#F2EFF8", overflowX: "hidden" }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          maxWidth: "clamp(20rem,90vw,87.5rem)",
          margin: "0 auto",
          padding: "clamp(4rem,6vw,5rem) clamp(1.5rem,4vw,2rem) clamp(2rem,5vw,3rem)",
          position: "relative",
        }}>
          {/* <div className="hero-ghost3" /> */}
          {/* <div className="hero-ghost2" /> */}
          <div className="hero-ghost1" />

          {/* Main card */}
          <div style={{
            position: "relative",
            zIndex: 2,
            border: "1px solid #ccc",
            borderRadius: "clamp(1rem,3vw,1.25rem)",
            backgroundColor: "#fff",
            padding: "clamp(2.5rem,5vw,3rem) clamp(1.25rem,4vw,3rem) clamp(1.25rem,4vw,1.75rem)",
          }}>
            <div
              className="hero-card-inner"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "clamp(0.5rem,2vw,1rem)",
                marginBottom: "clamp(0.5rem,2vw,0.75rem)",
                flexWrap: "wrap",
              }}
            >
              <div style={{
                backgroundColor: "#4DD9AC",
                color: "#fff",
                fontSize: "clamp(0.7rem,2vw,0.8125rem)",
                fontWeight: 600,
                padding: "clamp(0.3rem,1vw,0.3125rem) clamp(0.875rem,3vw,1rem)",
                borderRadius: "clamp(1rem,3vw,1.25rem)",
                fontFamily: "'DM Sans', sans-serif",
                whiteSpace: "nowrap",
              }}>
                About us
              </div>
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px,6vw,64px)",
                fontWeight: 700,
                color: "#111",
                margin: 0,
                lineHeight: 1.1,
                textAlign: "center",
              }}>
                We're PixelStack
              </h1>
            </div>
            <p style={{
              fontSize: "clamp(0.875rem,2.5vw,1.125rem)",
              color: "#777",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.6,
              maxWidth: "60ch",
              marginInline: "auto",
            }}>
              We craft meaningful digital experiences that connect brands with people
            </p>
          </div>
        </div>
      </section>

      <WeBuildBrands />
      <QuoteStats />
      <WhyTrustUs />
    </>
  );
}

/* ═══════════════════════════════════════
   WE BUILD BRANDS
═══════════════════════════════════════ */
const items = [
  {
    label: "Who We Are",
    text: "A digital agency drives brand growth through advertising, digital campaigns, customer engagement, and strategic promotions to maximize reach.",
  },
  {
    label: "Our Mission",
    text: "Our mission is to deliver innovative digital solutions that inspire growth, enhance engagement, and elevate brands globally.",
  },
  {
    label: "Vision",
    text: "Our vision is to shape the future of digital innovation by empowering brands to lead with creativity and technology.",
  },
];

function WeBuildBrands() {
  const [open, setOpen] = useState(0);

  return (
    <section style={{ width: "100%", background: "#F2EFF8", overflowX: "hidden" }}>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        maxWidth: "clamp(20rem,90vw,87.5rem)",
        margin: "0 auto",
        padding: "clamp(3rem,6vw,5rem) clamp(1.5rem,4vw,2rem) clamp(4rem,8vw,5rem)",
      }}>
        <div className="wb-inner" style={{
          display: "flex",
          gap: "clamp(2rem,5vw,4rem)",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}>

          {/* Image */}
          <div
            className="wb-imgwrap"
            style={{
              flex: "1 1 clamp(15rem,40vw,30rem)",
              minWidth: "clamp(15rem,40vw,30rem)",
              height: "clamp(15rem,40vw,30rem)",
              borderRadius: "clamp(1rem,3vw,1.25rem)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src="/images/aboutus.jpg"
              alt="About Us"
              className="team-img"
            />
          </div>

          {/* Right content */}
          <div
            className="wb-right"
            style={{ flex: "1 1 clamp(16rem,50vw,37.5rem)", minWidth: "clamp(16rem,50vw,37.5rem)" }}
          >
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "clamp(0.75rem,2vw,0.75rem)",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}>
              <span style={{ fontSize: "clamp(0.75rem,2vw,0.8125rem)", color: "#999", fontWeight: 500 }}>
                20,000+ clients trust us
              </span>
              <span style={{
                backgroundColor: "#F7AADD",
                color: "#7A1A40",
                fontSize: "clamp(0.75rem,2vw,0.8125rem)",
                fontWeight: 600,
                padding: "clamp(0.3rem,1vw,0.3125rem) clamp(0.875rem,3vw,1rem)",
                borderRadius: "clamp(1rem,3vw,1.25rem)",
                whiteSpace: "nowrap",
              }}>
                Since 2021
              </span>
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem,5vw,3.25rem)",
              fontWeight: 800,
              color: "#111",
              margin: "0 0 clamp(0.5rem,2vw,0.5rem)",
              lineHeight: 1.1,
            }}>
              We build brands<br />that grow
            </h2>

            <div style={{ marginTop: "clamp(0.5rem,2vw,0.5rem)" }}>
              {items.map((item, i) => (
                <div key={i}>
                  <div style={{ height: 1, backgroundColor: "#e0e0e0" }} />
                  <div
                    className="acc-row"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "clamp(0.875rem,2.5vw,1.125rem) clamp(0.25rem,1vw,0.25rem)",
                      gap: "clamp(0.75rem,2vw,1rem)",
                    }}
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span style={{ fontSize: "clamp(0.9rem,2vw,1rem)", fontWeight: 600, color: "#111" }}>
                      {item.label}
                    </span>
                    <span
                      className="acc-icon"
                      style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      {open === i ? "×" : "+"}
                    </span>
                  </div>
                  <div
                    className="acc-body"
                    style={{
                      maxHeight: open === i ? "120px" : "0px",
                      opacity: open === i ? 1 : 0,
                    }}
                  >
                    <p style={{
                      fontSize: "clamp(0.8125rem,2vw,0.875rem)",
                      color: "#555",
                      lineHeight: 1.7,
                      margin: "0 0 clamp(0.75rem,2vw,1rem)",
                      padding: "0 clamp(0.25rem,1vw,0.25rem)",
                    }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
              <div style={{ height: 1, backgroundColor: "#e0e0e0" }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   QUOTE STATS
═══════════════════════════════════════ */
function QuoteStats() {
  const stats = [
    { val: "200+", label: "Projects Delivered" },
    { val: "98k", label: "Lines of Code Written" },
    { val: "4.9", label: "Avg Client Rating" },
  ];

  return (
    <section style={{ width: "100%", background: "#F2EFF8", overflowX: "hidden" }}>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        maxWidth: "clamp(20rem,90vw,75rem)",
        margin: "0 auto",
        padding: "clamp(3rem,6vw,4rem) clamp(1.5rem,4vw,3rem) clamp(3rem,6vw,4rem)",
        textAlign: "center",
        boxSizing: "border-box",
      }}>

        {/* Quote */}
        <div style={{ maxWidth: "clamp(20rem,60vw,41.25rem)", margin: "0 auto clamp(2rem,5vw,3rem)" }}>
          <div style={{
            width: "clamp(2rem,4vw,2.75rem)",
            height: "clamp(2rem,4vw,2.75rem)",
            borderRadius: "50%",
            backgroundColor: "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto clamp(1rem,3vw,1.25rem)",
            flexShrink: 0,
          }}>
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
              <path d="M0 11C0 4 3 1 9 0L10 2C6 3 4 6 4 8.5H8V18H0V11Z" fill="#fff"/>
              <path d="M12 11C12 4 15 1 21 0L22 2C18 3 16 6 16 8.5H20V18H12V11Z" fill="#fff"/>
            </svg>
          </div>
          <blockquote style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(0.95rem,2.5vw,1.375rem)",
            fontStyle: "italic",
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.55,
            margin: "0 0 clamp(0.875rem,2vw,0.875rem)",
          }}>
            "At our core, we engineer digital solutions that empower businesses to scale, innovate, and lead in the tech-driven world."
          </blockquote>
          <p style={{ fontSize: "clamp(0.75rem,2vw,0.8125rem)", color: "#999", margin: 0, fontWeight: 500 }}>
            Martin Eric, CEO
          </p>
        </div>

        {/* Stats */}
        <div
          className={styles['qs-statsbox']}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            border: "1px solid #ddd",
            borderRadius: "clamp(1rem,3vw,1.25rem)",
            padding: "clamp(1.5rem,4vw,3rem) clamp(1rem,5vw,5rem)",
            width: "100%",
            boxSizing: "border-box",
            margin: "0 auto",
            flexWrap: "wrap",
            gap: "clamp(1rem,3vw,2rem)",
          }}
        >
          {stats.map((st, i) => (
            <div
              key={i}
              className={styles['qs-statitem']}
              style={{ display: "flex", alignItems: "center", gap: "clamp(1rem,3vw,3rem)" }}
            >
              {i > 0 && (
                <span
                  className={styles['qs-slash']}
                  style={{ fontSize: "clamp(1.5rem,3vw,2.5rem)", color: "#ccc", fontWeight: 300, lineHeight: 1 }}
                >
                  /
                </span>
              )}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.375rem" }}>
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem,5vw,4.5rem)",
                  fontWeight: 800,
                  color: "#111",
                  lineHeight: 1,
                }}>
                  {st.val}
                </span>
                <span style={{ fontSize: "clamp(0.75rem,1.5vw,0.9375rem)", color: "#888", fontWeight: 500 }}>
                  {st.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   WHY TRUST US
═══════════════════════════════════════ */
function WhyTrustUs() {
  const reasons = [
    {
      num: "01",
      title: "Expert Engineering Team",
      desc: "Our senior developers and architects deliver robust, scalable IT solutions with precision and deep technical expertise.",
      bg: "#D6E8FF",
      iconColor: "#2A6CBF",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="14" r="7" stroke="#2A6CBF" strokeWidth="1.8" fill="none"/>
          <path d="M6 40 C6 28 38 28 38 40" stroke="#2A6CBF" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          <circle cx="34" cy="12" r="4" stroke="#2A6CBF" strokeWidth="1.5" strokeDasharray="2 2" fill="none"/>
          <path d="M32 20 L36 16" stroke="#2A6CBF" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      num: "02",
      title: "Transparent & Affordable Pricing",
      desc: "Enterprise-grade IT services at competitive rates — clear contracts, no hidden fees, no surprise invoices.",
      bg: "#FFF0C2",
      iconColor: "#B8860B",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="14" stroke="#B8860B" strokeWidth="1.8" fill="none"/>
          <path d="M22 10 L22 34 M17 15 C17 12 17 10 22 10 C27 10 27 15 22 17 C17 19 17 24 22 24 C27 24 27 20 27 20" stroke="#B8860B" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M20 34 L24 34" stroke="#B8860B" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      num: "03",
      title: "Trusted by 500+ Businesses",
      desc: "From startups to enterprises, our IT solutions are consistently rated 4.9★ for quality, reliability, and on-time delivery.",
      bg: "#FFD6EC",
      iconColor: "#C0006A",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect x="6" y="10" width="32" height="24" rx="4" stroke="#C0006A" strokeWidth="1.8" fill="none"/>
          <rect x="6" y="10" width="32" height="6" rx="4" stroke="#C0006A" strokeWidth="1.8" fill="none"/>
          <circle cx="10" cy="13" r="1.2" fill="#C0006A"/>
          <circle cx="14" cy="13" r="1.2" fill="#C0006A"/>
          <polygon points="19,22 19,29 25,25.5" stroke="#C0006A" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      num: "04",
      title: "24/7 Technical Support",
      desc: "Round-the-clock support with guaranteed SLAs — we don't just launch, we maintain and optimize your systems continuously.",
      bg: "#C8F5E0",
      iconColor: "#0A7A4A",
      icon: (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M8 14 Q8 6 16 6 L28 6 Q36 6 36 14 L36 24 Q36 32 28 32 L24 32 L18 38 L18 32 L16 32 Q8 32 8 24 Z" stroke="#0A7A4A" strokeWidth="1.8" fill="none"/>
          <path d="M14 16 L30 16 M14 23 L24 23" stroke="#0A7A4A" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section style={{ width: "100%", background: "#F2EFF8", overflowX: "hidden" }}>
      <div style={{
        fontFamily: "'DM Sans', sans-serif",
        maxWidth: "clamp(20rem,90vw,87.5rem)",
        margin: "0 auto",
        padding: "0 clamp(1.5rem,5vw,3rem) clamp(4rem,8vw,5rem)",
      }}>
        <div
          className="wts-inner"
          style={{
            display: "flex",
            gap: "clamp(2rem,5vw,4rem)",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >

          {/* Left sticky */}
          <div
            className="wts-left"
            style={{
              flex: "1 1 clamp(12rem,30vw,13.75rem)",
              position: "sticky",
              top: "clamp(2rem,5vw,2.5rem)",
              paddingTop: "clamp(0.5rem,2vw,0.5rem)",
              minWidth: "clamp(12rem,30vw,13.75rem)",
            }}
          >
            <span style={{
              display: "inline-block",
              backgroundColor: "#F5C842",
              color: "#5A3E00",
              fontSize: "clamp(0.75rem,2vw,0.8125rem)",
              fontWeight: 600,
              padding: "clamp(0.3rem,1vw,0.3125rem) clamp(0.875rem,3vw,1rem)",
              borderRadius: "clamp(1rem,3vw,1.25rem)",
              marginBottom: "clamp(1rem,3vw,1rem)",
              whiteSpace: "nowrap",
            }}>
              Why us
            </span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem,4vw,3.25rem)",
              fontWeight: 800,
              color: "#111",
              margin: 0,
              lineHeight: 1.1,
            }}>
              Why<br />clients<br />Trust us
            </h2>
          </div>

          {/* Cards */}
          <div
            className="wts-cards"
            style={{
              flex: "1 1 clamp(16rem,50vw,37.5rem)",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(0.75rem,2vw,0.875rem)",
              minWidth: "clamp(16rem,50vw,37.5rem)",
            }}
          >
            {reasons.map((r, i) => (
              <div
                key={i}
                className="wts-card"
                style={{
                  display: "flex",
                  gap: "clamp(0.875rem,3vw,1.25rem)",
                  alignItems: "flex-start",
                  borderRadius: "clamp(1rem,3vw,1rem)",
                  padding: "clamp(1.25rem,4vw,1.5rem) clamp(1.25rem,4vw,1.75rem)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  backgroundColor: r.bg,
                  flexWrap: "nowrap",
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <div
                    className="wts-iconwrap"
                    style={{
                      width: "clamp(2.75rem,5vw,4.25rem)",
                      height: "clamp(2.75rem,5vw,4.25rem)",
                      borderRadius: "clamp(0.875rem,2vw,0.875rem)",
                      backgroundColor: "rgba(255,255,255,0.55)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: `1.5px solid ${r.iconColor}30`,
                      flexShrink: 0,
                    }}
                  >
                    {r.icon}
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingTop: "clamp(0.2rem,1vw,0.25rem)" }}>
                  <h4 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(0.95rem,2vw,1.125rem)",
                    fontWeight: 700,
                    margin: "0 0 clamp(0.4rem,2vw,0.5rem)",
                    lineHeight: 1.2,
                    color: r.iconColor,
                    wordBreak: "break-word",
                  }}>
                    {r.title}
                  </h4>
                  <p style={{
                    fontSize: "clamp(0.75rem,2vw,0.8125rem)",
                    color: "#444",
                    lineHeight: 1.65,
                    margin: "0 0 clamp(0.5rem,2vw,0.75rem)",
                    wordBreak: "break-word",
                  }}>
                    {r.desc}
                  </p>
                  <span style={{
                    fontSize: "clamp(0.7rem,1.5vw,0.75rem)",
                    fontWeight: 700,
                    opacity: 0.5,
                    letterSpacing: "0.04em",
                    color: r.iconColor,
                  }}>
                    {r.num}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}