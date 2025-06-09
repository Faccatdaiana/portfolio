import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="text-2xl font-bold text-pink-500">
            Meu Portfólio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-pink-400 transition-colors">
              Sobre Mim
            </a>
            <a href="#education" className="text-white hover:text-pink-400 transition-colors">
              Educação
            </a>
            <a href="#career" className="text-white hover:text-pink-400 transition-colors">
              Carreira
            </a>
            <a href="#travels" className="text-white hover:text-pink-400 transition-colors">
              Viagens
            </a>
            <a href="#contact" className="text-white hover:text-pink-400 transition-colors">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-pink-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black bg-opacity-95 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <a 
                href="#about" 
                className="text-white hover:text-pink-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre Mim
              </a>
              <a 
                href="#education" 
                className="text-white hover:text-pink-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Educação
              </a>
              <a 
                href="#career" 
                className="text-white hover:text-pink-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Carreira
              </a>
              <a 
                href="#travels" 
                className="text-white hover:text-pink-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Viagens
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-pink-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;