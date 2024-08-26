import React, { useState, useEffect, useRef } from 'react';
import LandingPageImage from './assets/BG2-01.png';

// Import all the new logos
import logo1 from './assets/logo/1true.png';
import logo2 from './assets/logo/2bob.png';
import logo3 from './assets/logo/3lates.png';
import logo4 from './assets/logo/4chitbeer.png';
import logo5 from './assets/logo/5neutronpay.png';
import logo6 from './assets/logo/6newyork.png';
import logo7 from './assets/logo/7toffecake.png';
import logo8 from './assets/logo/8bitcoinlearning.png';
import logo9 from './assets/logo/9sup.png';
import logo10 from './assets/logo/10mebit.png';
import logo11 from './assets/logo/11crossvibe.png';
import logo12 from './assets/logo/12lumen.png';
import logo13 from './assets/logo/13digdig.png';
import logo14 from './assets/logo/14bitcoinVN.png';
import logo15 from './assets/logo/15fedi.png';
import logo16 from './assets/logo/16jts.png';
import logo17 from './assets/logo/17.png';
import logo18 from './assets/logo/18crispywill.png';
import logo19 from './assets/logo/19seed.png';
import logo20 from './assets/logo/20bitkub.png';
import logo21 from './assets/logo/21theburgest.png';
import logo22 from './assets/logo/22radarspoint.png';
import logo23 from './assets/logo/23beerpot.png';
import logo24 from './assets/logo/24oasis.png';
import logo25 from './assets/logo/25iwear.png';
import logo26 from './assets/logo/26cdc.png';
import logo27 from './assets/logo/27codekids.png';
import logo28 from './assets/logo/28lunchblock.png';
import logo29 from './assets/logo/29.png';
import logo30 from './assets/logo/30.png';

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

  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19,
    logo20, logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28,
    logo29, logo30
  ];

  // Handle dynamic styles for responsive design
  const getResponsiveStyles = () => {
    const width = window.innerWidth;
    let logoSize = '12vh'; // Default logo size
    let containerPadding = '0 5vw'; // Default padding for the container
    let logoContainerStyle = { display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '20px', justifyContent: 'center' };

    if (width <= 500) {
      logoSize = '8vh';
      containerPadding = '0 5vw'; // Adjust padding for small screens
      logoContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      };
    } else if (width <= 768) {
      logoSize = '10vh';
      containerPadding = '0 8vw'; // Adjust padding for medium screens
      logoContainerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      };
    } else if (width <= 1024) {
      logoSize = '12vh';
      logoContainerStyle = { display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px', justifyContent: 'center' };
    } else {
      logoSize = '14vh'; // Increase logo size for larger screens
      logoContainerStyle = { display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '20px', justifyContent: 'center' };
    }

    return {
      container: {
        height: 'auto',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
        padding: containerPadding,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        height: logoSize, // Adjust logo size based on screen width
        width: 'auto',
        margin: '5px', // Add small margin between logos
        zIndex: 1,
      },
      sponsorText: {
        position: 'relative', // Relative positioning to keep it in flow
        textAlign: 'center',
        margin: '20px 0', // Margin to separate text from logos
        zIndex: 2,
        color: 'white',
        fontSize: logoSize === '8vh' ? '1.5rem' : logoSize === '10vh' ? '2rem' : '2.5rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-out, transform 1s ease-out',
      },
      logoContainer: {
        ...logoContainerStyle,
        zIndex: 2,
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
      
      {/* "Sponsors" Text */}
      <div
        ref={sponsorRef}
        style={styles.sponsorText}
      >
        Sponsors
      </div>

      {/* Logos */}
      <div style={styles.logoContainer}>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Sponsor Logo ${index + 1}`} style={styles.logo} />
        ))}
      </div>
    </div>
  );
};

export default Section4;
