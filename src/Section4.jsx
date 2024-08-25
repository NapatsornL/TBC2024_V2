import React, { useState, useEffect, useRef } from 'react';
import LandingPageImage from '../../tbc2024_v2/src/assets/BG2-01.png';
import LogoImage from '../../tbc2024_v2/src/assets/logoSpon.png'; 

const Section4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sponsorRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (sponsorRef.current) {
      observer.observe(sponsorRef.current);
    }

    return () => {
      if (sponsorRef.current) {
        observer.unobserve(sponsorRef.current);
      }
    };
  }, []);

  // Inline styles for the "Sponsors" text with animation
  const sponsorTextStyle = {
    position: 'absolute',
    top: '10%',
    left: '50%',
    transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(50px)',
    color: 'white',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  };

  // Handle dynamic styles for responsive design
  const getResponsiveStyles = () => {
    const width = window.innerWidth;
    let logoSize = '85vh';
    let textSize = '2.5rem';
    let textTop = '10%';

    if (width <= 500) {
      logoSize = '36vh';
      textSize = '1.5rem';
      textTop = '30%';
    } else if (width <= 668) {
      logoSize = '49vh';
      textSize = '2rem';
      textTop = '15%';
    } else if (width <= 798) {
      logoSize = '59vh';
      textSize = '2rem';
      textTop = '15%';
    } else if (width <= 1024) {
      logoSize = '69vh';
      textSize = '2.5rem';
      textTop = '12%';
    } else if (width <= 1440) {
      logoSize = '90vh';
      textSize = '2.8rem';
      textTop = '10%';
    }

    return {
      container: {
        height: '90vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
      },
      backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100%',
        objectFit: 'cover',
        zIndex: 0,
      },
      logo: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: logoSize,
        width: 'auto',
        zIndex: 1,
      },
      sponsorText: {
        position: 'absolute',
        top: textTop,
        left: '50%',
        transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(50px)',
        zIndex: 2,
        color: 'white',
        fontSize: textSize,
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-out, transform 1s ease-out',
      },
    };
  };

  const styles = getResponsiveStyles();

  return (
    <div id="section4" style={styles.container}>
      {/* Background Image */}
      <img
        src={LandingPageImage}
        alt="Landing Page"
        style={styles.backgroundImage}
      />
      {/* Centered Logo */}
      <img
        src={LogoImage}
        alt="Logo"
        style={styles.logo}
      />
      {/* "Sponsor" Text at the Top Center */}
      <div
        ref={sponsorRef}
        style={styles.sponsorText}
      >
        Sponsors
      </div>
    </div>
  );
};

export default Section4;
