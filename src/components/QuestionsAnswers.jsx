import { useState } from "react";

const faqs = [
  { q: "How long does it take to build a website?", a: "The timeline depends on the project complexity. A simple website takes 2-3 weeks, while complex web applications can take 6-12 weeks. We provide detailed timelines during our initial consultation." },
  { q: "How do I find different criteria in pricing", a: "Visit our pricing page and use the comparison tool to filter plans by features, team size, and budget." },
  { q: "What can I use to build my website?", a: "We support React, Next.js, Webflow, Framer, and more. Check our integrations page for the full list." },
  { q: "Do you provide website maintenance services?", a: "Yes! We offer ongoing maintenance packages including security updates, performance optimization, content updates, and 24/7 technical support to keep your website running smoothly." },
  { q: "Which payment method works?", a: "We accept all major credit cards, PayPal, and bank transfers for annual plans." },
];

export default function QuestionsAnswers() {
  const [open, setOpen] = useState(null);

  return (
    <section style={s.outerSection}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .faq-row { transition: background 0.15s ease; cursor: pointer; }
        .faq-row:hover { background: rgba(0,0,0,0.018) !important; }

        .plus-icon {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
          display: inline-block;
          font-size: clamp(1rem, 3vw, 1.375rem);
          font-weight: 300;
          line-height: 1;
          color: #111;
          flex-shrink: 0;
        }

        .answer-wrap {
          overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.3s ease, padding 0.3s ease;
        }

        .contact-btn {
          background: #111;
          color: #fff;
          border: none;
          border-radius: clamp(1.5rem, 4vw, 1.75rem);
          padding: clamp(0.875rem, 2vw, 0.875rem) clamp(1.5rem, 3vw, 1.75rem);
          font-size: clamp(0.875rem, 2.5vw, 0.9375rem);
          font-weight: 500;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          margin-top: clamp(1.5rem, 4vw, 1.75rem);
          white-space: nowrap;
        }
        .contact-btn:hover { background: #333; transform: scale(1.03); }
      `}</style>
      <div style={s.innerContainer}>
        <div style={s.inner}>

        {/* ── LEFT ── */}
        <div style={s.left}>
          <div>
            <span style={s.badgeInline}>Faq's</span>
            <h2 style={s.title}>
              <span style={s.titleLine1}>Questions</span>
              <br />
              <span style={s.titleLine2}>& Answers</span>
            </h2>
          </div>
          <p style={s.sub}>
            Find your answers here. if you don't find it here,<br />
            please contact us
          </p>
          <button className="contact-btn">Contact us</button>
        </div>

        {/* ── RIGHT: stacked card ── */}
        <div style={s.cardWrap}>
          {/* Ghost cards — neeche se peek, reference jaisa */}
          <div style={{ ...s.ghost, bottom: "5px", left: "30px", right: "30px", zIndex: 0, transform: "rotate(-2.5deg) translateY(4px)" }} />
          <div style={{ ...s.ghost, bottom: "10px", left: "18px", right: "18px", zIndex: 1, transform: "rotate(-1.2deg) translateY(2px)" }} />
          <div style={{ ...s.ghost, bottom: "15px",  left: "2px",  right: "15px",  zIndex: 2, transform: "rotate(-0.4deg)" }} />

          {/* Main card */}
          <div style={s.mainCard}>
            {faqs.map((faq, i) => (
              <div key={i}>
                {/* Question row */}
                <div
                  className="faq-row"
                  style={s.faqRow}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span style={s.question}>{faq.q}</span>
                  <span
                    className="plus-icon"
                    style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </div>

                {/* Answer */}
                <div
                  className="answer-wrap"
                  style={{
                    maxHeight: open === i ? "120px" : "0px",
                    opacity: open === i ? 1 : 0,
                    paddingLeft: "0px",
                    paddingRight: "24px",
                    paddingBottom: open === i ? "16px" : "0px",
                  }}
                >
                  <p style={s.answer}>{faq.a}</p>
                </div>

                {/* Divider — not after last */}
                {i < faqs.length - 1 && <div style={s.divider} />}
              </div>
            ))}
          </div>
        </div>

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
    fontFamily: "'DM Sans', sans-serif",
    padding: "clamp(3rem, 8vw, 5rem) clamp(2rem, 5vw, 3rem) clamp(5rem, 10vw, 7.5rem)",
    maxWidth: "clamp(20rem, 90vw, 75rem)",
    margin: "0 auto",
    width: "100%",
    minWidth: "280px",
  },
  inner: {
    display: "flex",
    gap: "clamp(2rem, 5vw, 5rem)",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },

  /* Left */
  left: {
    flex: "1 1 clamp(16rem, 40vw, 20rem)",
    minWidth: "clamp(15rem, 40vw, 16.25rem)",
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(2rem, 6vw, 4rem)",
    fontWeight: 800,
    color: "#111",
    margin: "0 0 clamp(1rem, 3vw, 1.25rem)",
    lineHeight: 1.1,
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  titleLine1: {
    display: "inline",
    marginRight: "clamp(0.5rem, 2vw, 0.75rem)",
  },
  badgeInline: {
    display: "inline-block",
    backgroundColor: "#F5A8C8",
    color: "#7A1A40",
    fontSize: "clamp(0.75rem, 2.5vw, 0.9375rem)",
    fontWeight: 600,
    padding: "clamp(0.3125rem, 1vw, 0.3125rem) clamp(1rem, 3vw, 1rem)",
    borderRadius: "clamp(1rem, 3vw, 1.5rem)",
    fontFamily: "'DM Sans', sans-serif",
    verticalAlign: "middle",
    position: "relative",
    top: "clamp(-0.25rem, -1vw, -0.25rem)",
  },
  titleLine2: {
    display: "inline",
  },
  sub: {
    fontSize: "clamp(0.875rem, 2.5vw, 0.9375rem)",
    color: "#666",
    lineHeight: 1.5,
    margin: 0,
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },

  /* Right stacked */
  cardWrap: {
    flex: "1 1 clamp(20rem, 50vw, 21.875rem)",
    minWidth: "clamp(18rem, 45vw, 18.75rem)",
    position: "relative",
    paddingBottom: "clamp(1.5rem, 4vw, 2rem)",
  },
  ghost: {
    position: "absolute",
    top: 0,
    bottom: 0,
    borderRadius: "clamp(1rem, 3vw, 1.25rem)",
    border: "clamp(0.094rem, 0.3vw, 0.094rem) solid #ccc",
    backgroundColor: "#fff",
  },
  mainCard: {
    position: "relative",
    zIndex: 2,
    backgroundColor: "#fff",
    border: "clamp(0.094rem, 0.3vw, 0.094rem) solid #d0d0d0",
    borderRadius: "clamp(1rem, 3vw, 1.25rem)",
    padding: "clamp(0.5rem, 2vw, 0.5rem) 0",
    overflow: "hidden",
    transform: "translateX(clamp(-0.5rem, -2vw, -0.625rem))",
  },

  /* FAQ rows */
  faqRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "clamp(1rem, 3vw, 1.375rem) clamp(1.5rem, 4vw, 1.75rem)",
    gap: "clamp(1rem, 2vw, 1rem)",
    borderRadius: "clamp(0.25rem, 1vw, 0.25rem)",
  },
  question: {
    fontSize: "clamp(1rem, 2.5vw, 1rem)",
    fontWeight: 500,
    color: "#111",
    lineHeight: 1.3,
    fontFamily: "'DM Sans', sans-serif",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    flex: 1,
    paddingRight: "clamp(0.5rem, 1vw, 0.5rem)",
  },
  answer: {
    fontSize: "clamp(0.875rem, 2vw, 0.875rem)",
    color: "#666",
    lineHeight: 1.5,
    margin: 0,
    padding: "0 clamp(1.5rem, 4vw, 1.75rem)",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  },
  divider: {
    height: "1px",
    backgroundColor: "#e8e8e8",
    margin: "0 clamp(1.5rem, 4vw, 1.75rem)",
  },
};
