import React from "react";
import SetItem from "../set-item";

import "./sets.css";

const Sets = ({ sets }) => {
  return (
    <div className="sets">
      {sets.map(set => (
        <SetItem key={set.code} set={set} />
      ))}
    </div>
  );
};

export default Sets;
