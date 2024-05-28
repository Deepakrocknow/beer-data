import React from 'react';

const BeerCard = ({ beer }) => {
    const handleImageError = (event) => {
        event.target.src = '/beer.png';
      };
  return (
    <div className="beer-card">
      <img src={beer.image} alt={beer.name} onError={handleImageError}/>
      <h2>{beer.name}</h2>
      <p>{beer.description}</p>
    </div>
  );
};

export default BeerCard;
