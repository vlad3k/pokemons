import React from "react";

import icon from "./pokeball.svg";

import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <br />
      <h2 className="boom">BOOM!</h2>
      <span>Something has gone terribly wrong.</span>
    </div>
  );
};

export default ErrorIndicator;
