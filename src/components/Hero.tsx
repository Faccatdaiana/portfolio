import React from 'react';
import { ChevronDown } from 'lucide-react';
import fotoPerfil from '../assets/foto.jpg';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-500 to-black flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
              Oi, me chamo <span className="text-pink-500">Daiana</span>
            </h1>
            <p className="text-xl text-white opacity-90 mb-8 max-w-lg">
              Sou QA/Tester e trabalho com a garantia da qualidade de software.
            </p>
            <button 
              className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300 shadow-lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Leia mais sobre mim
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-pink-400 opacity-30 absolute -top-4 -left-4"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-pink-400 shadow-2xl relative z-10">
                {/* Replace with your actual photo URL */}
                <img 
                    src={fotoPerfil}
                    alt="Profile" 
                    className="w-full h-full object-cover"
                          />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-white hover:text-pink-300 transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;