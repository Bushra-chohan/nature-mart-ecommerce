import React, { useState, useEffect } from 'react';
import slider1 from '../assets/home_slider_1.jpg';
import slider2 from '../assets/home_slider_2.png'
import Button from './Button';


function HomeSlider() {

  const sliderContent = [
    { 
      image: slider1,
      heading: (
        <>
        Free Shipping on orders over <span className='text-green-600'>$100</span>
        </>
      ),
      subText: "Free shipping to first-time customers only. After promotions and discounts are applied.",
      position: 'end'
    },
    {
      image: slider2,
      heading: "NatureMart For Fresh Grocery",
      subText: "Introduced a new model for online grocery shopping and convenient home delivery",
      position:'start'
    }
  ];

  const [current, setCurrent] = useState(0);
  const length = sliderContent.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === length - 1 ? 0 : prev + 1))
    }, 5000);
  
    return () => {
      clearInterval(interval)
    }
  }, [length])
  

  return (
    <div className="relative h-[400px] overflow-hidden">

      
      {sliderContent.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out
            ${index === current ? 'opacity-100 z-20' : 'opacity-0 z-10'}
          `}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className={`flex items-center pt-5 h-full 
            ${slide.position === 'start' ? 'justify-start pl-10 text-left' : 'justify-end pr-10 text-right'}
          `}>
            <div className="max-w-md space-y-4  p-5 rounded-md">
              <h1 className="text-5xl font-bold leading-relaxed">{slide.heading}</h1>
              <p className="text-[18px] text-gray-700">{slide.subText}</p>
              <Button />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-xl   text-black rounded-full w-8 h-8 flex items-center justify-center z-30 shadow"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl  text-black rounded-full w-8 h-8 flex items-center justify-center z-30 shadow"
      >
        ›
      </button>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
        {sliderContent.map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)} className="p-1">
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
              ${current === index ? 'bg-black' : 'bg-black/50'}`}
            ></div>
          </button>
        ))}
      </div>

    </div>
  );
}

export default HomeSlider;
