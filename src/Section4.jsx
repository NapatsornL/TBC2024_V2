import React, { useState, useEffect, useRef } from 'react';
import LandingPageImage from './assets/BG2-01.png';

// Import all the sponsor logos
import logo1 from './assets/sponsor-logo/1true.png';
import logo2 from './assets/sponsor-logo/2bob.png';
import logo3 from './assets/sponsor-logo/3lates.png';
import logo4 from './assets/sponsor-logo/4chitbeer.png';
import logo5 from './assets/sponsor-logo/5neutronpay.png';
import logo6 from './assets/sponsor-logo/6newyork.png';
import logo7 from './assets/sponsor-logo/7toffecake.png';
import logo8 from './assets/sponsor-logo/8bitcoinlearning.png';
import logo9 from './assets/sponsor-logo/9sup.png';
import logo10 from './assets/sponsor-logo/10mebit.png';
import logo11 from './assets/sponsor-logo/11crossvibe.png';
import logo12 from './assets/sponsor-logo/12lumen.png';
import logo13 from './assets/sponsor-logo/13digdig.png';
import logo14 from './assets/sponsor-logo/14bitcoinVN.png';
import logo15 from './assets/sponsor-logo/15fedi.png';
import logo16 from './assets/sponsor-logo/16jts.png';
import logo17 from './assets/sponsor-logo/17.png';
import logo18 from './assets/sponsor-logo/18crispywill.png';
import logo19 from './assets/sponsor-logo/19seed.png';
import logo20 from './assets/sponsor-logo/20bitkub.png';
import logo21 from './assets/sponsor-logo/21theburgest.png';
import logo22 from './assets/sponsor-logo/22radarspoint.png';
import logo23 from './assets/sponsor-logo/23beerpot.png';
import logo24 from './assets/sponsor-logo/24oasis.png';
import logo25 from './assets/sponsor-logo/25iwear.png';
import logo26 from './assets/sponsor-logo/26cdc.png';
import logo27 from './assets/sponsor-logo/27codekids.png';
import logo28 from './assets/sponsor-logo/28lunchblock.png';
import logo29 from './assets/sponsor-logo/29.png';
import logo30 from './assets/sponsor-logo/30.png';

// Import all the media partner logos
import mediaLogo1 from './assets/media-logo/1.png';
import mediaLogo2 from './assets/media-logo/2.png';
import mediaLogo3 from './assets/media-logo/3.png';
import mediaLogo4 from './assets/media-logo/4.png';
import mediaLogo5 from './assets/media-logo/5.png';
import mediaLogo6 from './assets/media-logo/6.png';
import mediaLogo7 from './assets/media-logo/7.png';
import mediaLogo8 from './assets/media-logo/8.png';
import mediaLogo9 from './assets/media-logo/9.png';
import mediaLogo10 from './assets/media-logo/10.png';
import mediaLogo11 from './assets/media-logo/11.png';
import mediaLogo12 from './assets/media-logo/12.png';
import mediaLogo13 from './assets/media-logo/13.png';
import mediaLogo14 from './assets/media-logo/14.png';

const Section4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sponsorRef = useRef(null);
  const mediaTextRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sponsorRef.current) {
      observer.observe(sponsorRef.current);
    }
    if (mediaTextRef.current) {
      observer.observe(mediaTextRef.current);
    }

    return () => {
      if (sponsorRef.current) {
        observer.unobserve(sponsorRef.current);
      }
      if (mediaTextRef.current) {
        observer.unobserve(mediaTextRef.current);
      }
    };
  }, []);

  const logos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19,
    logo20, logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28,
    logo29, logo30
  ];

  const mediaLogos = [
    mediaLogo1, mediaLogo2, mediaLogo3, mediaLogo4, mediaLogo5, mediaLogo6,
    mediaLogo7, mediaLogo8, mediaLogo9, mediaLogo10, mediaLogo11, mediaLogo12,
    mediaLogo13, mediaLogo14
  ];

  const getResponsiveStyles = () => {
    const width = window.innerWidth;
    let logoSize = '12vw'; // Default size for sponsor logos
    let mediaLogoSize = '12vw'; // Default size for media partner logos
    let containerPadding = '0 10vw'; // Default padding

    if (width <= 500) {
      logoSize = '15vw'; // Increase for small screens
      mediaLogoSize = '15vw'; // Increase for small screens
      containerPadding = '0 5vw'; // Adjust padding for small screens
    } else if (width <= 768) {
      logoSize = '14vw'; // Increase for medium screens
      mediaLogoSize = '14vw'; // Increase for medium screens
      containerPadding = '0 8vw'; // Adjust padding for medium screens
    } else if (width <= 1024) {
      logoSize = '12vw'; // Maintain size for larger screens
      mediaLogoSize = '12vw'; // Maintain size for larger screens
      containerPadding = '0 10vw'; // Adjust padding for larger screens
    } else {
      logoSize = '10vw'; // Decrease for extra large screens
      mediaLogoSize = '10vw'; // Decrease for extra large screens
      containerPadding = '0 15vw'; // Adjust padding for extra large screens
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
        background: `url(${LandingPageImage}) no-repeat center center`,
        backgroundSize: 'cover',
        boxSizing: 'border-box',
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
        height: logoSize,
        width: logoSize,
        margin: '10px', // Margin around each logo
        zIndex: 1,
        animation: isVisible ? 'fadeInUp 1s ease-out' : 'none',
      },
      mediaLogo: {
        height: mediaLogoSize,
        width: mediaLogoSize,
        margin: '10px', // Margin around each media logo
        zIndex: 1,
        animation: isVisible ? 'fadeInUp 1s ease-out' : 'none',
      },
      sponsorText: {
        position: 'relative',
        textAlign: 'center',
        margin: '40px 0 20px 0', // Increased space above logos
        zIndex: 2,
        color: 'white',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-out, transform 1s ease-out',
        animation: isVisible ? 'fadeInDown 1s ease-out' : 'none',
      },
      mediaPartnerText: {
        position: 'relative',
        textAlign: 'center',
        margin: '40px 0 20px 0', // Increased space above logos
        zIndex: 2,
        color: 'white',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)',
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? 'fadeInDown 1s ease-out' : 'none',
      },
      logoContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        zIndex: 2,
        marginBottom: '40px', // Increased space below logos
        width: '100%', // Ensure full width
        padding: '0', // Remove padding to ensure logos are centered
        boxSizing: 'border-box', // Ensure padding is included in the width
      },
      mediaLogoContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '15px',
        zIndex: 2,
        marginBottom: '40px', // Increased space below media logos
        width: '100%', // Ensure full width
        padding: '0', // Remove padding to ensure logos are centered
        boxSizing: 'border-box', // Ensure padding is included in the width
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

      {/* Sponsor Logos */}
      <div style={styles.logoContainer}>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Sponsor Logo ${index + 1}`} style={styles.logo} />
        ))}
      </div>
      
      {/* "Media Partners" Text */}
      <div
        ref={mediaTextRef}
        style={styles.mediaPartnerText}
      >
        Media Partners
      </div>
      
      {/* Media Partner Logos */}
      <div style={styles.mediaLogoContainer}>
        {mediaLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Media Logo ${index + 1}`} style={styles.mediaLogo} />
        ))}
      </div>
      
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Section4;
