import React from 'react';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Sobre mim</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-lg p-8 transform transition-transform hover:scale-105 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center">
                <GraduationCap size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">Educação</h3>
            <div className="text-gray-300">
              <p className="text-center mb-2">Tecnóloga</p>
              <p className="text-center text-lg font-semibold text-pink-400 mb-2">Sistemas Para Internet</p>
              <p className="text-center mb-4">FACCAT</p>
              <p className="text-center text-sm text-gray-400">Graduada com excelência, com foco em desenvolvimento web e garantia da qualidade de software.</p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 transform transition-transform hover:scale-105 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center">
                <Briefcase size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">Carreira</h3>
            <div className="text-gray-300">
              <p className="text-center mb-2">Garantia da Qualidade</p>
              <p className="text-center text-lg font-semibold text-pink-400 mb-2">Quality Assurance</p>
              <p className="text-center mb-4">Indústria de Software</p>
              <p className="text-center text-sm text-gray-400">Controle de qualidade e foco na entrega de boas experiências aos usuários, com experiência em testes manuais e automatizados.</p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 transform transition-transform hover:scale-105 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center">
                <MapPin size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">Viagens</h3>
            <div className="text-gray-300">
              <p className="text-center mb-2">Exploradora</p>
              <p className="text-center text-lg font-semibold text-pink-400 mb-2">Viajante pelo Mundo</p>
              <p className="text-center mb-4">Aventuras</p>
              <p className="text-center text-sm text-gray-400">Apaixonada por descobrir novas culturas, culinárias e experiências ao redor do mundo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;