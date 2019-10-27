import React, { Component } from "react";
import { connect } from "react-redux";

import Cards from "../components/cards";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";

import { withPokemonTCGService } from "../components/hoc";
import { fetchCards } from "../actions";
import { compose } from "../utils";

class CardsContainer extends Component {
  componentDidMount() {
    const code = this.props.match.params.id;
    this.props.fetchCards(code);
  }

  render() {
    const { cards, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <Cards cards={cards} />;
  }
}

const mapStateToProps = state => {
  const { cards, loading, error } = state.cards;
  return { cards, loading, error };
};

const mapDispatchToProps = (dispatch, { pokemonTCG }) => {
  return {
    fetchCards: fetchCards(pokemonTCG, dispatch)
  };
};

export default compose(
  withPokemonTCGService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CardsContainer);
