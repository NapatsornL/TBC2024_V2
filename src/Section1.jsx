import React, { useRef, useEffect, useState } from 'react';
import LandingPage from './assets/BTC2024_live.mp4'; 
import LandingPage2 from './assets/landing_page.png'; 
import PurpleBg from './assets/BG_P-01.png'; 

const Section1 = () => {
  const text1 = 'ticket now';
  const text2 = 'knowledge';
  const [displayText, setDisplayText] = useState(''); 
  const [isTyping, setIsTyping] = useState(true);
  const videoRef = useRef(null);
  const [videoPlayed, setVideoPlayed] = useState(false);

  useEffect(() => {
    let index = 0;
    let currentText = text1;
    let nextText = text2;
    let typingForward = true;

    const typingEffect = () => {
      setIsTyping(true);

      if (typingForward) {
        if (index < currentText.length) {
          setDisplayText(currentText.substring(0, index + 1));
          index++;
        } else {
          typingForward = false;
          setTimeout(() => setIsTyping(false), 500);
        }
      } else {
        if (index > 0) {
          setDisplayText(currentText.substring(0, index - 1));
          index--;
        } else {
          typingForward = true;
          [currentText, nextText] = [nextText, currentText];
          setTimeout(() => setIsTyping(true), 500);
        }
      }
    };

    const intervalId = setInterval(typingEffect, 200);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        video.play().catch((error) => {
          console.log('Autoplay was prevented:', error);
        });
      };

      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = () => {
        if (!videoPlayed) {
          video.play().then(() => {
            setVideoPlayed(true);
          }).catch((error) => {
            console.log('Autoplay was prevented:', error);
          });
        }
      };

      // Attempt to play the video on user interaction
      window.addEventListener('click', playVideo);
      window.addEventListener('touchstart', playVideo);

      return () => {
        window.removeEventListener('click', playVideo);
        window.removeEventListener('touchstart', playVideo);
      };
    }
  }, [videoPlayed]);

  const handleBahtClick = () => {
    window.location.href = 'https://www.eventpop.me/s/tbc2024';
  };

  const handleLightningClick = () => {
    window.location.href = 'https://rightshift.to/product/tbc2024-event-ticket/';
  };

  return (
    <div
      id="section1"
      style={{
        width: '100%',
        height: '170vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        boxSizing: 'border-box',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '75vh',
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <video
          ref={videoRef}
          src={LandingPage}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
          }}
        />
      </div>

      <div
        style={{
          width: '100%',
          height: '100vh', // Adjusted height to cover remaining space
          position: 'absolute',
          top: '70vh', // Position it right after the vide
          left: 0,
          overflow: 'hidden',
          zIndex: 2,
          backgroundImage: `url(${PurpleBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img
          src={LandingPage2}
          alt="BTC2024_Live"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/1920x1080.png?text=Image+Not+Found';
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          zIndex: 3,
          color: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          fontSize: '36px',
          whiteSpace: 'nowrap',
        }}
      >
        <span>Get your </span>
        <span
          style={{
            display: 'inline',
            borderRight: '2px solid #ffffff',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            animation: isTyping ? 'blink-caret .75s step-end infinite' : 'none',
            fontFamily: 'Inter, sans-serif',
            fontSize: '36px',
            color: '#ffffff',
          }}
        >
          {displayText}
        </span>

        <div
          style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#ffffff',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              color: '#808080', // Grey text color
            }}
            onClick={handleBahtClick}
            className="baht-button"
          >
            <i className="fa-brands fa-bitcoin baht-icon" style={{ marginRight: '8px', fontSize: '24px' }}></i>
            <span className="baht-text">via baht</span>
          </button>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#ff7700',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              color: '#ffffff',
            }}
            onClick={handleLightningClick}
          >
            <i className="fa-solid fa-bolt" style={{ marginRight: '8px' }}></i>
            via lightning
          </button>
        </div>
      </div>

      <style>{`
        @keyframes blink-caret {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: #ffffff;
          }
        }

        @media (max-width: 768px) {
          #section1 {
            height: 200vh;
          }
          #section1 > div:first-child {
            height: 50vh;
          }
          #section1 > div:last-child {
            top: 50vh;
            height: 150vh;
          }
          #section1 > div:first-child video {
            width: 100vw; /* Ensure full viewport width on mobile */
            height: 50vh; /* Adjust video height for mobile */
            object-fit: cover; /* Ensure video covers the container */
          }
        }
      `}</style>
    </div>
  );
};

export default Section1;
