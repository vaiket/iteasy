import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Legal.module.css';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
  return (
    <div className={styles.legalPage}>
      <div className={styles.legalContainer}>
        <div className={styles.legalHeader}>
          <button 
            className={styles.backButton}
            onClick={() => navigate('/')}
          >
            ← Back to Home
          </button>
          <h1 className={styles.legalTitle}>Privacy Policy</h1>
          <p className={styles.legalMeta}>Effective Date: 1 jan, 2026 | Last Updated: 1 May, 2026</p>
        </div>

        <div className={styles.legalContent}>
          <p className={styles.intro}>
            At PixelStack , your privacy is important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website (pixelstack.in) or engage with our services. By using our website or services, you agree to the terms described in this policy.
          </p>

          <section className={styles.section}>
            <h2>1. Information We Collect</h2>
            
            <h3>1.1 Information You Provide</h3>
            <ul className={styles.list}>
              <li>Full name, email address, phone number, and company name submitted through contact or inquiry forms</li>
              <li>Project details, requirements, and descriptions shared during consultations or onboarding</li>
              <li>Payment-related information (processed securely through third-party gateways — we do not store card details)</li>
              <li>Communications via WhatsApp, email, Instagram, or other channels</li>
            </ul>

            <h3>1.2 Information Collected Automatically</h3>
            <ul className={styles.list}>
              <li>IP address, browser type, device type, and operating system</li>
              <li>Pages visited, time spent on site, and referring URLs</li>
              <li>Cookies and similar tracking technologies for analytics and performance</li>
              <li>Geographic location (country/city level only)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information collected solely for legitimate business purposes:</p>
            <ul className={styles.list}>
              <li>To respond to inquiries and provide quotations for our services</li>
              <li>To deliver, manage, and support web development and digital projects</li>
              <li>To communicate project updates, proposals, invoices, and support responses</li>
              <li>To improve website performance, user experience, and service quality</li>
              <li>To send service-related notifications (not marketing without consent)</li>
              <li>To comply with applicable legal and regulatory requirements</li>
              <li>To prevent fraud, unauthorized access, or misuse of our services</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Data Retention</h2>
            <p>We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable law. Specifically:</p>
            <ul className={styles.list}>
              <li><strong>Contact and inquiry data:</strong> 2 years from last interaction</li>
              <li><strong>Project files and communications:</strong> Duration of project + 3 years</li>
              <li><strong>Payment records:</strong> 7 years as required under Indian tax law (GST compliance)</li>
              <li><strong>Analytics data:</strong> 13 months (standard Google Analytics retention)</li>
            </ul>
            <p>After the applicable retention period, data is securely deleted or anonymized.</p>
          </section>

          <section className={styles.section}>
            <h2>4. Data Protection & Security</h2>
            <p>We implement reasonable technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction, including:</p>
            <ul className={styles.list}>
              <li>HTTPS encryption on all web pages and data transmissions</li>
              <li>Restricted access to client data — only authorized personnel</li>
              <li>Secure storage of project files with access controls</li>
              <li>Third-party service providers are vetted for compliance</li>
            </ul>
            <p className={styles.note}>No method of transmission over the internet is 100% secure. While we strive to protect your data using commercially acceptable standards, we cannot guarantee absolute security.</p>
          </section>

          <section className={styles.section}>
            <h2>5. Sharing of Information</h2>
            <p>We do not sell, rent, or trade your personal information to any third party. We may share data only in the following limited circumstances:</p>
            <ul className={styles.list}>
              <li><strong>Service Providers:</strong> Trusted third parties (e.g., hosting providers, payment gateways, analytics tools) who assist in delivering our services — bound by confidentiality obligations</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government authority</li>
              <li><strong>Business Protection:</strong> To enforce our agreements, protect our rights, or prevent fraud</li>
              <li><strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets — with prior notice</li>
            </ul>
            <p>We do not share client project details, source code, or confidential business information with any unauthorized party.</p>
          </section>

          <section className={styles.section}>
            <h2>6. Cookies Policy</h2>
            <p>Our website uses cookies to improve your browsing experience:</p>
            <ul className={styles.list}>
              <li><strong>Essential Cookies:</strong> Required for website functionality — cannot be disabled</li>
              <li><strong>Analytics Cookies:</strong> Google Analytics to understand site usage (can be opted out)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p>You can control or delete cookies through your browser settings. Disabling cookies may affect website functionality.</p>
          </section>

          <section className={styles.section}>
            <h2>7. International Clients (USA, UK & Others)</h2>
            <p>PixelStack is based in Ahmedabad, India and serves clients globally. If you are located in:</p>
            <ul className={styles.list}>
              <li><strong>European Union (EU/EEA):</strong> We process your data in compliance with GDPR principles — lawful basis, data minimization, and your rights to access, rectification, erasure, and portability</li>
              <li><strong>United Kingdom:</strong> We follow UK GDPR requirements post-Brexit</li>
              <li><strong>United States:</strong> We comply with applicable US state privacy laws including CCPA (California) where applicable</li>
            </ul>
            <p>By using our services from outside India, you consent to the transfer and processing of your data in India under applicable Indian data protection laws.</p>
          </section>

          <section className={styles.section}>
            <h2>8. Your Rights</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul className={styles.list}>
              <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Right to Deletion:</strong> Request deletion of your data (subject to legal retention obligations)</li>
              <li><strong>Right to Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw marketing consent at any time</li>
              <li><strong>Right to Object:</strong> Object to processing of your data for specific purposes</li>
            </ul>
            <p>To exercise any of these rights, contact us at the details provided in Section 10.</p>
          </section>

          <section className={styles.section}>
            <h2>9. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites, social media platforms, or tools. PixelStack is not responsible for the privacy practices or content of those external sites. We encourage you to review their privacy policies before sharing any personal information.</p>
          </section>

          <section className={styles.section}>
            <h2>10. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:</p>
            <div className={styles.contactInfo}>
              <p><strong>Company:</strong> PixelStack</p>
              <p><strong>Location:</strong> Ahmedabad, Gujarat, India</p>
              <p><strong>Email:</strong> your@email.com</p>
              <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
              <p><strong>Website:</strong> www.pixelstack.in</p>
            </div>
            <p>We will respond to all privacy-related requests within 30 days.</p>
          </section>

          <section className={styles.section}>
            <h2>11. Changes to This Policy</h2>
            <p>We reserve the right to update or modify this Privacy Policy at any time. Changes will be posted on this page with a revised 'Last Updated' date. We encourage you to review this page periodically. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
