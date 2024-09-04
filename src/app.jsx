import React, { useState, useEffect } from 'react';
import './app.css';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import logoTBC from './assets/logoTBC.png'; // Import the logo image

// Navbar component
const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close the menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''} ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="logo">
        <img src={logoTBC} alt="Logo" /> {/* Use the logo image */}
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        ☰ {/* Hamburger icon */}
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a
          href="#section1"
          className={activeSection === 'section1' ? 'active' : ''}
          onClick={handleLinkClick}
        >
          Ticket
        </a>
        <a
          href="#section2"
          className={activeSection === 'section2' ? 'active' : ''}
          onClick={handleLinkClick}
        >
          Speakers
        </a>
        <a
          href="#section3"
          className={activeSection === 'section3' ? 'active' : ''}
          onClick={handleLinkClick}
        >
          Agenda
        </a>
        <a
          href="#section4"
          className={activeSection === 'section4' ? 'active' : ''}
          onClick={handleLinkClick}
        >
          Sponsors
        </a>
      </div>
      <div className={`dropdown ${isOpen ? 'active' : ''}`}>
        <a
          href="#section1"
          className={activeSection === 'section1' ? 'active' : ''}
          onClick={handleLinkClick}
        >
          Ticket
        </a>
        <a
          href="#section2"
          className={activeSection === 'section2' ? 'active' : ''}
          onClick={handleLinkClick}
        >
          Speakers
        </a>
        <a
          href="#section3"
          className={activeSection === 'section3' ? 'active' : ''}
          onClick={handleLinkClick}
        >
          Agenda
        </a>
        <a
          href="#section4"
          className={activeSection === 'section4' ? 'active' : ''}
          onClick={handleLinkClick}
        >
          Sponsors
        </a>
      </div>
    </nav>
  );
};

// App component
const App = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      ['section1', 'section2', 'section3', 'section4'].forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <Navbar activeSection={activeSection} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default App;
