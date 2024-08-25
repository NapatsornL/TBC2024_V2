import React, { useState, useEffect, useRef } from 'react';
import PurpleBg from './assets/BG_P-01.png';
import AnotherImage1 from './assets/speakers/speakers-list/1.png';
import AnotherImage2 from './assets/speakers/speakers-list/2.png'; 
import AnotherImage3 from './assets/speakers/speakers-list/3.png';
import AnotherImage4 from './assets/speakers/speakers-list/4.png'; 
import AnotherImage5 from './assets/speakers/speakers-list/5.png';
import AnotherImage6 from './assets/speakers/speakers-list/6.png';

const Section2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust as needed
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div id="section2" className="section-container">
      {/* First PurpleBg Section with Images */}
      <div className="purple-bg-container">
        <h1
          ref={titleRef}
          className={`section-title ${isVisible ? 'fade-slide' : ''}`}
        >
          Speakers
        </h1>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={AnotherImage1} alt="Overlay Image 1" className="image" />
          </div>
          <div className="image-wrapper">
            <img src={AnotherImage2} alt="Overlay Image 2" className="image" />
          </div>
        </div>
      </div>

      {/* Second PurpleBg Section with Images */}
      <div className="purple-bg-container">
        <div className="image-container">
          <div className="image-wrapper">
            <img src={AnotherImage3} alt="Overlay Image 3" className="image" />
          </div>
          <div className="image-wrapper">
            <img src={AnotherImage4} alt="Overlay Image 4" className="image" />
          </div>
        </div>
      </div>

      {/* Third PurpleBg Section with Images */}
      <div className="purple-bg-container">
        <div className="image-container">
          <div className="image-wrapper">
            <img src={AnotherImage5} alt="Overlay Image 5" className="image" />
          </div>
          <div className="image-wrapper">
            <img src={AnotherImage6} alt="Overlay Image 6" className="image" />
          </div>
        </div>
      </div>

      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .section-container {
            width: 100vw;
            min-height: 100vh;
            position: relative;
          }

          .purple-bg-container {
            width: 100vw;
            background-image: url(${PurpleBg});
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 10px;
            min-height: 100vh;
          }

          .section-title {
            margin-top: 10vh;
            color: #fff;
            font-size: 2.5rem;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            padding: 15px;
            transition: opacity 0.5s, transform 0.5s;
            opacity: 0;
            transform: translateX(-50px);
          }

          /* Fade and Slide Effect */
          .fade-slide {
            animation: fadeSlideIn 2s forwards;
          }

          @keyframes fadeSlideIn {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .image-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
          }

          .image-wrapper {
            border-radius: 10px;
            margin: 5px;
          }

          .image {
            max-height: 85vh;
            object-fit: contain;
          }

          @media (max-width: 768px) {
            .image-container {
              flex-direction: column;
              align-items: center;
            }

            .image {
              max-height: 60vh;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Section2;
