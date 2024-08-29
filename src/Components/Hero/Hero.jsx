import { useState, useEffect } from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const slides = [
    {
      image: "./../../../public/images/banner-01.jpg",
      country : 'Canada',
      countryImage : './../../../public/images/icons8-canada-48.png',
      location: "Toronto",
      title: "HURRY! GET THE BEST VILLA FOR YOU",
    },
    {
      image: "./../../../public/images/banner-02.jpg",
      country : 'Syria',
      countryImage : './../../../public/images/icons8-syria-48 (1).png',
      location: "Lattakia",
      title: "HURRY! GET THE BEST VILLA FOR YOU",
    },
    {
      image: "./../../../public/images/banner-03.jpg",
      country : 'Palstine ',
      countryImage : './../../../public/images/icons8-palestine-48 (1).png',
      location: "Gaza",
      title: "GET THE BEST VILLA IN PARADISE ON EARTH",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = slides.length;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prevSlide) => (prevSlide - 2 + totalSlides) % totalSlides + 1);
  };

  useEffect(() => {
    if (!isTransitioning) return;
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [isTransitioning]);

 useEffect(() => {
  const container = document.querySelector('.MK-carousel-container');
  if (container) {
       container.style.backgroundImage = `url(${slides[currentSlide - 1].image})`;
    }
 }, [currentSlide]);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index + 1 );
  };

  return (
    <div className="MK-hero">
      <div className="MK-background">
        <div className="MK-carousel-container">
          <div
            className="MK-carousel-track"
            style={{
              transform: `translateX(-${(currentSlide - 1) * 100}%)`,
              transition: isTransitioning ? "transform 0.5s ease" : "none",
            }}
          >
            {slides.map((slide, index) => (
              <div className="MK-slide" key={index}>
                <div className="MK-location">
                  {slide.location} , <span className="Mk-cityColor">{slide.country} {' '} 
                    <span> {' '}<img style={{width : '20px', marginLeft : '5px' }} src={slide.countryImage} alt="" /></span>
                  </span>
                </div>
                <h1>{slide.title}</h1>
              </div>
            ))}
          </div>

          <button className="MK-prev" onClick={prevSlide}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="MK-next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>

          <div className="MK-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`MK-dot ${currentSlide === index + 1 ? "MK-dot-active" : ""}`}
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
