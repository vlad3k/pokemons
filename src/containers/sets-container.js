import React, { Component } from "react";
import { connect } from "react-redux";

import Sets from "../components/sets";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";

import { withPokemonTCGService } from "../components/hoc";
import { fetchSets } from "../actions";
import { compose } from "../utils";

class SetsContainer extends Component {
  componentDidMount() {
    this.props.fetchSets();
  }

  render() {
    const { sets, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <Sets sets={sets} />;
  }
}

const mapStateToProps = state => {
  const { sets, loading, error } = state.sets;

  return { sets, loading, error };
};

const mapDispatchToProps = (dispatch, { pokemonTCG }) => {
  return {
    fetchSets: fetchSets(pokemonTCG, dispatch)
  };
};

export default compose(
  withPokemonTCGService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(SetsContainer);
