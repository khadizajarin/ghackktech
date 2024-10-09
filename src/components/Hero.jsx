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

const Hero = () => {
    return (
      <section className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.shutterstock.com/image-photo/greek-mythologyinspired-background-169-aspect-260nw-2501167313.jpg)' }}>
        <div className="hero-overlay bg-primary bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold animate-bounce text-secondary" style={{ fontFamily: cinzel_decorative.style.fontFamily,  fontWeight: '900' }}>Lore Olympus</h1>
            <p className="mb-5 text-accent" style={{ fontFamily: cinzel.style.fontFamily,  fontWeight: '900' }}>
              A modern retelling of the story of Hades and Persephone.
            </p>
            <button className="btn btn-primary text-secondary " style={{ fontFamily: cinzel_decorative.style.fontFamily,  fontWeight: '900' }}>Read More</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  