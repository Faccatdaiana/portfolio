export interface TravelItem {
  location: string;
  date: string;
  description: string;
  fullDescription?: string;
  imageUrl: string;
}

import madriImg from '../assets/madri.jpg'; // <-- caminho corrigido
import parisImg from '../assets/paris.jpg';
import londresImg from '../assets/londres.jpg';
import romaImg from '../assets/roma.jpg';
import rioImg from '../assets/rio.jpg';
import vaticanoImg from '../assets/vaticano.jpg';

export const travelData: TravelItem[] = [
  {
    location: "Madri, Espanha",
    date: "Março 2025",
    description: "Conhecendo a história e cultura vibrante de Madri.",
    imageUrl: madriImg // <-- imagem local funcionando
  },
  {
    location: "Londres, Reino Unido",
    date: "Março 2025",
    description: "Explorando os pontos turísticos históricos e modernos de Londres.",
    imageUrl: londresImg
  },
  {
    location: "Paris, França",
    date: "Abril 2025",
    description: "Descobrindo a beleza romântica de Paris e seus famosos monumentos.",
    imageUrl: parisImg
  },
  {
    location: "Roma, Itália",
    date: "Abril 2025",
    description: "Explorando a história antiga e a arquitetura incrível de Roma.",
    imageUrl: romaImg
  },
  {
    location: "Vaticano",
    date: "Abril 2025",
    description: "Conhecendo a menor nação do mundo e sua riqueza cultural e religiosa.",
    imageUrl: vaticanoImg
  },
  {
    location: "Rio de Janeiro, Brasil",
    date: "Novembro 2021",
    description: "Aproveitando as paisagens incríveis e a energia vibrante da cidade maravilhosa.",
    imageUrl: rioImg
  }
];
