import React, { useState } from 'react';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  label: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#4a5568',
    fontFamily: "'DM Sans', sans-serif",
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  input: {
    padding: '10px 0',
    border: 'none',
    borderBottom: '2px solid #e2e8f0',
    outline: 'none',
    fontSize: '14px',
    fontFamily: "'DM Sans', sans-serif",
    color: '#2d3748',
    background: 'transparent',
    transition: 'all 0.3s ease',
    borderRadius: '0'
  },
  textarea: {
    padding: '10px 0',
    border: 'none',
    borderBottom: '2px solid #e2e8f0',
    outline: 'none',
    fontSize: '14px',
    fontFamily: "'DM Sans', sans-serif",
    color: '#2d3748',
    background: 'transparent',
    minHeight: '80px',
    resize: 'none',
    transition: 'all 0.3s ease',
    borderRadius: '0'
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    marginTop: '8px'
  },
  button: {
    flex: 1,
    padding: '12px 20px',
    border: 'none',
    borderRadius: '25px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: "'DM Sans', sans-serif",
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  submitButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
  },
  cancelButton: {
    background: 'transparent',
    color: '#718096',
    border: '2px solid #e2e8f0'
  },
  planInfo: {
    background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
    padding: '12px',
    borderRadius: '12px',
    marginBottom: '16px',
    border: '1px solid #e2e8f0',
    position: 'relative',
    overflow: 'hidden'
  },
  planName: {
    fontSize: '15px',
    fontWeight: 700,
    color: '#2d3748',
    marginBottom: '4px',
    fontFamily: "'DM Sans', sans-serif"
  },
  planPrice: {
    fontSize: '13px',
    color: '#718096',
    fontFamily: "'DM Sans', sans-serif"
  }
};

const BackupForm = ({ plan, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    planDetails: plan
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) newErrors.phone = 'Invalid phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Prepare data for database submission
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'backup-form',
        userAgent: navigator.userAgent,
        referrer: document.referrer
      };

      onSubmit(submissionData);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      {/* Plan Information */}
      <div style={styles.planInfo}>
        <div style={styles.planName}>{plan.name}</div>
        <div style={styles.planPrice}>{plan.price} - {plan.period}</div>
      </div>

      {/* Basic Fields Only */}
      <div style={styles.field}>
        <label style={styles.label}>
          <span>👤</span> Full Name *
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Your name here"
          style={{
            ...styles.input,
            borderColor: errors.name ? '#ff4444' : '#e2e8f0'
          }}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = errors.name ? '#ff4444' : '#e2e8f0'}
        />
        {errors.name && <span style={{ color: '#ff4444', fontSize: '11px', marginTop: '4px' }}>{errors.name}</span>}
      </div>

      <div style={styles.field}>
        <label style={styles.label}>
          <span>📧</span> Email *
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="Email address"
          style={{
            ...styles.input,
            borderColor: errors.email ? '#ff4444' : '#e2e8f0'
          }}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = errors.email ? '#ff4444' : '#e2e8f0'}
        />
        {errors.email && <span style={{ color: '#ff4444', fontSize: '11px', marginTop: '4px' }}>{errors.email}</span>}
      </div>

      <div style={styles.field}>
        <label style={styles.label}>
          <span>📱</span> Phone *
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder="9876543210"
          style={{
            ...styles.input,
            borderColor: errors.phone ? '#ff4444' : '#e2e8f0'
          }}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = errors.phone ? '#ff4444' : '#e2e8f0'}
        />
        {errors.phone && <span style={{ color: '#ff4444', fontSize: '11px', marginTop: '4px' }}>{errors.phone}</span>}
      </div>

      <div style={styles.field}>
        <label style={styles.label}>
          <span>💬</span> Message *
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Write your message here"
          style={{
            ...styles.textarea,
            borderColor: errors.message ? '#ff4444' : '#e2e8f0'
          }}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = errors.message ? '#ff4444' : '#e2e8f0'}
        />
        {errors.message && <span style={{ color: '#ff4444', fontSize: '11px', marginTop: '4px' }}>{errors.message}</span>}
      </div>

      {/* Buttons */}
      <div style={styles.buttonGroup}>
        <button
          type="button"
          style={{ ...styles.button, ...styles.cancelButton }}
          onClick={onClose}
          onMouseEnter={(e) => {
            e.target.style.background = '#f7fafc';
            e.target.style.borderColor = '#cbd5e0';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.borderColor = '#e2e8f0';
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          style={{ ...styles.button, ...styles.submitButton }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BackupForm;
