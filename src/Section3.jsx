import React, { useState, useEffect, useRef } from 'react';
import OrangeBg from '../../TBC2024_V2/src/assets/BG-01.png';
import AnotherImage1 from '../../TBC2024_V2/src/assets/agenda/14-mainstage.png'; 
import AnotherImage2 from '../../TBC2024_V2/src/assets/agenda/14-ADVANCEDSTAGE.png'; 
import AnotherImage3 from '../../TBC2024_V2/src/assets/agenda/15-mainstage.png';
import AnotherImage4 from '../../TBC2024_V2/src/assets/agenda/15-advancedstage.png'; 
import AnotherImage5 from '../../TBC2024_V2/src/assets/agenda/15-beginnerstage.png';
import TransportImage1 from '../../TBC2024_V2/src/assets/transport/transport1.jpg';
import TransportImage2 from '../../TBC2024_V2/src/assets/transport/transport2.jpg'; 

const Section3 = () => {
  const [showImages, setShowImages] = useState('button14'); // Initialize to 'button14' to show Button 14's images by default
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // State to handle responsiveness

  // States to handle animation
  const [isAgendaVisible, setIsAgendaVisible] = useState(false);
  const [isConferenceVisible, setIsConferenceVisible] = useState(false);
  
  const agendaRef = useRef(null);
  const conferenceRef = useRef(null);

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsAgendaVisible(entry.isIntersecting),
      { threshold: 0.1 } // Adjust as needed
    );

    if (agendaRef.current) {
      observer.observe(agendaRef.current);
    }

    return () => {
      if (agendaRef.current) {
        observer.unobserve(agendaRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsConferenceVisible(entry.isIntersecting),
      { threshold: 0.1 } // Adjust as needed
    );

    if (conferenceRef.current) {
      observer.observe(conferenceRef.current);
    }

    return () => {
      if (conferenceRef.current) {
        observer.unobserve(conferenceRef.current);
      }
    };
  }, []);

  return (
    <div
      id="section3"
      style={{
        width: '100vw',
        minHeight: '100vh', // Changed to minHeight to allow dynamic expansion
        position: 'relative',
        zIndex: 1,
        backgroundImage: `url(${OrangeBg})`, // Set OrangeBg as the background image
        backgroundSize: 'cover', // Ensure the background image covers the entire section
        backgroundPosition: 'center', // Center the background image
        display: 'flex', // Flex container to align content properly
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // Start from the top of the section
        padding: '20px', // Padding for better spacing around the content
      }}
    >
     {/* Button 14 */}
<button
  style={{
    position: 'absolute',
    top: isMobile ? '4rem' : '10rem', // Position changes based on screen size
    left: '1rem',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#FF5733', // Button background color
    color: '#FFFFFF', // Text color
    fontSize: '24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 10, // Ensure the button stays on top
  }}
  onClick={() => setShowImages('button14')} // Show images for Button 14 on click
>
  14
</button>

{/* Button 15 */}
<button
  style={{
    position: 'absolute',
    top: isMobile ? '8rem' : '14rem', // Position changes based on screen size
    left: '1rem',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'black', // Button background color
    color: '#FFFFFF', // Text color
    fontSize: '24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 10, // Ensure the button stays on top
  }}
  onClick={() => setShowImages('button15')} // Show images for Button 15 on click
>
  15
</button>



      {/* Agenda Text */}
      <div
        ref={agendaRef}
        style={{
          position: 'relative', // Positioned relative to the flex container
          marginTop: '3rem', // Margin to create space above the text
          zIndex: 10,
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 1.5)',
          padding: '10px 20px',
          borderRadius: '5px',
          opacity: isAgendaVisible ? 1 : 0,
          transform: isAgendaVisible ? 'translateY(0)' : 'translateY(-50px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}
      >
        Agenda
      </div>

      {/* Displayed Images for Button 14 */}
      {showImages === 'button14' && (
        <div
          style={{
            position: 'relative',
            marginTop: '2rem', // Margin to create space above the images
            zIndex: 5,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            width: '100%',
            maxWidth: '100%',
          }}
        >
          <div
            style={{
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '10px',
              width: '100%',
              maxWidth: '400px',
            }}
          >
            <img
              src={AnotherImage1}
              alt="Overlay Image 1"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'brightness(1.2)',
              }}
            />
          </div>
          <div
            style={{
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '10px',
              width: '100%',
              maxWidth: '400px',
            }}
          >
            <img
              src={AnotherImage2}
              alt="Overlay Image 2"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'brightness(1.2)',
              }}
            />
          </div>
        </div>
      )}

      {/* Displayed Images for Button 15 */}
      {showImages === 'button15' && (
        <div
          style={{
            position: 'relative',
            marginTop: '2rem',
            zIndex: 5,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            width: '100%',
            maxWidth: '100%',
          }}
        >
          <div
            style={{
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '10px',
              width: '100%',
              maxWidth: '400px',
            }}
          >
            <img
              src={AnotherImage3}
              alt="Overlay Image 3"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'brightness(1.2)',
              }}
            />
          </div>
          <div
            style={{
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '10px',
              width: '100%',
              maxWidth: '400px',
            }}
          >
            <img
              src={AnotherImage4}
              alt="Overlay Image 4"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'brightness(1.2)',
              }}
            />
          </div>
          <div
            style={{
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '10px',
              width: '100%',
              maxWidth: '400px',
            }}
          >
            <img
              src={AnotherImage5}
              alt="Overlay Image 5"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                filter: 'brightness(1.2)',
              }}
            />
          </div>
        </div>
      )}

      {/* How to get the Conference Text */}
      <div
        ref={conferenceRef}
        style={{
          position: 'relative',
          marginTop: '4rem', // Margin to create space above the text
          zIndex: 10,
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
          padding: '10px 20px',
          borderRadius: '5px',
          opacity: isConferenceVisible ? 1 : 0,
          transform: isConferenceVisible ? 'translateY(0)' : 'translateY(-50px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}
      >
        How to get the conference
      </div>

      {/* Transport Images */}
      <div
        style={{
          position: 'relative',
          marginTop: '2rem', // Margin to create space above the images
          zIndex: 5,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
          maxWidth: '100%',
        }}
      >
        <div
          style={{
            padding: '20px',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '600px',
          }}
        >
          <img
            src={TransportImage1}
            alt="Transport Image 1"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              filter: 'brightness(1.2)',
            }}
          />
        </div>
        <div
          style={{
            padding: '20px',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '600px',
          }}
        >
          <img
            src={TransportImage2}
            alt="Transport Image 2"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              filter: 'brightness(1.2)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
