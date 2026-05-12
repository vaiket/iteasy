import { useState } from "react";

const items = [
  {
    title: "Who we are",
    content:
      "A technology company accelerating digital growth by leveraging custom software, AI integrations, cloud solutions, and data-driven applications, ensuring maximum visibility, stronger connections, and broader market reach.",
  },
  {
    title: "Our Mission",
    content:
      "We exist to empower businesses of every size to build authentic, lasting connections with their audiences - through smart strategy, honest storytelling, and measurable results that compound over time.",
  },
  {
    title: "Vision",
    content:
      "A world where every brand, regardless of size, has the tools and expertise to grow with purpose - creating value for customers, communities, and the businesses that serve them.",
  },
];

export default function BrandHero() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => setOpenIdx((prev) => (prev === idx ? -1 : idx));

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4rem 3rem",
        gap: "0",
        minHeight: "420px",
        backgroundColor: "#fff",
        flexWrap: "wrap",
      }}
    >
      <style>{`
        @keyframes upDown {
          0%, 100% {
            transform: translateY(0) rotate(-3deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
      `}</style>
      {/* Left: Heading */}
      <div style={{ flex: "0 0 auto", maxWidth: "420px", marginLeft: "200px" }}>
        <h1
          style={{
            fontFamily: "'GC Fodax Demo', sans-serif",
            fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
            fontWeight: 800,
            lineHeight: 1.12,
            color: "#111",
            letterSpacing: "-0.02em",
          }}
        >
          Helping you
          <br />
          manage,{" "}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "6px 18px",
              background: "#3DEAAC",
              borderRadius: "999px",
              fontSize: "0.85rem",
              fontWeight: 500,
              color: "#0a4a33",
              verticalAlign: "middle",
              cursor: "default",
              transition: "transform 0.2s",
              fontFamily: "'Inter', sans-serif",
              fontOpticalSizing: "auto",
              fontStyle: "normal",
              animation: "upDown 3s ease-in-out infinite",
            }}
          >
            {openIdx >= 0 ? items[openIdx].title : "Who we are"}
          </span>
          <br />
          build, &amp; grow
          <br />
          your brand
        </h1>
      </div>

      {/* Right: Stacked accordion card */}
      <div style={{ flex: "0 0 460px", position: "relative", marginRight: "200px" }}>
        {/* Stack shadow cards */}
        <div
          style={{
            position: "absolute",
            bottom: "-18px",
            left: "12px",
            right: "12px",
            height: "100%",
            background: "#fff",
            border: "0.5px solid #e5e5e5",
            borderRadius: "16px",
            opacity: 0.5,
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-9px",
            left: "6px",
            right: "6px",
            height: "100%",
            background: "#fff",
            border: "0.5px solid #e5e5e5",
            borderRadius: "16px",
            opacity: 0.75,
            zIndex: 1,
          }}
        />

        {/* Main accordion card */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            background: "#fff",
            border: "0.5px solid #ccc",
            borderRadius: "16px",
            padding: "1.5rem 1.5rem 0",
            overflow: "hidden",
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                borderTop: idx === 0 ? "none" : "0.5px solid #e5e5e5",
              }}
            >
              <div
                onClick={() => toggle(idx)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem 0",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "#111",
                    fontFamily: "'Inter', sans-serif",
                    fontOpticalSizing: "auto",
                    fontStyle: "normal",
                  }}
                >
                  {item.title}
                </span>
                <span
                  style={{
                    width: 20,
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    fontWeight: 300,
                    color: openIdx === idx ? "#111" : "#888",
                    transform: openIdx === idx ? "rotate(45deg)" : "none",
                    transition: "transform 0.3s, color 0.2s",
                    flexShrink: 0,
                    fontFamily: "'Inter', sans-serif",
                    fontOpticalSizing: "auto",
                    fontStyle: "normal",
                  }}
                >
                  +
                </span>
              </div>

              <div
                style={{
                  maxHeight: openIdx === idx ? "160px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
                  paddingBottom: openIdx === idx ? "1rem" : "0",
                }}
              >
                <p
                  style={{
                    fontSize: "0.84rem",
                    lineHeight: 1.65,
                    color: "#555",
                    fontFamily: "'Inter', sans-serif",
                    fontOpticalSizing: "auto",
                    fontStyle: "normal",
                  }}
                >
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
