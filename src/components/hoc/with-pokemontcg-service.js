import React from "react";
import { PokemonTCGConsumer } from "../pokemontcg-context";

const withPokemonTCGService = () => Wrapped => {
  return props => {
    return (
      <PokemonTCGConsumer>
        {pokemonTCG => {
          return <Wrapped {...props} pokemonTCG={pokemonTCG} />;
        }}
      </PokemonTCGConsumer>
    );
  };
};

export default withPokemonTCGService;
