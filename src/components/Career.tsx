import React from 'react';
import { Briefcase, CheckCircle } from 'lucide-react';

const Career: React.FC = () => {
  const skills = [
  "Teste Manual",
  "Teste Automatizado",
  "Casos de Teste",
  "Rastreamento de Bugs",
  "Teste de Regressão",
  "Teste Funcional",
  "Metodologias Ágeis",
  "Redmineup",
  "Selenium"
  ];

  return (
    <section id="career" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Carreira</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
           Meu objetivo é me tornar especialista em QA para melhorar processos e garantir softwares de qualidade.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center mr-4">
                  <Briefcase size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Experiência Profissional</h3>
              </div>

              <div className="mb-8 border-l-2 border-pink-500 pl-6">
                <h4 className="text-xl font-semibold text-white mb-2">QA/Tester</h4>
                <p className="text-pink-400 mb-2">INFISC – Transformação Digital</p>
                <p className="text-gray-500 mb-4">2021 – Atualmente</p>
                <p className="text-gray-300">
                  Atuo na liderança dos esforços de garantia de qualidade em múltiplas aplicações web e mobile.
                  Desenvolvo e mantenho suítes de testes automatizados, realizo testes manuais e colaboro com as equipes de desenvolvimento para assegurar a qualidade do software em todo o ciclo de vida do desenvolvimento.
                </p>
              </div>

          
            </div>
          </div> 

          <div className="md:w-1/2">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Habilidades</h3>

              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={18} className="text-pink-500 mr-2" />
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;