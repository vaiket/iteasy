export default function HowItWorks() {
  const steps = [
    {
      tag: "Discussion",
      title: "Consultation & Initial Discussion",
      timeline: "Timeline — 1 days",
      num: "01",
      bg: "#EDE9FF",
      iconBg: "#D8D0FF",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect x="10" y="14" width="36" height="26" rx="5" stroke="#7C5CBF" strokeWidth="2" fill="none" />
          <path d="M18 34 L14 42 L26 36" stroke="#7C5CBF" strokeWidth="2" strokeLinejoin="round" fill="none" />
          <rect x="18" y="20" width="8" height="6" rx="1.5" stroke="#E88FAD" strokeWidth="1.5" fill="none" />
          <path d="M30 22 L38 22 M30 26 L35 26" stroke="#7C5CBF" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M42 10 L52 10 Q55 10 55 13 L55 22 Q55 25 52 25 L50 25 L50 29 L46 25 L42 25 Q39 25 39 22 L39 13 Q39 10 42 10Z" stroke="#7C5CBF" strokeWidth="1.5" fill="none" />
          <path d="M43 16 L51 16 M43 19 L48 19" stroke="#7C5CBF" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      tag: "Approach",
      title: "Design Experiences That Are Built With Precision",
      timeline: "Timeline — 3 days",
      num: "02",
      bg: "#FFF3DC",
      iconBg: "#FFE8B0",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="28" cy="34" r="18" stroke="#C4882A" strokeWidth="2" fill="none" />
          <path d="M28 20 L28 34 L38 34" stroke="#C4882A" strokeWidth="2" strokeLinecap="round" />
          <path d="M40 18 L50 10 M46 10 L50 10 L50 14" stroke="#C4882A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M44 22 C46 19 50 19 50 23 C50 27 44 29 44 29 C44 29 38 27 38 23 C38 19 42 19 44 22Z" stroke="#E88FAD" strokeWidth="1.5" fill="none" />
        </svg>
      ),
    },
    {
      tag: "Development",
      title: "Launch Strategic Projects, Driving Growth Forward",
      timeline: "Timeline — Depend on Project",
      num: "03",
      bg: "#DFFADF",
      iconBg: "#C0F0C0",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect x="10" y="14" width="40" height="30" rx="4" stroke="#2A8A4A" strokeWidth="2" fill="none" />
          <rect x="10" y="14" width="40" height="7" rx="4" stroke="#2A8A4A" strokeWidth="2" fill="none" />
          <circle cx="15" cy="17.5" r="1.5" fill="#2A8A4A" />
          <circle cx="20" cy="17.5" r="1.5" fill="#2A8A4A" />
          <circle cx="25" cy="17.5" r="1.5" fill="#2A8A4A" />
          <polyline points="16,36 24,28 30,32 38,22 46,26" stroke="#2A8A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <polyline points="42,22 46,22 46,26" stroke="#2A8A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <line x1="30" y1="44" x2="30" y2="50" stroke="#2A8A4A" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="50" x2="38" y2="50" stroke="#2A8A4A" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section style={s.outerSection}>
      <style>{`
        .hiw-row { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .hiw-row:hover { transform: translateX(4px); box-shadow: 0 4px 24px rgba(0,0,0,0.07) !important; }
      `}</style>
      <div style={s.innerContainer}>
        {/* Header */}
        <div style={s.header}>
          <div style={s.titleWrap}>
            <h2 style={s.title}>How it works</h2>
            <span style={s.badge}>Process</span>
          </div>
        </div>

        {/* Steps */}
        <div style={s.stepsWrap}>
          {steps.map((step, i) => (
            <div key={i} className="hiw-row" style={{ ...s.row, backgroundColor: step.bg }}>
              {/* Icon box */}
              <div style={{ ...s.iconBox, backgroundColor: step.iconBg }}>
                {step.icon}
              </div>

              {/* Content */}
              <div style={s.content}>
                <span style={s.tag}>{step.tag}</span>
                <h3 style={s.stepTitle}>{step.title}</h3>
                <p style={s.timeline}>{step.timeline}</p>
              </div>

              {/* Number */}
              <div style={s.numCircle}>{step.num}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  outerSection: {
    width: "100%",
    background: "#F2EFF8",
    overflowX: "hidden",
  },
  innerContainer: {
    padding: "clamp(3rem, 8vw, 5rem) clamp(1.5rem, 4vw, 2rem)",
    maxWidth: "clamp(20rem, 90vw, 87.5rem)",
    margin: "0 auto",
    width: "100%",
    minWidth: "280px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "clamp(1rem, 3vw, 1.5rem)",
    flexWrap: "wrap",
    gap: "clamp(1rem, 3vw, 1rem)",
  },
  titleWrap: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(0.75rem, 2vw, 0.75rem)",
    flexWrap: "wrap",
  },
  title: {
    fontFamily: "Bricolage Grotesque, sans-serif",
    fontSize: "clamp(1.5rem, 4vw, 2rem)",
    fontWeight: 700,
    color: "#111",
    margin: 0,
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  badge: {
    backgroundColor: "#F5C842",
    color: "#5A3E00",
    fontSize: "clamp(0.75rem, 2vw, 0.8125rem)",
    fontWeight: 600,
    padding: "clamp(0.25rem, 1vw, 0.25rem) clamp(0.875rem, 3vw, 0.875rem)",
    borderRadius: "clamp(1rem, 3vw, 1.25rem)",
    fontFamily: "'Inter', sans-serif",
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    animation: "upDown 3s ease-in-out infinite",
    whiteSpace: "nowrap",
  },
  stepLabel: {
    fontSize: "clamp(0.7rem, 2vw, 0.75rem)",
    color: "#999",
    letterSpacing: "0.05em",
    fontFamily: "'Inter', sans-serif",
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    whiteSpace: "nowrap",
  },
  stepsWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "clamp(1.5rem, 4vw, 1.875rem)",
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(1.5rem, 4vw, 2.5rem)",
    borderRadius: "clamp(1rem, 3vw, 1rem)",
    padding: "clamp(1.5rem, 4vw, 1.875rem) clamp(1rem, 3vw, 1.5rem)",
    overflow: "hidden",
    border: "clamp(0.0625rem, 0.2vw, 0.0625rem) solid rgba(0,0,0,0.06)",
    cursor: "default",
    backgroundColor: "#ffffff",
    flexWrap: "wrap",
  },
  iconBox: {
    width: "clamp(5rem, 12vw, 7.5rem)",
    minWidth: "clamp(5rem, 12vw, 7.5rem)",
    height: "clamp(6rem, 14vw, 8.75rem)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "clamp(0.875rem, 2vw, 0.875rem) 0 0 clamp(0.875rem, 2vw, 0.875rem)",
    flexShrink: 0,
  },
  content: {
    flex: "1 1 clamp(10rem, 30vw, 15rem)",
    padding: "clamp(1rem, 3vw, 1.25rem) 0",
    minWidth: "0",
  },
  tag: {
    display: "inline-block",
    fontSize: "clamp(0.625rem, 2vw, 0.6875rem)",
    fontWeight: 600,
    color: "#555",
    backgroundColor: "rgba(255,255,255,0.7)",
    border: "clamp(0.0625rem, 0.2vw, 0.0625rem) solid rgba(0,0,0,0.12)",
    padding: "clamp(0.125rem, 0.5vw, 0.125rem) clamp(0.5rem, 2vw, 0.625rem)",
    borderRadius: "clamp(0.75rem, 2vw, 0.75rem)",
    marginBottom: "clamp(0.5rem, 2vw, 0.5rem)",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    fontFamily: "'Inter', sans-serif",
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    whiteSpace: "nowrap",
  },
  stepTitle: {
    fontFamily: "Bricolage Grotesque, sans-serif",
    fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
    fontWeight: 700,
    color: "#111",
    margin: "0 0 clamp(0.375rem, 1.5vw, 0.375rem)",
    lineHeight: 1.3,
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  timeline: {
    fontSize: "clamp(0.75rem, 2vw, 0.8125rem)",
    color: "#666",
    margin: 0,
    fontFamily: "'Inter', sans-serif",
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  numCircle: {
    width: "clamp(2.5rem, 5vw, 3.25rem)",
    height: "clamp(2.5rem, 5vw, 3.25rem)",
    borderRadius: "50%",
    border: "clamp(0.125rem, 0.3vw, 0.125rem) solid #111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "clamp(0.875rem, 2vw, 0.9375rem)",
    fontWeight: 600,
    color: "#111",
    flexShrink: 0,
    backgroundColor: "rgba(255,255,255,0.6)",
  },
};
