import React, { useState, useEffect } from 'react';
import LandingPage from '../../../src/assets/BTC2024_live.mp4'; 
import LandingPage2 from '../../TBC2024_V2/src/assets/landing_page.png'; 
import PurpleBg from '../../TBC2024_V2/src/assets/BG_P-01.png'; 

const Section1 = () => {
  const text1 = 'ticket now';
  const text2 = 'knowledge';
  const [displayText, setDisplayText] = useState(''); 
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    let currentText = text1;
    let nextText = text2;
    let typingForward = true;

    const typingEffect = () => {
      setIsTyping(true);

      if (typingForward) {
        if (index < currentText.length) {
          // Display current text up to index
          setDisplayText(currentText.substring(0, index + 1));
          index++;
        } else {
          // Once full text is typed, start deleting
          typingForward = false;
          setTimeout(() => setIsTyping(false), 500); // Small pause before deleting
        }
      } else {
        if (index > 0) {
          // Delete the text character by character
          setDisplayText(currentText.substring(0, index - 1));
          index--;
        } else {
          // Once text is fully deleted, swap texts and type next text
          typingForward = true;
          [currentText, nextText] = [nextText, currentText]; // Swap texts for typing loop
          setTimeout(() => setIsTyping(true), 500); // Small pause before typing next text
        }
      }
    };

    const intervalId = setInterval(typingEffect, 200); // Adjust typing speed as needed

    return () => clearInterval(intervalId);
  }, []);

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
        height: '170vh', // Height for both video and image sections
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        boxSizing: 'border-box',
        position: 'relative', // Ensure position relative for absolute positioning inside
      }}
    >
      {/* Video Section */}
      <div
        style={{
          width: '100%',
          height: '100vh', // Full viewport height
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'hidden',
        }}
      >
        <video
          src={LandingPage}
          autoPlay
          muted
          loop
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            zIndex: 1, // Ensure the video is on top
          }}
        />
      </div>

      {/* Image Section with Background */}
      <div
        style={{
          width: '100%',
          height: '80vh', // Full viewport height
          position: 'absolute',
          top: '100vh', // Position below the video
          left: 0,
          overflow: 'hidden',
          zIndex: 2, // Ensure the image is on top of other content
          backgroundImage: `url(${PurpleBg})`, // Set background image
          backgroundSize: 'cover', // Cover the entire container
          backgroundPosition: 'center', // Center the background image
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
            e.target.onerror = null; // Prevent infinite loop in case of error
            e.target.src = 'https://via.placeholder.com/1920x1080.png?text=Image+Not+Found'; // Placeholder image if the original fails to load
          }}
        />
      </div>

      {/* Text and Buttons Section */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%', // Position from the bottom
          left: '50%', // Center horizontally
          transform: 'translateX(-50%)', // Adjust horizontal centering
          textAlign: 'center', // Center text
          zIndex: 3, // Ensure text and buttons are on top
          color: '#ffffff', // Text color
          fontFamily: 'Inter, sans-serif', // Use Inter font
          fontSize: '36px', // Larger font size
          whiteSpace: 'nowrap', // Prevent text from wrapping to the next line
        }}
      >
        {/* Typing Animation */}
        <span>Get your </span>
        <span
          style={{
            display: 'inline',
            borderRight: '2px solid #ffffff', // Cursor effect
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            animation: isTyping ? 'blink-caret .75s step-end infinite' : 'none',
            fontFamily: 'Inter, sans-serif', // Use Inter font
            fontSize: '36px', // Larger font size
            color: '#ffffff', // White text color
          }}
        >
          {displayText}
        </span>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '10px', // Space between buttons
            justifyContent: 'center', // Center buttons
            marginTop: '20px', // Space between text and buttons
          }}
        >
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#ffffff', // Button background color
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center', // Center icon and text vertically
            }}
            onClick={handleBahtClick} // Link to the baht URL
            className="baht-button" // Add a class for styling
          >
            <i className="fa-brands fa-bitcoin baht-icon" style={{ marginRight: '8px', fontSize: '24px' }}></i>
            <span className="baht-text">via baht</span>
          </button>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#ff7700', // Button background color
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center', // Center icon and text vertically
              color: '#ffffff', // Button text color
            }}
            onClick={handleLightningClick} // Link to the lightning URL
          >
            <i className="fa-solid fa-bolt" style={{ marginRight: '8px' }}></i>
            via lightning
          </button>
        </div>
      </div>

      {/* Add keyframes and responsive styles directly to the JSX */}
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
          .baht-button {
            background-color: #ffffff; /* Maintain white background for button */
          }
          .baht-text, .baht-icon {
            color: grey !important; /* Change text and icon color to grey */
          }
        }
      `}</style>
    </div>
  );
};

export default Section1;
