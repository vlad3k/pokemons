import React from "react";
import { Route, Switch } from "react-router-dom";

import { SetsContainer, CardsContainer } from "../../containers";

import "./app.css";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={SetsContainer} exact />
      <Route path="/:id" component={CardsContainer} exact />
    </Switch>
  );
};

export default App;
