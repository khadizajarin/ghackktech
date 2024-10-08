import Image from "next/image";

// components/Characters.js
const characters = [
    { name: 'Persephone', image: '/path/to/persephone.jpg', description: 'Goddess of Spring.' },
    { name: 'Hades', image: '/path/to/hades.jpg', description: 'God of the Underworld.' },
    // Add more characters here
  ];
  
  const Characters = () => {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Main Characters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((character) => (
              <div key={character.name} className="card shadow-lg">
                <figure>
                  <Image src={character.image} alt={character.name} className="rounded-t-lg" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{character.name}</h3>
                  <p>{character.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Characters;
  