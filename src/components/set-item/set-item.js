import React from "react";

const SetItem = () => {
  return (
    <a className="set hvr-grow">
      <div>
        <div className="set-image">
          <img src="https://images.pokemontcg.io/sma/logo.png" alt="" />
        </div>
        <div className="set-content">
          <div className="media">
            <div className="media-left">
              <figure className="image">
                <img src="https://images.pokemontcg.io/sma/symbol.png" alt="" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title">Shiny Vault</p>
              <p className="subtitle">Released 08/23/2019</p>
            </div>
          </div>
          <div className="content">
            <ul>
              <li>Standard Legal</li>
              <li>Expanded Legal</li>
            </ul>
          </div>
        </div>
      </div>
    </a>
  );
};

export default SetItem;
