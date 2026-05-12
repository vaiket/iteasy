import React, { useState, useEffect } from "react";
import Navbar from './Navbar';

// ─── DATA ────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "TechFlow — Branding Design",
    date: "15 Sep, 2022",
    tags: ["BRAND", "DESIGN"],
    category: "Branding, Design",
    client: "Darshan Patel",
    description:
      "The Branding & Design 'TechFlow' project aims to establish a strong visual identity through creative logo design, color psychology, and modern typography, enhancing brand recognition, audience engagement, and consistent communication across digital, print, and social media platforms.",
    coverImage: "/images/b4.jpg",
    images: [
      "/images/b4.jpg",
      "/images/b1.jpg",
      "/images/branding.png",
      "/images/b4.png",
    ],
    challengeTitle: "Navigating Design, Communication, and Consistency Issues in Our Branding Project Journey",
    challengeDesc: "We faced challenges in aligning client vision, meeting tight deadlines, ensuring design consistency, managing feedback, and maintaining creativity while delivering a cohesive and impactful brand identity.",
    conclusionTitle: "Delivering a Strong, Cohesive, and Memorable Branding & Design Identity",
    conclusionDesc: "The final result delivers a strong visual identity with a refined logo, harmonious colors, and cohesive design, effectively representing brand's values and ensuring consistency across all platforms.",
    similarProjects: [2, 3],
  },
  {
    id: 2,
    title: "Nexus — Mobile App Design",
    date: "09 Aug, 2023",
    tags: ["MOBILE", "UI/UX"],
    category: "Mobile, UI/UX",
    client: "Rinkal Mahida",
    description:
      "The Nexus Mobile App Design project focuses on crafting an intuitive user experience with pixel-perfect UI components, seamless navigation flows, and a modern aesthetic that elevates user engagement and retention across iOS and Android platforms.",
    coverImage: "/images/mobile-app01.png",
    images: [
      "/images/mobile-app01.png",
      "/images/mobile-app2.png",
      "/images/mobile-app3.png",
      "/images/nexus-4.jpg",
    ],
    challengeTitle: "Balancing Feature Richness with Simplicity in Mobile UI Design",
    challengeDesc: "The primary challenge was designing a feature-rich application that remains intuitive and uncluttered. We had to iterate through multiple prototypes to find the perfect balance between functionality and clean visual design.",
    conclusionTitle: "A Fluid, Intuitive Mobile Experience That Users Love",
    conclusionDesc: "The final app design achieved a 4.8-star rating in user testing, with users praising the intuitive navigation and beautiful visual design. The consistent design system ensures scalability for future features.",
    similarProjects: [1, 3],
  },
  {
    id: 3,
    title: "Prism — Web Platform UI",
    date: "22 Jul, 2024",
    tags: ["WEB", "UI/UX"],
    category: "Web, UI/UX",
    client: "Hitesh Patel",
    description:
      "Prism Web Platform UI is a comprehensive dashboard design project aimed at transforming complex data visualization into clear, actionable insights for enterprise users through thoughtful information architecture and interactive components.",
    coverImage: "/images/ui9.jpeg",
    images: [
      "/images/ui9.jpeg",
      "/images/ui3.jpeg",
      "/images/ui6.jpeg",
      "/images/ui8.jpeg",
    ],
    challengeTitle: "Simplifying Complex Data Without Losing Depth or Accuracy",
    challengeDesc: "Enterprise dashboards often overwhelm users with data. Our challenge was designing a system that progressively reveals complexity — starting simple but allowing power users to drill into granular details seamlessly.",
    conclusionTitle: "An Enterprise Dashboard That Feels Consumer-Grade",
    conclusionDesc: "The final platform reduced user onboarding time by 40% and increased daily active usage by 65%. The clean, purposeful design made complex analytics accessible to non-technical stakeholders.",
    similarProjects: [1, 2],
  },
];

