import { useState } from "react";

const features = [
  {
    id: "01",
    title: "Expert Team",
    description:
      "Our experienced professionals deliver smart solutions with precision and creativity.",
    bg: "#dce8f5",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="13" r="7" stroke="#1a1a1a" strokeWidth="1.8"/>
        <path
          d="M5 35c0-7.732 6.268-14 14-14s14 6.268 14 14"
          stroke="#1a1a1a"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="25" cy="23" r="5" fill="#dce8f5" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M22.5 23l1.5 1.5 3-3" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Affordable Pricing",
    description:
      "Premium-quality service at competitive rates — no hidden costs, no surprises.",
    bg: "#f5e8c0",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="14" stroke="#1a1a1a" strokeWidth="1.8"/>
        <path
          d="M19 11v2.5M19 24.5V27"
          stroke="#1a1a1a"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path d="M14.5 15.5C14.5 13.5 16.5 12 19 12s4.5 1.5 4.5 3.5c0 4-9 3-9 7.5 0 2.5 2 4 4.5 4s4.5-1.5 4.5-3.5" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Trusted by Clients",
    description:
      "Highly rated for quality, reliability, and consistent performance excellence.",
    bg: "#e8d5f0",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect x="4" y="6" width="30" height="22" rx="3" stroke="#1a1a1a" strokeWidth="1.8" />
        <path d="M4 12h30" stroke="#1a1a1a" strokeWidth="1.8" />
        <path d="M8 9h2M12 9h2" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />
        <path d="M19 19l-1.5 3.2-3.5.5 2.5 2.4-.6 3.4L19 27l3.1 1.5-.6-3.4 2.5-2.4-3.5-.5z" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Quick Support",
    description:
      "We don't just deliver projects — we build lasting partnerships and ongoing growth.",
    bg: "#d5ecd5",
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path
          d="M6 10a4 4 0 014-4h18a4 4 0 014 4v12a4 4 0 01-4 4H14l-6 5V10z"
          stroke="#1a1a1a"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="13" cy="16" r="1.5" fill="#1a1a1a" />
        <circle cx="19" cy="16" r="1.5" fill="#1a1a1a" />
        <circle cx="25" cy="16" r="1.5" fill="#1a1a1a" />
      </svg>
    ),
  },
];

export default function WhyTrustUs() {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0ede8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          display: "flex",
          gap: 56,
          alignItems: "flex-start",
        }}
      >
        {/* Left heading */}
        <div style={{ minWidth: 200, paddingTop: 12 }}>
          <div style={{ marginBottom: 12 }}>
            <span
              style={{
                background: "#c8a84b",
                color: "#fff",
                fontSize: 12,
                fontFamily: "sans-serif",
                fontWeight: 600,
                borderRadius: 20,
                padding: "4px 12px",
                letterSpacing: 0.5,
              }}
            >
              Why us
            </span>
          </div>
          <h1
            style={{
              fontSize: 46,
              fontWeight: 700,
              lineHeight: 1.12,
              color: "#1a1a1a",
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            Why
            <br />
            clients
            <br />
            Trust us
          </h1>
        </div>

        {/* Right cards */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          {features.map((f, i) => (
            <div
              key={f.id}
              onMouseEnter={() => setHovered(f.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: f.bg,
                borderRadius: 14,
                padding: "14px 24px",
                display: "flex",
                alignItems: "center",
                gap: 18,
                cursor: "default",
                transform: hovered === f.id ? "translateX(6px) scale(1.01)" : "translateX(0) scale(1)",
                boxShadow: hovered === f.id
                  ? "0 8px 32px rgba(0,0,0,0.10)"
                  : "0 2px 8px rgba(0,0,0,0.04)",
                transition: "transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease",
                animation: `fadeSlideIn 0.5s ease both`,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {/* Icon box */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: "rgba(255,255,255,0.55)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: "1px solid rgba(0,0,0,0.07)",
                }}
              >
                {f.icon}
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    margin: "0 0 2px",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#1a1a1a",
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    margin: "0 0 6px",
                    fontSize: 13,
                    color: "#444",
                    lineHeight: 1.45,
                    fontFamily: "sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {f.description}
                </p>
                <span
                  style={{
                    fontSize: 11,
                    color: "#888",
                    fontFamily: "sans-serif",
                    fontWeight: 500,
                    letterSpacing: 0.5,
                  }}
                >
                  {f.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
