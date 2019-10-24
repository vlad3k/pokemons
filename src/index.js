import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import PokemonTCG from "./services/pokemontcg";
import { PokemonTCGProvider } from "./components/pokemontcg-context";

import store from "./store";

import "./index.css";

const pokemonTCG = new PokemonTCG();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <PokemonTCGProvider value={pokemonTCG}>
        <Router>
          <App />
        </Router>
      </PokemonTCGProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
