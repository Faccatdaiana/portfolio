import React from 'react';
import { BookOpen, Award, Clock } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Educação</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Minha trajetória acadêmica me proporcionou o conhecimento necessário para atuar com excelência na área da tecnologia.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black p-8 rounded-lg shadow-lg mb-8 border-l-4 border-pink-500">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="flex items-center justify-center md:justify-start">
                  <BookOpen size={24} className="text-pink-500 mr-2" />
                  <span className="text-pink-400 font-semibold">Graduação</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-white mb-2">Sistemas Para Internet</h3>
                <p className="text-gray-400 mb-4">FACCAT - Faculdades Integradas de Taquara</p>
                <div className="flex items-center text-gray-500 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span>2020 - 2024</span>
                </div>
                <p className="text-gray-300">
                  Durante minha formação na FACCAT, desenvolvi uma base sólida em desenvolvimento web, gerenciamento de banco de dados e engenharia de software. 
                  O curso proporcionou experiências práticas com tecnologias modernas e metodologias utilizadas na indústria de software.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black p-8 rounded-lg shadow-lg border-l-4 border-pink-500">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="flex items-center justify-center md:justify-start">
                  <Award size={24} className="text-pink-500 mr-2" />
                  <span className="text-pink-400 font-semibold">Cursos</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-white mb-2">Testes de Software e Banco de Dados</h3>
                <p className="text-gray-400 mb-4">Udemy</p>
                <div className="flex items-center text-gray-500 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span>2021-2024</span>
                </div>
                <p className="text-gray-300">
                  Participei de diversos cursos online com foco em testes manuais e automatizados utilizando Selenium e Java, automação de testes para iniciantes, processo de automação de testes com WebDriver,
                  além de PostgreSQL, do básico ao avançado. Esses cursos fortaleceram meus conhecimentos práticos na área de QA e automação, complementando minha experiência profissional em testes de software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;