// ─── GLOBAL RESPONSIVE STYLES ─────────────────────────────────────────
const globalStyles = `
  * {
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
    display: block;
  }
  .portfolio-root {
    overflow-x: hidden;
  }
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 350px), 1fr));
    gap: clamp(16px, 3vw, 32px);
  }
  .similar-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 400px), 1fr));
    gap: 14px;
  }
  .meta-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 200px), 1fr));
    gap: 16px;
  }
  .detail-hero-img {
    width: 100%;
    height: clamp(220px, 45vw, 600px);
    object-fit: cover;
    display: block;
  }
  .detail-sub-img {
    width: 100%;
    height: clamp(180px, 35vw, 450px);
    object-fit: cover;
    display: block;
  }
  .card-img {
    width: 100%;
    height: clamp(200px, 30vw, 320px);
    object-fit: cover;
    display: block;
  }
  .page-pad {
    padding: clamp(70px, 6vw, 100px) clamp(16px, 4vw, 40px) clamp(40px, 4vw, 60px);
    max-width: 1400px;
    margin: 0 auto;
  }
  .detail-pad {
    padding: clamp(70px, 6vw, 100px) clamp(16px, 4vw, 40px) clamp(40px, 4vw, 60px);
    max-width: 1200px;
    margin: 0 auto;
  }
  .home-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: clamp(32px, 5vw, 60px);
  }
  .home-header-btn {
    white-space: nowrap;
    align-self: flex-start;
  }
  @media (max-width: 480px) {
    .home-header {
      flex-direction: column;
    }
    .home-header-btn {
      width: 100%;
      text-align: center;
    }
    .tag-pill {
      font-size: 9px !important;
      padding: 3px 8px !important;
    }
  }
`;

// ─── TAG PILL COMPONENT ─────────────────────────────────────────────────────────
function TagPill({ label }) {
  return (
    <span
      className="tag-pill"
      style={{
        background: "#000",
        color: "#fff",
        fontSize: 10,
        fontWeight: 600,
        padding: "4px 10px",
        borderRadius: 20,
        letterSpacing: 0.6,
        whiteSpace: "nowrap",
        cursor: "default",
        transition: "all 0.3s ease",
        border: "1px solid #000",
      }}
      onMouseEnter={(e) => {
        e.target.style.background = "#fff";
        e.target.style.color = "#000";
        e.target.style.transform = "translateY(-1px)";
        e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "#000";
        e.target.style.color = "#fff";
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "none";
      }}
    >
      {label}
    </span>
  );
}

