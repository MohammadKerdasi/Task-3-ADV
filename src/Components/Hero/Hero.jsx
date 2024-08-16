import { useState, useEffect } from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const slides = [
    { location: 'Toronto', title: 'HURRY! GET THE BEST VILLA FOR YOU' },
    { location: 'Toronto', title: 'HURRY! GET THE BEST VILLA FOR YOU' },
    { location: 'Toronto', title: 'HURRY! GET THE BEST VILLA FOR YOU' },

  ];

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = slides.length;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  useEffect(() => {
    if (currentSlide === totalSlides + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 500);
    } else if (currentSlide === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(totalSlides);
      }, 500);
    } else {
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }
  }, [currentSlide, totalSlides]);


  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index + 1); 
  };

  return (
    <div className="MK-hero">
      <div className="MK-background">
        <div className="MK-carousel-container">
          <div className="MK-carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: isTransitioning ? 'transform 0.5s ease' : 'none' }}>
            <div className="MK-slide">
              <div className="MK-location">{slides[totalSlides - 1].location}</div>
              <h1>{slides[totalSlides - 1].title}</h1>
            </div>
            {slides.map((slide, index) => (
              <div className="MK-slide" key={index}>
                <div className="MK-location">{slide.location} , <span className='Mk-cityColor'>Canada</span></div>
                <h1>{slide.title}</h1>
              </div>
            ))}
            <div className="MK-slide">
              <div className="MK-location">{slides[0].location}</div>
              <h1>{slides[0].title}</h1>
            </div>
          </div>

          <button className="MK-prev" onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",}} /></button>
          <button className="MK-next" onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} style={{color: "#ffffff",}} /></button>

          <div className="MK-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`MK-dot ${currentSlide === index + 1 ? 'MK-dot-active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
