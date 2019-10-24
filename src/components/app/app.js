import React from "react";
import { Route, Switch } from "react-router-dom";

import "./app.css";

import { SetsPage } from "../pages";
import { CardsPage } from "../pages";

const App = ({ pokemonTCG }) => {
  return (
    <Switch>
      <Route path="/" component={SetsPage} exact />
      <Route path="/cards" component={CardsPage} />
    </Switch>
  );
};

export default App;
