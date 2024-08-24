import React from 'react';
import { useParams } from'react-router-dom';
import QRCode from 'qrcode.react';
import '../styles/App.css';

const gifts = [
  { id: 1, name: 'Sofá', pix: 'código_pix_sofa', mbway: 'código_mbway_sofa' },
  { id: 2, name: 'Centro de Sala', pix: 'código_pix_centro', mbway: 'código_mbway_centro' },
  { id: 3, name: 'Varal de Roupa', pix: 'código_pix_varal', mbway: 'código_mbway_varal' },
  { id: 4, name: 'Lava e Seca', pix: 'código_pix_lava', mbway: 'código_mbway_lava' },
  { id: 5, name: 'Cama', pix: 'código_pix_cama', mbway: 'código_mbway_cama' },
  { id: 6, name: 'Jogo de Cama', pix: 'código_pix_jogo_cama', mbway: 'código_mbway_jogo_cama' },
  { id: 7, name: 'Geladeira', pix: 'código_pix_geladeira', mbway: 'código_mbway_geladeira' },
  { id: 8, name: 'Jogo de Panela', pix: 'código_pix_panela', mbway: 'código_mbway_panela' },
  { id: 9, name: 'Diária no hotel', pix: 'código_pix_diaria_hotel', mbway: 'código_mbway_diaria_hotel' },
  { id: 10, name: 'Passagem aérea', pix: 'código_pix_passagem', mbway: 'código_mbway_passagem' },
  { id: 11, name: 'All inclusive', pix: 'código_pix_all_inclusive', mbway: 'código_mbway_all_inclusive' }
];

function GiftDetail() {
  const { id } = useParams();
  const gift = gifts.find(g => g.id === parseInt(id));

  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
    alert('Código copiado para a área de transferência!');
  };

  if (!gift) {
    return<div>Presente não encontrado.</div>;
  }

  return (
<div className="gift-detail">
  <h1>{gift.name}</h1><div className="qr-code">
    <QRCode value={gift.pix} size={256} />
  </div><button className="copy-button" onClick={() => copyToClipboard(gift.pix)}>
    Pix Copia e Cola
  </button><div className="mb-way">
    <h2>MB WAY</h2>
    <p>{gift.mbway}</p>
  </div>
</div>
  );
}

export default GiftDetail;
