import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Daiana da Silva. Todos os direitos reservados.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-400 flex items-center">
              <Heart size={16} className="mx-1 text-pink-500" /> 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;