// ─── PROJECT CARD COMPONENT ─────────────────────────────────────────────────────
function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "pointer",
        borderRadius: 20,
        overflow: "hidden",
        background: "#fff",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.15)"
          : "0 8px 30px rgba(0,0,0,0.08)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered
          ? "translateY(-8px) scale(1.02)"
          : "translateY(0) scale(1)",
        width: "100%",
      }}
    >
      {/* Image Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          background: "#f5f5f5",
          lineHeight: 0,
        }}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          className="card-img"
          style={{
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered
              ? "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)"
              : "transparent",
            transition: "background 0.4s ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            zIndex: 2,
            maxWidth: "calc(100% - 32px)",
            justifyContent: "flex-end",
          }}
        >
          {project.tags.map((t) => (
            <TagPill key={t} label={t} />
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div style={{ padding: "16px 20px 20px" }}>
        <p
          style={{
            margin: "0 0 8px 0",
            fontSize: "clamp(13px, 2vw, 16px)",
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.4,
          }}
        >
          {project.title}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0, fontSize: 12, color: "#888", fontWeight: 500 }}>
            {project.date}
          </p>
          <span
            style={{
              fontSize: 20,
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.3s ease",
            }}
          >
            →
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── SECTION BLOCK COMPONENT ──────────────────────────────────────────────
function SectionBlock({ label, number, title, text }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span
          style={{
            fontSize: "clamp(12px, 1.5vw, 16px)",
            fontWeight: 800,
            color: "#bbb",
            letterSpacing: 1.2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
        <span style={{ fontSize: 17, color: "#ccc", fontWeight: 500 }}>
          [{number}]
        </span>
      </div>
      <h2
        style={{
          margin: "0 0 20px",
          fontSize: "clamp(22px, 4vw, 40px)",
          fontWeight: 800,
          color: "#111",
          lineHeight: 1.3,
          wordBreak: "break-word",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          margin: 0,
          fontSize: "clamp(15px, 2vw, 19px)",
          color: "#777",
          lineHeight: 1.8,
          maxWidth: 800,
        }}
      >
        {text}
      </p>
    </div>
  );
}

// ─── GRADIENT TEXT STYLE ──────────────────────────────────────────────────
const gradientText = {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

// ─── BADGE STYLE ──────────────────────────────────────────────────────────
const badgeStyle = {
  display: "inline-block",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  color: "#fff",
  fontSize: 12,
  fontWeight: 700,
  padding: "8px 20px",
  borderRadius: 30,
  letterSpacing: 1,
  marginBottom: 20,
  textTransform: "uppercase",
};

// ─── HOME PAGE ────────────────────────────────────────────────────────
function HomePage({ onAllProjects, onHeroProjectClick }) {
  const featured = projects.slice(0, 4);

  return (
    <div
      className="portfolio-root"
      style={{
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        background: "#F2EFF8",
        minHeight: "100vh",
      }}
    >
      <div className="page-pad">
        {/* Header */}
        <div className="home-header">
          <div style={{ flex: 1, minWidth: 0 }}>
            <span style={badgeStyle}>Our Portfolio</span>
            <h1
              style={{
                margin: "0 0 16px 0",
                fontSize: "clamp(28px, 5vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#111",
                letterSpacing: -1,
                wordBreak: "break-word",
              }}
            >
              Crafting Digital
              <br />
              <span style={gradientText}>Experiences</span>
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(14px, 2vw, 18px)",
                color: "#666",
                maxWidth: 500,
                lineHeight: 1.6,
              }}
            >
              Explore our latest projects that blend creativity with functionality
            </p>
          </div>

          <div className="home-header-btn">
            <button
              onClick={onAllProjects}
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#fff",
                border: "none",
                padding: "14px 32px",
                borderRadius: 50,
                fontSize: "clamp(13px, 1.5vw, 15px)",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 30px rgba(102, 126, 234, 0.3)",
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 12px 40px rgba(102, 126, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 30px rgba(102, 126, 234, 0.3)";
              }}
            >
              View All Projects →
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="portfolio-grid">
          {featured.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onClick={() => onHeroProjectClick(p)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── GALLERY PAGE ─────────────────────────────────────────────────────
function GalleryPage({ onProjectClick, onBackHome }) {
  return (
    <>
      <Navbar />
      <div
        className="portfolio-root"
        style={{
          fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
          background: "linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)",
          minHeight: "100vh",
        }}
      >
        <div className="page-pad">
          {/* Header */}
          <div style={{ marginBottom: "clamp(32px, 5vw, 60px)", textAlign: "center" }}>
            <span style={badgeStyle}>All Projects</span>
            <h1
              style={{
                margin: "0 0 16px 0",
                fontSize: "clamp(28px, 5vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#111",
                letterSpacing: -1,
              }}
            >
              Complete
              <br />
              <span style={gradientText}>Work Gallery</span>
            </h1>
            <p
              style={{
                margin: "0 auto",
                fontSize: "clamp(14px, 2vw, 18px)",
                color: "#666",
                maxWidth: 500,
                lineHeight: 1.6,
              }}
            >
              Browse through our complete collection of creative projects
            </p>
          </div>

          {/* Back Button */}
          <button
            onClick={onBackHome}
            style={{
              background: "none",
              border: "none",
              fontSize: 14,
              color: "#667eea",
              cursor: "pointer",
              padding: "0 0 28px",
              fontFamily: "inherit",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            ← Back to Home
          </button>

          {/* Projects Grid */}
          <div className="portfolio-grid">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                onClick={() => onProjectClick(p)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── PROJECT DETAIL PAGE ──────────────────────────────────────────────────────
function ProjectDetailPage({ project, onBack, onProjectClick }) {
  const similar = project.similarProjects
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <>
      <Navbar />
      <div
        className="portfolio-root"
        style={{
          fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
          background: "linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)",
          minHeight: "100vh",
        }}
      >
        <div className="detail-pad">
          {/* Back Button */}
          <button
            onClick={onBack}
            style={{
              background: "none",
              border: "none",
              fontSize: 14,
              color: "#667eea",
              cursor: "pointer",
              padding: "0 0 28px",
              fontFamily: "inherit",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            ← Back to Gallery
          </button>

          {/* Title Section */}
          <div style={{ marginBottom: "clamp(32px, 5vw, 60px)" }}>
            <div
              style={{
                display: "flex",
                gap: 10,
                marginBottom: 18,
                flexWrap: "wrap",
              }}
            >
              {project.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "6px 16px",
                    borderRadius: 20,
                    letterSpacing: 0.5,
                    whiteSpace: "nowrap",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <h1
              style={{
                margin: "0 0 16px 0",
                fontSize: "clamp(28px, 5vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#111",
                letterSpacing: -1,
                wordBreak: "break-word",
              }}
            >
              {project.title}
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(15px, 2vw, 20px)",
                color: "#666",
                lineHeight: 1.7,
                maxWidth: 700,
              }}
            >
              {project.description}
            </p>
          </div>

          {/* Meta Info */}
          <div className="meta-grid" style={{ marginBottom: "clamp(40px, 5vw, 72px)" }}>
            {[
              { label: "Client", value: project.client },
              { label: "Date", value: project.date },
              { label: "Category", value: project.category },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: 16,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  minWidth: 0,
                }}
              >
                <p
                  style={{
                    margin: "0 0 8px",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#999",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "clamp(13px, 2vw, 16px)",
                    fontWeight: 600,
                    color: "#111",
                    wordBreak: "break-word",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Hero Image */}
          {project.images[0] && (
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                marginBottom: "clamp(40px, 5vw, 72px)",
                background: "#f0f0f0",
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                lineHeight: 0,
              }}
            >
              <img
                src={project.images[0]}
                alt="Project hero"
                className="detail-hero-img"
              />
            </div>
          )}

          {/* Challenge Section */}
          <div style={{ marginBottom: "clamp(40px, 5vw, 72px)" }}>
            <SectionBlock
              label="Challenges"
              number="01"
              title={project.challengeTitle}
              text={project.challengeDesc}
            />
          </div>

          {/* Additional Images */}
          {project.images.length > 1 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
                marginBottom: "clamp(40px, 5vw, 72px)",
              }}
            >
              {project.images.slice(1).map((img, index) => (
                <React.Fragment key={index}>
                  <div
                    style={{
                      borderRadius: 20,
                      overflow: "hidden",
                      background: "#f0f0f0",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                      lineHeight: 0,
                    }}
                  >
                    <img
                      src={img}
                      alt={`Project detail ${index + 1}`}
                      className="detail-sub-img"
                    />
                  </div>
                  {index < project.images.slice(1).length - 1 && (
                    <div
                      style={{
                        background: "#fff",
                        padding: "clamp(20px, 3vw, 40px)",
                        borderRadius: 20,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                      }}
                    >
                      <h3
                        style={{
                          margin: "0 0 14px",
                          fontSize: "clamp(18px, 2.5vw, 28px)",
                          fontWeight: 700,
                          color: "#111",
                          wordBreak: "break-word",
                        }}
                      >
                        {index === 0
                          ? "Dashboard Overview"
                          : "Data Visualization Components"}
                      </h3>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "clamp(13px, 1.8vw, 16px)",
                          color: "#666",
                          lineHeight: 1.7,
                        }}
                      >
                        {index === 0
                          ? "The main dashboard provides a comprehensive view of key metrics and data points. Clean typography and strategic use of whitespace ensure information hierarchy remains clear even with complex data sets."
                          : "Interactive charts and data tables allow users to explore insights at their own pace. The design system maintains consistency while enabling progressive disclosure of detailed information."}
                      </p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Conclusion Section */}
          <SectionBlock
            label="Conclusion"
            number="02"
            title={project.conclusionTitle}
            text={project.conclusionDesc}
          />

          <div
            style={{
              height: 1,
              background: "#e0e0e0",
              margin: "clamp(40px, 5vw, 72px) 0",
            }}
          />

          {/* Similar Projects */}
          <div>
            <h2
              style={{
                margin: "0 0 28px",
                fontSize: "clamp(22px, 3.5vw, 36px)",
                fontWeight: 800,
                color: "#111",
                letterSpacing: -0.5,
              }}
            >
              Similar Projects
            </h2>
            <div className="similar-grid">
              {similar.map((sp) => (
                <div
                  key={sp.id}
                  style={{
                    borderRadius: 14,
                    overflow: "hidden",
                    cursor: "pointer",
                    background: "#fff",
                    boxShadow: "0 3px 16px rgba(0,0,0,0.05)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onClick={() => onProjectClick(sp)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 3px 16px rgba(0,0,0,0.05)";
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      paddingTop: "55%",
                      overflow: "hidden",
                      background: "#f0f0f0",
                    }}
                  >
                    <img
                      src={sp.coverImage}
                      alt={sp.title}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div style={{ padding: "12px 14px" }}>
                    <p
                      style={{
                        margin: "0 0 4px",
                        fontSize: "clamp(11px, 1.5vw, 13px)",
                        fontWeight: 700,
                        color: "#111",
                        wordBreak: "break-word",
                      }}
                    >
                      {sp.title}
                    </p>
                    <p style={{ margin: 0, fontSize: 11, color: "#888" }}>
                      {sp.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────────
export default function PortfolioSection({ isStandalone = false }) {
  const [page, setPage] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Inject responsive styles once
    const styleId = "portfolio-responsive-styles";
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement("style");
      styleTag.id = styleId;
      styleTag.textContent = globalStyles;
      document.head.appendChild(styleTag);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleProjectClick = (project) => {
    if (isStandalone) {
      window.open(`/project/${project.id}`, "_blank");
    } else {
      setSelectedProject(project);
      setPage("detail");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleAllProjects = () => {
    window.open("/gallery", "_blank");
  };

  if (page === "gallery") {
    return (
      <GalleryPage
        onProjectClick={handleProjectClick}
        onBackHome={() => {
          setPage("home");
          window.scrollTo({ top: 0 });
        }}
      />
    );
  }

  if (page === "detail" && selectedProject) {
    return (
      <ProjectDetailPage
        project={selectedProject}
        onBack={() => {
          setPage("gallery");
          window.scrollTo({ top: 0 });
        }}
        onProjectClick={handleProjectClick}
      />
    );
  }

  return (
    <HomePage
      onAllProjects={handleAllProjects}
      onProjectClick={handleProjectClick}
      onHeroProjectClick={(project) => window.open("/gallery", "_blank")}
    />
  );
}

// ─── STANDALONE GALLERY PAGE ──────────────────────────────────────────────────
export function StandaloneGallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const styleId = "portfolio-responsive-styles";
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement("style");
      styleTag.id = styleId;
      styleTag.textContent = globalStyles;
      document.head.appendChild(styleTag);
    }
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (selectedProject) {
    return (
      <ProjectDetailPage
        project={selectedProject}
        onBack={() => {
          setSelectedProject(null);
          window.scrollTo({ top: 0 });
        }}
        onProjectClick={handleProjectClick}
      />
    );
  }

  return (
    <GalleryPage
      onProjectClick={handleProjectClick}
      onBackHome={() => {
        window.location.href = "/#portfolio";
      }}
    />
  );
}