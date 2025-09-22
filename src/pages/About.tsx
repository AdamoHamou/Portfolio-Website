import React from 'react';
import Typewriter from '../components/Typewriter';

const stackIcons = [
  { name: 'C', src: '/tech/C.svg' },
  { name: 'C++', src: '/tech/C++ (CPlusPlus).svg' },
  { name: 'JavaScript', src: '/tech/JavaScript.svg' },
  { name: 'Python', src: '/tech/Python.svg' },
  { name: 'TypeScript', src: '/tech/TypeScript.svg' },
  { name: 'AWS', src: '/tech/AWS.svg' },
  { name: 'AWS CloudFormation', src: '/tech/CloudFormation.svg' },
  { name: 'AWS DynamoDB', src: '/tech/DynamoDB.svg' },
  { name: 'AWS EC2', src: '/tech/EC2.svg' },
  { name: 'AWS S3', src: '/tech/Simple Storage Service.svg' },
  { name: 'AWS Lambda', src: '/tech/Lambda.svg' },
  { name: 'scikit-learn', src: '/tech/scikit-learn.svg' },
  { name: 'React', src: '/tech/React.svg' },
  { name: 'Vite.js', src: '/tech/Vite.js.svg' },
  { name: 'Tailwind CSS', src: '/tech/Tailwind CSS.svg' },

] as const;


const About: React.FC = () => {
  const typewriterProps = {
    prefix: " ",
    words: ["Developer", "Gamer", "Software Engineer", "StrawHat"],
    typingSpeed: 80,
    deletingSpeed: 45,
    delayBetweenWords: 2000,
    className: 'text-white'
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-white py-12">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <h1 className="mb-10"></h1>

        {/* Desktop: grid with 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LEFT BOX */}
          <article className="bg-transparent border border-white/20 rounded-md overflow-hidden flex flex-col
                    h-auto lg:h-auto md:overflow-visible overflow-y-auto backdrop-blur-sm">
            <div className="px-6 pt-6 text-center">
              <h3 className="text-lg font-semibold underline">Tech Stack</h3>
              <p className="text-sm text-gray-300 mt-1">Technologies I have experience with
                <p>(to be expanded)</p>
              </p>

            </div>

            <div className="flex-1 px-6 pb-6">
              {/* On desktop, pack to bottom; on mobile just flow naturally */}
              <div className="grid grid-cols-3 md:h-full md:content-end">
                {stackIcons.map((icon) => (
                  <div
                    key={icon.name}
                    className="aspect-square rounded-md flex items-center justify-center overflow-hidden"
                    title={icon.name}
                  >
                    <img
                      src={icon.src}
                      alt={icon.name}
                      className="w-3/5 h-3/5 object-contain transition-transform duration-200 hover:scale-120"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* RIGHT SIDE → TWO STACKED BOXES */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-6 h-auto lg:h-auto min-h-0">
            <article className="bg-transparent border border-white/20 rounded-md overflow-hidden flex flex-col h-auto lg:flex-1 min-h-0">
              <div className="flex-1 p-6 flex flex-col justify-between backdrop-blur-sm">
                <h3 className="text-2xl font-semibold underline">About me</h3>
                <p className="text-sm text-gray-300 mt-1">
                  My Name is Adam Hamou
                  <br />
                  <br />
                  I'm a <Typewriter {...typewriterProps} />
                  with a passion for building scalable and efficient applications.
                  I have experience in both frontend and backend development, and I enjoy working with modern technologies to create seamless user experiences.
                  <br />
                  <br />
                  In my free time, I like to play video games, watch anime, collect trading cards, and eat!
                  <br />
                  <br />
                  I love to stay active by playing basketball, pickleball, rock climbing, and the ocassional run.
                </p>
                <div className="mt-4">
                </div>
              </div>
            </article>
            <article className="bg-transparent border border-white/20 rounded-md overflow-hidden flex flex-col h-auto lg:flex-1 min-h-0">
              <div className="flex-1 p-6 flex flex-col gap-3 lg:gap-2 justify-start backdrop-blur-sm">
                <h3 className="text-2xl font-semibold underline">Ranking Lists</h3>
                {/* 3 Categories: stacked on mobile, side by side on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-2">
                  {/* Anime */}
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-1">Anime</h4>
                    <ol className="list-decimal list-inside text-gray-300 space-y-1">
                      <li>One Piece</li>
                      <li>Attack on Titan</li>
                      <li>Vinland Saga</li>
                      <li>Hunter x Hunter</li>
                      <li>Dragon Ball Z</li>
                    </ol>
                  </div>

                  {/* Video Games */}
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">Video Games</h4>
                    <ol className="list-decimal list-inside text-gray-300 space-y-1">
                      <li>Minecraft</li>
                      <li>League of Legends</li>
                      <li>Terraria</li>
                      <li>Resident Evil 4</li>
                      <li>GTA 4</li>
                    </ol>
                  </div>

                  {/* Cuisine */}
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">Cusine</h4>
                    <ol className="list-decimal list-inside text-gray-300 space-y-1">
                      <li>Mediteranean</li>
                      <li>Vietnemese</li>
                      <li>Japanese</li>
                      <li>Indian</li>
                      <li>Chinese</li>
                    </ol>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
        <h1 className="mb-10"></h1>
      </div>
    </div>
  );
};

export default About;
