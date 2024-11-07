// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import '../css/slider.css'

function Slider() {
  const imgArray = [
    '../images/Home/home_page_slider_img/img1.jpeg',
    '../images/Home/home_page_slider_img/img2.jpeg',
    '../images/Home/home_page_slider_img/img3.jpeg',
    '../images/Home/home_page_slider_img/img4.jpeg',
    '../images/Home/home_page_slider_img/img5.jpeg',
    '../images/Home/home_page_slider_img/img6.jpeg',
    '../images/Home/home_page_slider_img/img7.jpeg'
  ];

  const [index, setIndex] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [imgArray.length]);

  const currentSlide = (n) => {
    setIndex(n);
  };

  return (
    <div id="slider">
      <div className="slider">
        <img src={imgArray[index]} alt={`Slide ${index + 1}`} />
      </div>

      <div className="dots">
        {imgArray.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => currentSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
