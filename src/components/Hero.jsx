// components/Hero.js
const Hero = () => {
    return (
      <section className="hero min-h-screen" style={{ backgroundImage: 'url(/path/to/your/background.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold animate-bounce">Lore Olympus</h1>
            <p className="mb-5">
              A modern retelling of the story of Hades and Persephone.
            </p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  