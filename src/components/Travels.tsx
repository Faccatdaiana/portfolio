import React, { useState } from 'react';
import { travelData } from '../data/travelData';
import { MapPin, Calendar } from 'lucide-react';

const Travels: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="travels" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Minhas Viagens</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Gosto muito de viajar e conhecer culturas diferentes. 
            Aqui estão alguns momentos legais das minhas viagens.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelData.map((item, index) => (
            <div 
              key={index} 
              className="bg-black rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.location} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin size={18} className="text-pink-500 mr-2" />
                  <h3 className="text-xl font-bold text-white">{item.location}</h3>
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.date}</span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img 
                  src={travelData[selectedImage].imageUrl} 
                  alt={travelData[selectedImage].location}
                  className="w-full rounded-lg shadow-2xl"
                />
                <button 
                  className="absolute top-4 right-4 bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center"
                  onClick={closeModal}
                >
                  ✕
                </button>
              </div>
              <div className="bg-gray-900 p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white mb-2">{travelData[selectedImage].location}</h3>
                <p className="text-gray-400 mb-4">{travelData[selectedImage].date}</p>
                <p className="text-gray-300">{travelData[selectedImage].fullDescription || travelData[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Travels;