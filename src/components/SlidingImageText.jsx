/* eslint-disable react/prop-types */
"use client"
import { useState, useEffect } from 'react';
import { Cinzel_Decorative, Cinzel } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
});

const cinzel_decorative = Cinzel_Decorative({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
});

const SlidingImageText = ({ images, intervalDuration, className, text,description }) => {
  const [showImage, setShowImage] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        setShowImage(prev => !prev); // Toggle between showing image and text
      }, intervalDuration); // Change every specified interval
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [intervalDuration, isHovered]);

  return (
    <div 
      className={`relative w-full h-full overflow-hidden ${className}`} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className={`absolute top-0 -left-1  w-full h-full flex justify-center items-center transition-transform duration-500 ${showImage ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-cover w-full h-full" style={{ 
          backgroundImage: `url(${images})`
        }}>
          {/* Your image content */}
        </div>
      </div>

      {/* Text container */}
      <div className={`absolute top-0 lg:-left-1  w-full h-full flex justify-center items-center transition-transform duration-500 ${showImage ? '-translate-x-full' : 'translate-x-0'}`}>
        {/* Your text content */}
        <div className="text-center text-white">
          <h1 className="flex justify-center items-center lg:gap-6 gap-1 text-4xl text-secondary" style={{ fontFamily: cinzel_decorative.style.fontFamily, fontWeight: '900' }}> {text}</h1>
          <p className=" lg:text-2xl text-xl lg:my-4 my-1 lg:px-4 px-4 text-secondary font-semibold text-opacity-60" style={{ fontFamily: cinzel.style.fontFamily, fontWeight: '400' }}> {description}</p>
        </div>
      </div>
    </div>
  );
};

export default SlidingImageText;