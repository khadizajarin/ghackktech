import Image from "next/image";
import { Cinzel_Decorative, Cinzel } from 'next/font/google';
import SlidingImageText from "./SlidingImageText";

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

// components/Characters.js
const characters = [
  { name: 'Persephone', image: 'https://legendaryladieshub.com/wp-content/uploads/2023/08/Persephone_0-640x620.jpg', description: 'Goddess of Spring.' },
  { name: 'Hades', image: 'https://mythlok.b-cdn.net/wp-content/uploads/2024/04/Mythlok-Hades.jpg', description: 'God of the Underworld.' },
  { name: 'Zeus', image: 'https://www.greekmythology.com/images/mythology/zeus_image_1.jpg', description: 'King of the Gods.' },
  { name: 'Hera', image: 'https://www.greekmythology.com/images/mythology/hera_image_5.jpg', description: 'Queen of the Gods.' },
  { name: 'Apollo', image: 'https://mythlok.com/wp-content/uploads/2022/04/Apollo_.jpg', description: 'God of the Sun.' },
  { name: 'Artemis', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXbGPQMoXHmniAH7nQqfqI6Nq74sm4_pFZA&s', description: 'Goddess of the Hunt.' },
  { name: 'Athena', image: 'https://www.greekmythology.com/images/mythology/athena_image_7.jpg', description: 'Goddess of Wisdom.' },
  { name: 'Ares', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuGynf-ErXKF3C5OIZl-xMj1n74jYRbxinw&s', description: 'God of War.' }
];

const Characters = () => {
  return (
    <section className="lg:py-12 py-6 bg-primary text-secondary">
      <div className="container mx-auto lg:px-28 px-4 pt-10 ">
        <h2 className="text-3xl font-bold text-center mb-20" style={{ fontFamily: cinzel_decorative.style.fontFamily, fontWeight: '900' }}>Main Characters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:h-[90vh] h-[400vh]">
          {characters.map((character) => (
            <SlidingImageText key={character.name} intervalDuration={4000} text={character.name} description={character.description} images={character.image} className="">
            </SlidingImageText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters;
