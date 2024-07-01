import React from 'react';

const RaceCard = ({ raceName, date, imageUrl }) => (
  <article className="article-hover">
    <img src={imageUrl} alt={raceName} />
    <h3>{raceName}</h3>
    <p>{`El ${raceName.toLowerCase()}, que se celebrará el ${date}.`}</p>
    <a href="#" className="button" onClick={() => showRaceDetails(raceName.toLowerCase())}>Más información</a>
  </article>
);

export default RaceCard;
