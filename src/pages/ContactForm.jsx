import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ScrollReveal from '../components/ScrollReveal';
import { supabase } from '../lib/supabase';

const styles = {
  section: {
    background: "#F2EFF8",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    fontFamily: "'DM Sans', sans-serif",
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
    marginTop: "0",
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

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 780
  );

  // Responsive handler
  if (typeof window !== "undefined") {
    window.onresize = () => setIsMobile(window.innerWidth < 780);
  }

  const gridStyle = {
    ...styles.grid,
    ...(isMobile
      ? { gridTemplateColumns: "1fr", gap: "40px" }
      : {}),
  };

  const cardStyle = {
    ...styles.card,
    ...(isMobile ? { padding: "28px 24px" } : {}),
  };

  const descStyle = {
    ...styles.desc,
    ...(isMobile ? { maxWidth: "100%" } : {}),
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation - should not contain numbers
    if (form.name && /\d/.test(form.name)) {
      newErrors.name = 'Name should not contain numbers';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (form.email && !emailRegex.test(form.email)) {
      newErrors.email = 'Please enter a valid email format';
    }

    // Phone validation - must be exactly 10 digits
    if (form.phone && !/^\d{10}$/.test(form.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    // Check if any field is filled
    const hasAnyData = form.name || form.email || form.phone || form.message;
    
    if (!hasAnyData) {
      newErrors.general = 'Please fill at least one field before submitting';
    }

    return newErrors;
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const { error } = await supabase
          .from('contact_submissions')
          .insert([
            {
              name: form.name,
              email: form.email,
              phone: form.phone,
              message: form.message
            }
          ]);

        if (error) throw error;

        // Form is valid and submitted successfully
        setShowSuccess(true);
        setForm({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setTimeout(() => setShowSuccess(false), 3000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ general: 'Failed to submit form. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <section style={styles.section}>
        <div style={gridStyle}>
          {/* LEFT */}
          <div>
            <div className="contact-title-section">
              <h1 style={styles.h1}>
                <span>Get in touch<br />with us</span>
                <span style={styles.badge}>Contact</span>
              </h1>
            </div>
            <p style={descStyle}>
              Have any question or project? contact us through our mail.
            </p>
            <div style={styles.phoneBlock}>
              <div style={styles.phoneIcon}>
                <svg
                  width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="#c07830" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13a19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 3 2.18h3a2 2 0 0 1 2 1.72c.13 1 .37 1.98.72 2.9a2 2 0 0 1-.45 2.11L7.09 10a16 16 0 0 0 6 6l1.09-1.09a2 2 0 0 1 2.11-.45c.92.35 1.9.59 2.9.72a2 2 0 0 1 1.72 2.04z"/>
                </svg>
              </div>
              <div>
                <div style={styles.phoneLabel}>Phone</div>
                <div style={styles.phoneNumber}>(+91) 63999 12688</div>
              </div>
            </div>
          </div>

          {/* RIGHT - Form Card */}
          <ScrollReveal>
            <div style={cardStyle}>
              <div style={styles.field}>
                <label style={styles.label}>Full Name</label>
                <input
                  style={{
                    ...styles.input,
                    borderBottomColor: errors.name ? '#ef4444' : '#ccc'
                  }}
                  type="text"
                  placeholder="Your name here"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
                {errors.name && (
                  <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>
                    {errors.name}
                  </div>
                )}
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Email*</label>
                <input
                  style={{
                    ...styles.input,
                    borderBottomColor: errors.email ? '#ef4444' : '#ccc'
                  }}
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
                {errors.email && (
                  <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>
                    {errors.email}
                  </div>
                )}
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Phone Number</label>
                <input
                  style={{
                    ...styles.input,
                    borderBottomColor: errors.phone ? '#ef4444' : '#ccc'
                  }}
                  type="tel"
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
                {errors.phone && (
                  <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>
                    {errors.phone}
                  </div>
                )}
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Message*</label>
                <textarea
                  style={styles.textarea}
                  placeholder="Write your message here"
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                />
              </div>
              <button
                style={{
                  ...styles.btn,
                  background: showSuccess ? '#ffffff' : '#111',
                  color: showSuccess ? '#000000' : '#ffffff',
                  border: showSuccess ? '2px solid #000000' : 'none',
                  transition: 'all 0.3s ease',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!showSuccess && !isSubmitting) {
                    e.target.style.background = "#333";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!showSuccess && !isSubmitting) {
                    e.target.style.background = "#111";
                  }
                }}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : showSuccess ? '✅ Submitted successfully' : 'Submit'}
              </button>
              {errors.general && (
                <div style={{
                  marginTop: '16px',
                  padding: '12px',
                  background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  color: 'white',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: '14px',
                  animation: 'slideInUp 0.3s ease-out'
                }}>
                  ❌ {errors.general}
                </div>
              )}
            
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
              
              @media (max-width: 768px) {
                .contact-title-section {
                  margin-top: clamp(2.5rem, 6vw, 3.5rem);
                }
              }
            `}</style>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
