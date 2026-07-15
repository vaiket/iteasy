import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = ({ openModal }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <h3>PixelStack</h3>
            <p>We build high-performance digital products — from websites and mobile apps to AI-powered solutions — that help tech businesses grow and compete.</p>
            <div className={styles.newsletterForm}>
              <input type="email" className={styles.newsletterInput} placeholder="Enter your email" />
              <button className={styles.newsletterBtn}>Subscribe</button>
            </div>
          </div>
          <div className={styles.footerCol}>
            <h4>Company</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Our Work</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><button onClick={openModal} style={{background:'none',border:'none',color:'#9CA3AF',cursor:'pointer',fontSize:'14px'}}>Contact</button></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Services</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">Mobile Apps</Link></li>
              <li><Link to="/services">AI Integration</Link></li>
              <li><Link to="/services">SEO & Growth</Link></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Contact</h4>
            <ul className={styles.footerLinks}>
              <li><span>📧 hello@pixelstack.in</span></li>
              <li><span>📞 +91 98765 43210</span></li>
            
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2025 PixelStack. All rights reserved.</p>
          <p style={{fontFamily: 'var(--font-body)'}}>Built with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
