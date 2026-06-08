import React from 'react';
import './TravelCard.css';

const TravelCard = ({ travel, onLike }) => {
  return (
    <div className="travel-card">
      <div className="card-header">
        <h3 className="travel-title">{travel.title}</h3>
        <span className="country-tag">{travel.country}</span>
      </div>
      <p className="travel-description">{travel.description}</p>
      <button className="like-button" onClick={() => onLike(travel.id)}>
        ❤️ {travel.likes}
      </button>
    </div>
  );
};

export default TravelCard;