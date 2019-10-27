import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { SetsContainer, CardsContainer } from "../../containers";

import "./app.css";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={SetsContainer} exact />
      <Route path="/cards/:id" component={CardsContainer} exact />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
