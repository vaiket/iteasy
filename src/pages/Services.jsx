import React, { useState, useEffect } from 'react';
import styles from './Services.module.css';
import ScrollReveal from '../components/ScrollReveal';
import BackupForm from '../components/BackupForm';
import { supabase } from '../lib/supabase';

const plans = [
  { name:'Landing Page', price:'Rs.12,000', period:'One-time', desc:'A clean, modern website that represents your brand and converts visitors into customers.', bg:'#EDE9FE', icon:'Globe', features:['1 to 2 Page with Custom Layout', 'Responsive Design (Mobile, Tablet, Desktop)', 'Contact Form & Google Maps', 'Whatsapp Integration', 'Fast Loading Speed', '2 Month Free Support'] },
  { name:'E-Commerce ', price:'Rs.30,000', period:'One-time', desc:'A premium website with advanced features to grow your business and capture more leads.', bg:'#D1FAE5', icon:'Briefcase', features:['Up to 5 Pages with Custom Layout', 'Premium Custom UI/UX Design','E-Commerce Ready (add store later)', 'WhatsApp / Social Media Integration', 'Lead Capture Forms',  'Responsive Design (Mobile, Tablet, Desktop)', 'Search Console Setup', '3 Months Free Support & Maintenance'] },
  { name:'Business +', price:'Rs.40,000', period:'One-time + 4-month SEO', desc:'The complete package - a powerful website combined with a full SEO strategy to rank, attract, and convert customers.', bg:'#D1FAE5', icon:'Crown', features:['5 to 7 pages with custom design', 'Full SEO Audit & Keyword Research', '4-Month Active SEO Campaign', 'Photo Gallery Section','Google Business Setup & Optimisation','Contact Form Integration', 'Social Media Integration & Profiles', '6-8 Months Priority Support', 'Free Hosting Consultation (1 year)','AI Agent Integration'] },
  { name:'SEO optimization', price:'Rs.60,000', period:'One-time + 6-month support', desc:'A comprehensive enterprise-grade solution with custom features, advanced integrations for large-scale businesses.', bg:'#FEF3C7', icon:'Rocket', features:['Unlimited Pages & Custom Features','3 Contact Form Integration' ,'Mockup Design','Photo / video section','E-Commerce with Advanced Payment Gateways', 'Free Hosting Setup & Management (1 year)','Social Media Integration','Blog section','FAQ Section','AI Agent Integration', 'Advanced Security Features', 'Performance Monitoring & Optimization', '1 year Dedicated Support ', 'SEO & Digital Marketing Strategy'] },
];

