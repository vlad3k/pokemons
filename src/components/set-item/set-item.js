import React from "react";
import { Link } from "react-router-dom";

const SetItem = ({ set }) => {
  return (
    <Link to={set.code} className="set hvr-grow">
      <div>
        <div className="set-image">
          <img src={set.logoUrl} alt="Placeholder" />
        </div>
        <div className="set-content">
          <div className="media">
            <div className="media-left">
              <figure className="image">
                <img src={set.symbolUrl} alt="Placeholder" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title">{set.name}</p>
              <p className="subtitle">Released {set.releaseDate}</p>
            </div>
          </div>
          <div className="content">
            <ul>
              {set.standardLegal && <li>Standard Legal</li>}
              {set.expandedLegal && <li>Expanded Legal</li>}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SetItem;
