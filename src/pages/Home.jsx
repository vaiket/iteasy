import React, { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import WhyChooseUs from '../components/WhyChooseUs';
import PortfolioSection from '../components/PortfolioSection';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import QuestionsAnswers from '../components/QuestionsAnswers';
import Navbar from '../components/Navbar';
import styles from './Home.module.css';

const HEADING_LINE1 = "Got an idea?";
const HEADING_LINE2 = "Let's make it real";

function AnimatedHeading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const centerExpandStyle = (index, totalLength, show) => {
    const center = Math.floor(totalLength / 2);
    const distanceFromCenter = Math.abs(index - center);
    const delay = distanceFromCenter * 0.08;
    return {
      display: "inline-block",
      opacity: show ? 1 : 0,
      transform: show
        ? "scale(1) translateX(0)"
        : `scale(0.5) translateX(${(index - center) * 10}px)`,
      transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`,
    };
  };

  return (
    <h1 className={styles.heroTitle} style={{ margin: 0 }}>
      <div className={styles.headingWrapper}>
        <div style={{ color: '#000' }}>
          {HEADING_LINE1.split("").map((char, i) => (
            <span key={i} style={centerExpandStyle(i, HEADING_LINE1.length, show)}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
        <div style={{ color: '#000', lineHeight: 0.9 }}>
          {HEADING_LINE2.split("").map((char, i) => (
            <span key={i} style={centerExpandStyle(i, HEADING_LINE2.length, show)}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
    </h1>
  );
}

const SERVICE_CARDS = [
  { title: 'Web Development', bg: '#FFD9A0', rotate: 'rotate(-4deg)' },
  { title: 'Mobile App Dev',  bg: '#F5A8C8', rotate: 'rotate(3deg)', marginBottom: '28px' },
  { title: 'AI Integration',  bg: '#B8E8B0', rotate: 'rotate(-2deg)' },
  { title: 'SEO & Growth',    bg: '#B8D4F0', rotate: 'rotate(6deg)' },
];

const CARD_ICONS = {
  'Web Development': { src: '/images/software-developer (1).png', alt: 'Web Development Icon' },
  'Mobile App Dev':  { src: '/images/app-development (1).png',    alt: 'Mobile App Icon' },
  'AI Integration':  { src: '/images/technology.png',             alt: 'AI Integration Icon' },
  'SEO & Growth':    { src: '/images/support.png',                alt: 'SEO Growth Icon' },
};

const Home = ({ openModal }) => {

  useEffect(() => {
    if (window.location.hash === '#portfolio') {
      setTimeout(() => {
        const portfolioSection = document.querySelector('[data-portfolio-section]');
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <section
        id="hero"
        className={styles.hero}
        style={{ position: 'relative', overflow: 'hidden', padding: 0 }}
      >
        <video
          autoPlay loop muted playsInline
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        >
          <source src="/video/video_no_text.mp4" type="video/mp4" />
        </video>

        <div className={styles.heroInner}>
          <div className={styles.heroTextBlock}>
            <AnimatedHeading />
            <p className={styles.heroSubtitle}>
              We help you build, manage, and grow your business effectively
            </p>
          </div>
        </div>
      </section>

      <section className={styles.servicesCardsSection}>
        <div className={styles.servicesCardsInner}>
          <div className={styles.servicesCardsHeader}>
            <ScrollReveal>
              <h2 className="section-title">
                Get more done<br />with <span className="text-gradient">PixelStack</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Responsive grid wrapper */}
          <div className={styles.servicesCardsGrid}>
            {SERVICE_CARDS.map((card) => (
              <div
                key={card.title}
                className={styles.srvCard}
                style={{
                  background: card.bg,
                  transform: card.rotate,
                  marginBottom: card.marginBottom || undefined,
                }}
              >
                {/* Icon — dead center */}
                <div className={styles.srvCardIconWrap}>
                  <img
                    src={CARD_ICONS[card.title].src}
                    alt={CARD_ICONS[card.title].alt}
                    className={styles.srvCardIcon}
                  />
                </div>

                {/* Text — bottom */}
                <div className={styles.srvCardTextWrap}>
                  <p className={styles.srvCardTitle}>{card.title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className={styles.whyChooseUsSection}>
        <ScrollReveal>
          <WhyChooseUs />
        </ScrollReveal>
      </section>

      <section style={{ padding: "0" }} data-portfolio-section>
        <PortfolioSection />
      </section>

      <Testimonials />
      <HowItWorks />
      <QuestionsAnswers />
    </div>
  );
};

export default Home;