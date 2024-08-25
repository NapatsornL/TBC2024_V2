import React, { useState, useEffect, useRef } from 'react';
import OrangeBg from './assets/BG-01.png';
import AnotherImage1 from './assets/agenda/14-mainstage.png'; 
import AnotherImage2 from './assets/agenda/14-ADVANCEDSTAGE.png'; 
import AnotherImage3 from './assets/agenda/15-mainstage.png';
import AnotherImage4 from './assets/agenda/15-advancedstage.png'; 
import AnotherImage5 from './assets/agenda/15-beginnerstage.png';
import TransportImage1 from './assets/transport/transport1.jpg';
import TransportImage2 from './assets/transport/transport2.jpg'; 

const Section3 = () => {
  const [activeButton, setActiveButton] = useState('button14'); // Track active button
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
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1,
        backgroundImage: `url(${OrangeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '20px',
      }}
    >
      {/* Button 14 */}
      <button
        style={{
          position: 'absolute',
          top: isMobile ? '4rem' : '10rem',
          left: '1rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: activeButton === 'button14' ? '#FF5733' : 'black', // Dynamic color change
          color: '#FFFFFF',
          fontSize: '24px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 10,
        }}
        onClick={() => setActiveButton('button14')} // Set active button on click
      >
        14
      </button>

      {/* Button 15 */}
      <button
        style={{
          position: 'absolute',
          top: isMobile ? '8rem' : '14rem',
          left: '1rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: activeButton === 'button15' ? '#FF5733' : 'black', // Dynamic color change
          color: '#FFFFFF',
          fontSize: '24px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 10,
        }}
        onClick={() => setActiveButton('button15')} // Set active button on click
      >
        15
      </button>

      {/* Agenda Text */}
      <div
        ref={agendaRef}
        style={{
          position: 'relative',
          marginTop: '3rem',
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
      {activeButton === 'button14' && (
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
      {activeButton === 'button15' && (
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

      {/* "How to go to conference" section */}
      <div
        ref={conferenceRef}
        style={{
          position: 'relative',
          marginTop: '3rem',
          zIndex: 10,
          color: 'white',
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          padding: '10px 20px',
          borderRadius: '5px',
          opacity: isConferenceVisible ? 1 : 0,
          transform: isConferenceVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        }}
      >
        How to go to conference
      </div>

      {/* Transport Images */}
      <div
        style={{
          position: 'relative',
          marginTop: '1rem',
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
            maxWidth: '650px',
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
            maxWidth: '650px',
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
