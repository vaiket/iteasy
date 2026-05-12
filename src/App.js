import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdionFooter from './components/AdionFooter';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import ContactForm from './pages/ContactForm';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';
import { StandaloneGallery } from './components/PortfolioSection';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const closeContactForm = () => setShowContactForm(false);

  // Handle escape key for contact form
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && showContactForm) {
        closeContactForm();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [showContactForm]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <AdionFooter />
            </>
          } />
          <Route path="/about" element={
            <>
              <Navbar />
              <About />
              <AdionFooter />
            </>
          } />
          <Route path="/projects" element={
            <>
              <Navbar />
              <Projects />
              <AdionFooter />
            </>
          } />
          <Route path="/services" element={
            <>
              <Navbar />
              <Services />
              <AdionFooter />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Navbar />
              <ContactForm />
              <AdionFooter />
            </>
          } />
          <Route path="/gallery" element={<StandaloneGallery />} />
          <Route path="/privacy-policy" element={
            <>
              <Navbar />
              <PrivacyPolicy />
              <AdionFooter />
            </>
          } />
          <Route path="/terms-conditions" element={
            <>
              <Navbar />
              <TermsConditions />
              <AdionFooter />
            </>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
