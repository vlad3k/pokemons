import React, { Component } from "react";
import SetItem from "../set-item";

import "./sets.css";

class Sets extends Component {
  render() {
    const { sets } = this.props;
    return (
      <div className="sets">
        {sets.map(set => {
          return <SetItem key={set} />;
        })}
      </div>
    );
  }
}

export default Sets;