const Services = () => {
  const [showBackupForm, setShowBackupForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    checkWhatsAppClick();
    const interval = setInterval(checkWhatsAppClick, 2000);
    return () => clearInterval(interval);

    function checkWhatsAppClick() {
      const whatsappClickData = localStorage.getItem('pixelStackWhatsAppClick');
      if (whatsappClickData) {
        const data = JSON.parse(whatsappClickData);
        const timeDiff = Date.now() - data.timestamp;
        if (timeDiff < 15000 && !data.completed) {
          setSelectedPlan(data.plan);
          setShowBackupForm(true);
          clearInterval(interval);
        }
      }
    }
  }, []);

  const handleWhatsAppClick = (plan) => {
    const clickData = { plan, timestamp: Date.now(), completed: false };
    localStorage.setItem('pixelStackWhatsAppClick', JSON.stringify(clickData));
    const phoneNumber = '6399912688';
    const message = `🌟 Hello Pixel Stack Team!\n\nI found your website and I'm very interested in your "${plan.name}" plan.\n\n📋 Plan Details:\n• Plan: ${plan.name}\n• Price: ${plan.price}\n• Period: ${plan.period}\n• Description: ${plan.desc}\n\nI would love to discuss this further. Could you please provide more information?\n\nBest regards,\n[Your Name]`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormSubmit = async (formData) => {
    const clickData = JSON.parse(localStorage.getItem('pixelStackWhatsAppClick') || '{}');
    clickData.completed = true;
    localStorage.setItem('pixelStackWhatsAppClick', JSON.stringify(clickData));

    try {
      const { data, error } = await supabase
        .from('backup_form_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          plan_name: formData.planDetails?.name,
          plan_price: formData.planDetails?.price,
          plan_period: formData.planDetails?.period,
          source: formData.source,
          user_agent: formData.userAgent,
          referrer: formData.referrer,
          created_at: formData.timestamp
        }])
        .select();

      if (error) console.error('Supabase error:', error);
      else console.log('Saved to Supabase:', data);
    } catch (err) {
      console.error('Error saving to database:', err);
    }

    setShowSuccess(true);
    setShowBackupForm(false);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className={styles.plansSection}>

      {/* ── Toast — mobile responsive fix ── */}
      {showSuccess && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10000,
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: 'white',
          padding: '12px 18px',
          borderRadius: '50px',
          fontWeight: '600',
          fontSize: 'clamp(12px, 3.5vw, 15px)',
          boxShadow: '0 8px 25px rgba(16, 185, 129, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          animation: 'toastSlideDown 0.4s ease-out',
          fontFamily: "'DM Sans', sans-serif",
          width: 'max-content',
          maxWidth: 'calc(100vw - 40px)',
          boxSizing: 'border-box',
          whiteSpace: 'normal',
          textAlign: 'left',
          lineHeight: '1.4',
        }}>
          <span style={{ fontSize: 'clamp(14px, 4vw, 20px)', flexShrink: 0 }}>✅</span>
          <span style={{ flex: 1 }}>Form Submitted! We will contact you soon.</span>
          <button
            onClick={() => setShowSuccess(false)}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              color: 'white',
              width: '22px',
              height: '22px',
              minWidth: '22px',
              borderRadius: '50%',
              cursor: 'pointer',
              flexShrink: 0,
              fontSize: '13px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >×</button>
        </div>
      )}

      <style>{`
        @keyframes toastSlideDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-30px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      <div className={styles.plansInner}>
        <div className={styles.plansHeader}>
          <ScrollReveal>
            <span className="section-badge badge-purple">Pricing Plans</span>
            <h2 className="section-title">Simple, transparent<br/><span className="text-gradient">pricing</span></h2>
            <p className="section-sub">Choose the plan that fits your business. No hidden fees, no surprises.</p>
          </ScrollReveal>
        </div>
        <div className={styles.plansGrid}>
          {plans.map((plan, index) => (
            <ScrollReveal key={index}>
              <div className={`${styles.planCard} ${index === 1 ? styles.popular : ''}`}>
                {index === 1 && <span className={styles.popularBadge}>⭐ Most Popular</span>}
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planPrice}>{plan.price}</p>
                <p className={styles.planPeriod}>{plan.period}</p>
                <p className={styles.planDesc}>{plan.desc}</p>
                <div className={styles.planDivider}></div>
                <ul className={styles.planFeatures}>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button
                  className={`${styles.planCta} ${index === 1 ? styles.planCtaSolid : styles.planCtaOutline}`}
                  onClick={() => handleWhatsAppClick(plan)}
                >
                  Get Started
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Backup Form Modal */}
      {showBackupForm && selectedPlan && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
            borderRadius: '16px',
            padding: '20px',
            maxWidth: '400px',
            width: '100%',
            fontFamily: "'DM Sans', sans-serif",
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '1px solid rgba(99, 102, 241, 0.1)',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{
                width: '32px', height: '32px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginRight: '10px', flexShrink: 0,
              }}>
                <span style={{ color: '#fff', fontSize: '16px' }}>✉️</span>
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111', margin: 0 }}>
                Complete Your Inquiry
              </h3>
            </div>
            <p style={{ fontSize: '12px', color: '#666', marginBottom: '16px', lineHeight: '1.4' }}>
              You clicked on <strong>"{selectedPlan.name}"</strong> plan. Fill this form!
            </p>
            <BackupForm
              plan={selectedPlan}
              onSubmit={handleFormSubmit}
              onClose={() => setShowBackupForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;