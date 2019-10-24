import React from "react";

const CardItem = ({ name, imageUrl }) => {
  return (
    <div className="card">
      <img className="hvr-grow" src={imageUrl} alt={name} />
    </div>
  );
};

export default CardItem;
