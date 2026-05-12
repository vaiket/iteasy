import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setScrolled(window.scrollY > heroBottom - 80);
      } else {
        // On pages without hero section, show white navbar after scrolling 100px
        setScrolled(window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navInner}>

          {/* ── Logo ── */}
          <Link to="/" className={styles.navLogo} onClick={closeMobileMenu}>
            <img
              src="/images/logo final1.png"
              alt="PixelStack Logo"
              className={styles.navLogoImg}
            />
          </Link>

          {/* ── Desktop Links ── */}
          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* ── Actions ── */}
          <div className={styles.navActions}>
            <button
              className={styles.btnTalk}
              onClick={() => handleNavClick('/contact')}
            >
              <span>Let's Talk</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
            <button
              className={`${styles.navHamburger} ${mobileMenuOpen ? styles.open : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
          {navLinks.map((link, i) => (
            <button
              key={link.path}
              className={`${styles.mobileLink} ${location.pathname === link.path ? styles.active : ''}`}
              onClick={() => handleNavClick(link.path)}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className={styles.mobileLinkNum}>0{i + 1}</span>
              {link.label}
            </button>
          ))}
          <button
            className={styles.btnTalkMobile}
            onClick={() => handleNavClick('/contact')}
          >
            Let's Talk →
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;