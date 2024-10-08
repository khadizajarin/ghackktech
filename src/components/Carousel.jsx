"use client";
import Image from 'next/image';
import { useState } from 'react';

const manhwas = [
  { title: 'Manhwa 1', image: '/path/to/manhwa1.jpg' },
  { title: 'Manhwa 2', image: '/path/to/manhwa2.jpg' },
  // Add more manhwas here
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % manhwas.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + manhwas.length) % manhwas.length);
  };

  return (
    <section className="carousel py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Supernatural Manhwas</h2>
        <div className="carousel-inner relative w-full overflow-hidden">
          {manhwas.map((manhwa, index) => (
            <div
              key={index}
              className={`carousel-item absolute w-full ${index === current ? 'block' : 'hidden'}`}
            >
              <Image src={manhwa.image} alt={manhwa.title} className="w-full" />
              <div className="carousel-caption absolute text-center">
                <h5 className="text-2xl">{manhwa.title}</h5>
              </div>
            </div>
          ))}
          <button
            className="prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
