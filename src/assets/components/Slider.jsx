import React, { useState, useRef, useEffect } from 'react';
import testimonial from "../images/testimonial1.png";
import testimonial2 from "../images/testimonial2.png";
import Certificate from "../images/INTRODUCTION.png";
import Certificate2 from "../images/js.png";
import Certificate3 from "../images/VS.png";
import right from "../images/right.png";
import left from "../images/left.png";
import { useDispatch } from 'react-redux';
import { toggleSlider } from './Redux/Redux';
import close from "../images/close.png"

const Slider = () => {
  const dispatch = useDispatch()
  const images = [testimonial, testimonial2, Certificate, Certificate2, Certificate3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const displaysRef = useRef(null);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleClickOutside = (event) => {
    if (displaysRef.current && !displaysRef.current.contains(event.target)) {
      // Call your function here when clicked outside displays div
      dispatch(toggleSlider())
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="slider">
      <button className='close-button' onClick={() => {
        dispatch(toggleSlider())
      }}><img src={close} alt='close button icon' /></button>
      <div className="black-screen"></div>
      <div className="displays">
        <div ref={displaysRef}>
          <button onClick={goToPreviousImage}><img src={left} alt="Left Arrow" /></button>
          <div className='image-slide'>
            <img src={images[currentImageIndex]} alt="Slider Image" />
          </div>
          <button onClick={goToNextImage}><img src={right} alt="Right Arrow" /></button>
        </div>
      </div>
    </div>
  );
};

export default Slider;