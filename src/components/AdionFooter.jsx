import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function AdionFooter() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <>
      <section style={s.wrapper}>
      <style>{`
        
        /* Stacked card effect */
        .stack-card-2 {
          position: absolute;
          top: clamp(-1.5rem, -4vw, -2.1875rem);
          left: clamp(1rem, 3vw, 1.75rem);
          right: clamp(1rem, 3vw, 1.75rem);
          height: 100%;
          background: #F2EFF8;
          border-radius: clamp(1rem, 3vw, 1.5rem);
          border: clamp(0.094rem, 0.3vw, 0.094rem) solid #ddd;
          z-index: 0;
          border:clamp(0.125rem, 0.3vw, 0.125rem) solid black;
        }
        .stack-card-1 {
          position: absolute;
          top: clamp(-0.5rem, -2vw, -0.5rem);
          left: clamp(0.75rem, 2vw, 0.875rem);
          right: clamp(0.75rem, 2vw, 0.875rem);
          height: 100%;
          background: #F2EFF8;
          border-radius: clamp(1rem, 3vw, 1.5rem);
          border: clamp(0.094rem, 0.3vw, 0.094rem) solid #e0e0e0;
          z-index: 1;
          border:clamp(0.125rem, 0.3vw, 0.125rem) solid black;
        }
        .main-card {
          position: relative;
          z-index: 2;
          background: #fff;
          border-radius: clamp(1rem, 3vw, 1.375rem);
          border: clamp(0.094rem, 0.3vw, 0.094rem) solid #ddd;
          overflow: hidden;
          border:clamp(0.125rem, 0.3vw, 0.125rem) solid black;
        }

        .lets-talk-btn {
          background: #111;
          color: #fff;
          border: none;
          border-radius: clamp(1.5rem, 4vw, 1.875rem);
          padding: clamp(0.75rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.75rem);
          font-size: clamp(0.75rem, 2.5vw, 0.875rem);
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .lets-talk-btn:hover {
          background: #333;
          transform: scale(1.04);
        }

        .social-btn {
          width: clamp(2rem, 4vw, 2.5rem);
          height: clamp(2rem, 4vw, 2.5rem);
          border-radius: 50%;
          border: clamp(0.094rem, 0.3vw, 0.094rem) solid #ccc;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(0.625rem, 2vw, 0.75rem);
          font-weight: 600;
          color: #111;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .social-btn:hover {
          background: #111;
          color: #fff;
          border-color: #111;
        }

        .subscribe-btn {
          background: #111;
          color: #fff;
          border: none;
          border-radius: clamp(0.625rem, 2vw, 0.625rem);
          padding: clamp(0.75rem, 2vw, 0.8125rem) clamp(1rem, 3vw, 1.75rem);
          font-size: clamp(0.75rem, 2.5vw, 0.875rem);
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.2s, transform 0.15s;
          flex-shrink: 0;
        }
        .subscribe-btn:hover {
          background: #333;
          transform: scale(1.02);
        }

        .email-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: clamp(0.75rem, 2.5vw, 0.875rem);
          font-family: 'Inter', sans-serif;
          color: #111;
          background: transparent;
          padding: clamp(0.25rem, 1vw, 0.25rem) 0;
          min-width: 0;
        }
        .email-input::placeholder { color: #aaa; }

        .nav-link {
          font-size: clamp(0.75rem, 2.5vw, 0.8125rem);
          color: #555;
          cursor: pointer;
          transition: color 0.2s;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          white-space: nowrap;
        }
        .nav-link:hover { color: #111; }

        .legal-link-hover:hover { 
          color: #764ba2;
          text-decoration: underline;
        }
      `}</style>

      <div className="adion-footer-wrap" style={s.outerWrap}>
        {/* Stacked cards behind */}
        <div className="stack-card-2" />
        <div className="stack-card-1" />

        {/* Main card */}
        <div className="main-card">

          {/* CTA — Pink section */}
          <div style={s.ctaSection}>
            <h2 style={s.ctaTitle}>
              Let's build your<br />
              digital solution<br />
              together!
            </h2>
            <button className="lets-talk-btn" onClick={() => {
  navigate('/contact');
  setTimeout(() => {
    // Try multiple selectors to find the contact form
    const formElement = document.querySelector('.contactFormSection') || 
                        document.querySelector('[class*="contactForm"]') ||
                        document.querySelector('form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback: scroll to top of contact page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, 300);
}}>Let's Talk</button>
          </div>

          {/* Footer body */}
          <div style={s.footerBody}>

            {/* Row 1: Logo | Address | Socials */}
            <div style={s.row1}>
              {/* Logo */}
              <div style={s.logoWrap}>
                {/* <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginRight: 6, flexShrink: 0 }}>
                  <circle cx="9" cy="9" r="8" stroke="#111" strokeWidth="1.5" fill="none" />
                  <path d="M5 13 L9 5 L13 13 M6.5 10.5 L11.5 10.5" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                </svg> */}
                <span style={s.logoText}>PixelStack</span>
              </div>

              {/* Address */}
              <div style={s.address}>
                <p style={s.addressText}>315 Sahitya Arcade,</p>
                <p style={s.addressText}>Ahmedabad, India</p>
              </div>

              {/* Social buttons */}
              <div style={s.socials}>
                <button 
                  className="social-btn"
                  onClick={() => window.open("https://www.facebook.com/pixelstack", "_blank")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button 
                  className="social-btn"
                  onClick={() => window.open("https://www.linkedin.com/company/121453965/admin/dashboard/", "_blank")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button 
                  className="social-btn"
                  onClick={() => window.open("https://www.instagram.com/pixe.lstack?utm_source=qr&igsh=MWloeHd6dzJ6azhoaA==", "_blank")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div style={s.divider} />

            {/* Row 2: Nav | Newsletter */}
            <div style={s.row2}>
              {/* Nav links */}
              <div style={s.navLinks}>
                {["Home", "About", "Services", "Projects"].map((link) => (
                  <a key={link} className="nav-link" href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>{link}</a>
                ))}
              </div>

              {/* Newsletter */}
              <div style={s.newsletterWrap}>
                <p style={s.newsletterLabel}>Get tech updates & insights</p>
                <div style={s.inputRow}>
                  <input
                    className="email-input"
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  />
                  <button className="subscribe-btn" onClick={handleSubscribe}>
                    {subscribed ? "✓ Done!" : "Subscribe"}
                  </button>
                </div>
                <div style={s.inputUnderline} />
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div style={s.bottomBar}>
            <div style={s.bottomBarContent}>
              <p style={s.copyright}>@2026 PixelStack inc. All Right Reserved</p>
              <div style={s.legalLinks}>
                <span style={s.legalLink} className="legal-link-hover" onClick={() => navigate('/privacy-policy')}>Privacy Policy</span>
                <span style={s.dividerDot}>·</span>
                <span style={s.legalLink} className="legal-link-hover" onClick={() => navigate('/terms-conditions')}>Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
          </>
  );
}

const s = {
  wrapper: {
    padding: "clamp(3rem, 8vw, 5rem) clamp(1rem, 4vw, 2rem) clamp(4rem, 10vw, 6.25rem)",
    backgroundColor: "#F2EFF8",
    width: "100%",
    minWidth: "280px",
    overflowX: "hidden",
  },
  outerWrap: {
    position: "relative",
    maxWidth: "clamp(20rem, 90vw, 81.25rem)",
    margin: "0 auto",
    paddingTop: "clamp(1rem, 3vw, 1.5rem)",
    width: "100%",
  },

  /* CTA */
  ctaSection: {
    backgroundColor: "#F7AADD",
    padding: "clamp(2rem, 6vw, 3.5rem) clamp(1.5rem, 4vw, 2rem) clamp(2rem, 5vw, 3rem)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "clamp(1rem, 3vw, 1.75rem)",
    margin: "clamp(1.5rem, 4vw, 2.5rem)",
    borderRadius: "clamp(0.75rem, 2vw, 0.75rem)",
  },
  ctaTitle: {
    fontFamily: "Bricolage Grotesque, sans-serif",
    fontSize: "clamp(2rem, 8vw, 6.875rem)",
    fontWeight: 400,
    color: "#111",
    margin: 0,
    lineHeight: 1.1,
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },

  /* Footer body */
  footerBody: {
    padding: "clamp(1.5rem, 4vw, 1.75rem) clamp(1.5rem, 4vw, 2.25rem) clamp(1rem, 3vw, 1.25rem)",
    backgroundColor: "#fff",
  },

  /* Row 1 */
  row1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "clamp(1rem, 3vw, 1.25rem)",
    marginBottom: "clamp(1rem, 3vw, 1.5rem)",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  logoText: {
    fontFamily: "Bricolage Grotesque, sans-serif",
    fontSize: "clamp(1rem, 3vw, 1.125rem)",
    fontWeight: 700,
    color: "#111",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  address: {
    textAlign: "center",
  },
  addressText: {
    fontSize: "clamp(0.75rem, 2.5vw, 0.8125rem)",
    color: "#555",
    margin: "clamp(0.125rem, 0.5vw, 0.125rem) 0",
    lineHeight: 1.4,
    fontFamily: "'Inter', sans-serif",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  socials: {
    display: "flex",
    gap: "clamp(0.5rem, 2vw, 0.625rem)",
  },

  divider: {
    height: "1px",
    backgroundColor: "#ebebeb",
    marginBottom: "clamp(1rem, 3vw, 1.25rem)",
  },

  /* Row 2 */
  row2: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "clamp(1rem, 3vw, 1.25rem)",
  },
  navLinks: {
    display: "flex",
    gap: "clamp(1rem, 3vw, 1.5rem)",
    alignItems: "center",
    paddingBottom: "clamp(0.25rem, 1vw, 0.25rem)",
    flexWrap: "wrap",
  },
  newsletterWrap: {
    minWidth: "clamp(15rem, 40vw, 21.25rem)",
    flex: 1,
    maxWidth: "clamp(20rem, 50vw, 30rem)",
  },
  newsletterLabel: {
    fontSize: "clamp(0.75rem, 2.5vw, 0.8125rem)",
    color: "#555",
    marginBottom: "clamp(0.75rem, 2vw, 0.75rem)",
    fontFamily: "'Inter', sans-serif",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  inputRow: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(0.75rem, 2vw, 0.75rem)",
    flexWrap: "wrap",
  },
  inputUnderline: {
    height: "1px",
    backgroundColor: "#ddd",
    marginTop: "clamp(0.5rem, 1.5vw, 0.5rem)",
    marginRight: "0",
  },

  /* Bottom */
  bottomBar: {
    backgroundColor: "#fff",
    borderTop: "1px solid #f0f0f0",
    padding: "clamp(1rem, 3vw, 1.5rem) clamp(1.5rem, 4vw, 2.5rem)",
    textAlign: "center",
  },
  bottomBarContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
  },
  copyright: {
    fontSize: "clamp(0.7rem, 2vw, 0.75rem)",
    color: "#888",
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  legalLinks: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
  },
  legalLink: {
    fontSize: "clamp(0.7rem, 2vw, 0.75rem)",
    color: "#111",
    fontFamily: "'Inter', sans-serif",
    cursor: "pointer",
    textDecoration: "none",
    transition: "color 0.2s",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  dividerDot: {
    fontSize: "clamp(0.7rem, 2vw, 0.75rem)",
    color: "#ccc",
    fontFamily: "'Inter', sans-serif",
  },
};
