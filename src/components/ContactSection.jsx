import { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  dropdown: {
    position: "absolute",
    top: "100%",
    right: "0",
    background: "#fff",
    border: "1.5px solid #ddd",
    borderRadius: "12px",
    padding: "24px",
    minWidth: "380px",
    maxWidth: "450px",
    fontFamily: "'DM Sans', sans-serif",
    zIndex: 9999,
    boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
  },
  grid: {
    width: "100%",
    maxWidth: "1200px",
    display: "grid",
    gridTemplateColumns: "1fr 1.3fr",
    gap: "60px",
    alignItems: "center",
  },
  h1: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
    fontWeight: 700,
    color: "#111",
    lineHeight: 1.15,
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "12px",
  },
  badge: {
    display: "inline-block",
    background: "#4eeac4",
    color: "#111",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "1rem",
    fontWeight: 500,
    padding: "6px 18px",
    borderRadius: "999px",
    transform: "rotate(-3deg)",
    marginLeft: "8px",
  },
  desc: {
    marginTop: "20px",
    color: "#555",
    fontSize: "1rem",
    lineHeight: 1.6,
    maxWidth: "300px",
  },
  phoneBlock: {
    marginTop: "40px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  phoneIcon: {
    width: "56px",
    height: "56px",
    background: "#f5dfc5",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  phoneLabel: {
    fontSize: "0.72rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#aaa",
    fontWeight: 500,
  },
  phoneNumber: {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#111",
    marginTop: "3px",
  },
  card: {
    background: "#fff",
    border: "1.5px solid #ddd",
    borderRadius: "20px",
    padding: "40px 40px 36px",
  },
  field: { marginBottom: "28px" },
  label: {
    display: "block",
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#111",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    border: "none",
    borderBottom: "1.5px solid #ccc",
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    color: "#333",
    background: "transparent",
    padding: "8px 0",
  },
  textarea: {
    width: "100%",
    border: "none",
    borderBottom: "1.5px solid #ccc",
    outline: "none",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    color: "#333",
    background: "transparent",
    padding: "8px 0",
    resize: "none",
    minHeight: "90px",
  },
  btn: {
    width: "100%",
    padding: "16px",
    background: "#111",
    color: "#fff",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "1rem",
    fontWeight: 600,
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    marginTop: "8px",
    letterSpacing: "0.01em",
    transition: "background 0.2s",
  },
};

export default function ContactSection({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div style={styles.dropdown} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ 
          fontSize: "18px", 
          fontWeight: 600, 
          color: "#111", 
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer"
        }}
        onClick={() => {
          onClose();
          navigate('/contact');
        }}
        >
          <span style={{
            display: "inline-block",
            background: "#4eeac4",
            color: "#111",
            fontSize: "12px",
            fontWeight: 500,
            padding: "4px 12px",
            borderRadius: "999px",
            transform: "rotate(-2deg)"
          }}>Contact</span>
          Get in touch
        </h3>
        
        <div style={styles.field}>
          <label style={styles.label}>Full Name</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Your name here"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        
        <div style={styles.field}>
          <label style={styles.label}>Email*</label>
          <input
            style={styles.input}
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        
        <div style={styles.field}>
          <label style={styles.label}>Message*</label>
          <textarea
            style={styles.textarea}
            placeholder="Write your message here"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
        
        <button
          style={styles.btn}
          onMouseEnter={(e) => (e.target.style.background = "#333")}
          onMouseLeave={(e) => (e.target.style.background = "#111")}
          onClick={() => {
            setShowSuccess(true);
            setTimeout(() => {
              setShowSuccess(false);
              onClose();
            }, 2000);
          }}
        >
          Submit
        </button>
        
        {showSuccess && (
          <div style={{
            marginTop: "12px",
            padding: "12px",
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            color: "white",
            borderRadius: "8px",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "500",
            animation: "slideInUp 0.3s ease-out"
          }}>
            ✅ Form submitted successfully!
          </div>
        )}
        
        <div style={{ 
          marginTop: "16px", 
          padding: "12px", 
          background: "#f5dfc5", 
          borderRadius: "8px",
          textAlign: "center"
        }}>
          <div style={{ fontSize: "12px", color: "#aaa", marginBottom: "4px" }}>Phone</div>
          <div style={{ fontSize: "14px", fontWeight: 600, color: "#111" }}>
            (+88) 740 880 130
          </div>
        </div>
        <style>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  );
}
