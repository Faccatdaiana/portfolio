import React from 'react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Contato</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Ficou com duvidas? Entre em contato comigo!
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-pink-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6"></h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="mr-4 mt-1" size={30} />

                </div>

                <div>
                  <p className="font-semibold mb-3">Encontre-me em:</p>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/daiana-da-silva-65480122a/" className="hover:text-pink-300 transition-colors">
                      <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/Faccatdaiana" className="hover:text-pink-300 transition-colors">
                      <Github size={24} />
                    </a>
                    <a href="https://www.instagram.com/pinkdaiana/" className="hover:text-pink-300 transition-colors">
                      <Instagram size={24} />
                    </a>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">Localização</p>
                  <p>Brazil</p>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 p-8">

              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-400 mb-2">- Contato -</label>
                  <p className="text-white">daianasilva@sou.faccat.br</p>
                </div>



              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;