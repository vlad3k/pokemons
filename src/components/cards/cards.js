import React from "react";

import CardItem from "../card-item";

import "./cards.css";

const Cards = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map(card => (
        <CardItem key={card.id} imageUrl={card.imageUrl} name={card.name} />
      ))}
    </div>
  );
};

export default Cards;
