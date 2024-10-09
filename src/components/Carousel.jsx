"use client";
import Image from 'next/image';
import { useState } from 'react';
import manhwa1 from "@/assets/manhwa1.png"

// components/Hero.js
import { Cinzel_Decorative,Cinzel } from 'next/font/google'

const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700', '900'],
})

const cinzel_decorative = Cinzel_Decorative({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700', '900'],
  })

const manhwas = [
  { title: 'Leviathan', image: 'https://animemangatoon.com/wp-content/uploads/2024/06/pjimage-12-4-e1720973001888-1140x570.jpg' },
  { title: 'Tower of God', image: 'https://animemangatoon.com/wp-content/uploads/2024/06/season-1-1.jpg' },
  // { title: 'Leveling Up with the Gods', image: 'https://animemangatoon.com/wp-content/uploads/2024/05/594f4d74-e0a2-4179-b8f5-141f140345d0-e1721128805577.jpg' },
  { title: 'Existence', image: 'https://animemangatoon.com/wp-content/uploads/2024/05/Screenshot-2024-06-25-113722-e1721128847688.jpg' },
  { title: 'The Breaker', image:'https://animemangatoon.com/wp-content/uploads/2024/05/650x650_9a375a18096744f1075cfab98ecd25e8f0c2242407633b527cd89760-1-e1721128882154.jpg' },
  { title: 'The First Hunter', image: 'https://animemangatoon.com/wp-content/uploads/2024/05/Screenshot-2024-06-25-191552-e1721129164159-750x375.jpg' },
  { title: 'Supernatural Manhwa: Noblesse', image: 'https://animemangatoon.com/wp-content/uploads/2024/06/Screenshot-2024-06-15-154729-e1721129126183-750x375.jpg' },
  { title: 'Ultimate Outcast', image: 'https://animemangatoon.com/wp-content/uploads/2024/05/manhwa-Greatest-Outcast-e1721129034969-1140x570.jpg' },
  { title: 'Supernatural Manhwa: Unholy Blood', image: 'https://animemangatoon.com/wp-content/uploads/2024/05/Screenshot-2024-06-25-193948-e1721129000296-750x375.jpg' },
  { title: 'Dice: The Cube that Changes Everything', image: 'https://animemangatoon.com/wp-content/uploads/2024/05/Screenshot-2024-06-25-194410-e1721128974884-750x375.jpg' },
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
    <section className="bg-secondary bg-opacity-40 pb-32 pt-20 ">
      <div className="lg:px-40">
        <h2 className="text-3xl font-bold text-center text-primary pb-10" style={{ fontFamily: cinzel.style.fontFamily, fontWeight: '900' }}>Supernatural Manhwas</h2>
        <div className=" relative w-full overflow-hidden " style={{ position: 'relative', height: '500px' }}>
          {manhwas.map((manhwa, index) => (
            <div
              key={index}
              className={`carousel-item absolute w-full transition-opacity duration-500 pb-20 ${index === current ? 'block' : 'hidden'}`}
              style={{ opacity: index === current ? 1 : 0 }}
            >
              <Image src={manhwa.image} width="500" height="500" alt={manhwa.title} className="w-full h-full object-cover" />
              <div className="carousel-caption absolute text-center inset-0 flex flex-col items-center justify-center h-[500px] bg-primary bg-opacity-50">
                <h5 className="text-3xl flex justify-center items-center  text-secondary" style={{ fontFamily: cinzel_decorative.style.fontFamily, fontWeight: '900' }}>{manhwa.title}</h5>
              </div>
            </div>
          ))}
          <button
            className="prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-primary text-secondary px-4 py-2"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="next absolute top-1/2 right-0 transform -translate-y-1/2 bg-primary text-secondary px-4 py-2"
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
