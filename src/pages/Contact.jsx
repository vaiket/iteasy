import React, { useState } from 'react';
import styles from './Contact.module.css';
import ScrollReveal from '../components/ScrollReveal';

const Contact = ({ openModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation - should not contain numbers
    if (formData.name && /\d/.test(formData.name)) {
      newErrors.name = 'Name should not contain numbers';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }

    // Check if any field is filled
    const hasAnyData = formData.name || formData.email || formData.phone || formData.projectType || formData.message;
    
    if (!hasAnyData) {
      newErrors.general = 'Please fill at least one field before submitting';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, show success
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.contactInner}>
        <div style={{textAlign:'center',marginBottom:'48px'}}>
          <span className={styles.sectionBadge}>Contact</span>
          <h1 className={styles.sectionTitle}>Let's build something<br/><span className={styles.textGradient}>great together</span></h1>
        </div>
        <div className={styles.contactFormSection}>
          <ScrollReveal>
            <h2 className={styles.contactFormTitle}>Get in Touch</h2>
            <p className={styles.contactFormSub}>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Full Name</label>
                  <input type="text" className={styles.formInput} name="name" value={formData.name} onChange={handleChange} placeholder="Your name" style={{ borderColor: errors.name ? '#ef4444' : '' }} />
                  {errors.name && (
                    <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>
                      {errors.name}
                    </div>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email</label>
                  <input type="email" className={styles.formInput} name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" style={{ borderColor: errors.email ? '#ef4444' : '' }} />
                  {errors.email && (
                    <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Phone</label>
                <input type="tel" className={styles.formInput} name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Project Type</label>
                <select className={styles.formInput} name="projectType" value={formData.projectType} onChange={handleChange}>
                  <option value="">Select a service</option>
                  <option>Normal Website</option>
                  <option>Business Website</option>
                  <option>Business + SEO Package</option>
                  <option>Mobile App</option>
                  <option>AI Integration</option>
                  <option>E-Commerce</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Message</label>
                <textarea className={styles.formInput} name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." />
              </div>
              <button type="submit" className={styles.formSubmit} style={{padding:'14px 32px',borderRadius:'999px',background:'linear-gradient(135deg, var(--primary), var(--pink))',color:'#fff',fontSize:'15px',fontWeight:'600',border:'none',cursor:'pointer',display:'inline-flex',alignItems:'center',gap:'8px',justifyContent:'center'}}>Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          {errors.general && (
            <div style={{
              marginTop: '20px',
              padding: '16px',
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              color: 'white',
              borderRadius: '12px',
              textAlign: 'center',
              fontWeight: '600',
              fontSize: '16px',
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)',
              animation: 'slideInUp 0.3s ease-out'
            }}>
              ❌ {errors.general}
            </div>
          )}
          {showSuccess && (
            <div style={{
              marginTop: '20px',
              padding: '16px',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: 'white',
              borderRadius: '12px',
              textAlign: 'center',
              fontWeight: '600',
              fontSize: '16px',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
              animation: 'slideInUp 0.3s ease-out'
            }}>
              ✅ Successfully submitted! We'll get back to you within 24 hours.
            </div>
          )}
          <style>{`
            @keyframes slideInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
