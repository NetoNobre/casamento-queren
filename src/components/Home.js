import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

// Importar as imagens
import sofaImg from'../assets/images/sofa.jpg';
import centroSalaImg from'../assets/images/centro-de-sala.jpg';
import varalRoupaImg from'../assets/images/varal-de-roupa.jpg';
import lavaSecaImg from'../assets/images/lava-e-seca.jpg';
import camaImg from'../assets/images/cama.jpg';
import jogoCamaImg from'../assets/images/jogo-de-cama.jpg';
import geladeiraImg from'../assets/images/geladeira.jpg';
import jogoPanelaImg from'../assets/images/jogo-de-panela.jpg';
import hotelImg from'../assets/images/diaria-hotel.jpg';
import passagemImg from'../assets/images/passagem.jpg';
import allInclusiveImg from'../assets/images/all-inclusive.jpg';

const gifts = [
  { id: 1, name: 'Sofá', image: sofaImg, price: '250€ ou 1.500R$' },
  { id: 2, name: 'Centro de Sala', image: centroSalaImg, price: '60€ ou 350R$' },
  { id: 3, name: 'Varal de Roupa', image: varalRoupaImg, price: '10€ ou 60R$' },
  { id: 4, name: 'Lava e Seca', image: lavaSecaImg, price: '270€ ou 1.700R$' },
  { id: 5, name: 'Cama', image: camaImg, price: '150€ ou 900R$' },
  { id: 6, name: 'Jogo de Cama', image: jogoCamaImg, price: '20€ ou 100R$' },
  { id: 7, name: 'Geladeira', image: geladeiraImg, price: '450€ ou 3.000R$' },
  { id: 8, name: 'Jogo de Panela', image: jogoPanelaImg, price: '120€ ou 800R$' },
  { id: 9, name: 'Diária no hotel', image: hotelImg, price: '200€ ou 1.500R$' },
  { id: 10, name: 'Passagem aérea', image: passagemImg, price: '50€ ou 350R$' },
  { id: 11, name: 'All inclusive', image: allInclusiveImg, price: '150€ ou 1.000R$' }
];


function Home() {
  return (
    <div className="home">
  <h1>Lista de Presentes Matheus & Quéren</h1><div className="description">
    {/* Cores e outros elementos já existentes */}
  </div>
  <h2>Enxoval de casa nova</h2><ul className="gift-list">
    {gifts.filter(gift => gift.id < 9).map(gift => (
      <li key={gift.id} className="gift-item">
        <Link to={`/gift/${gift.id}`}>
          <div className="card">
            <img src={gift.image} alt={gift.name} className="gift-image" />
            <h2 className="gift-name">{gift.name}</h2>
            <p className="gift-price">{gift.price}</p>
          </div>
        </Link>
      </li>
    ))}
  </ul>
  <h2>LUA DE MEL</h2><ul className="gift-list">
    {gifts.filter(gift => gift.id >= 9).map(gift => (
      <li key={gift.id} className="gift-item">
        <Link to={`/gift/${gift.id}`}>
          <div className="card">
            <img src={gift.image} alt={gift.name} className="gift-image" />
            <h2 className="gift-name">{gift.name}</h2>
            <p className="gift-price">{gift.price}</p>
          </div>
        </Link>
      </li>
    ))}
  </ul>
</div>

)};


export default Home;
