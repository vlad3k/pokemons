const setsRequested = () => {
  return {
    type: "FETCH_SETS_REQUEST"
  };
};

const setsLoaded = newSets => {
  return {
    type: "FETCH_SETS_SUCCESS",
    payload: newSets.sets
  };
};

const setsError = error => {
  return {
    type: "FETCH_SETS_FAILURE",
    payload: error
  };
};

/**** ****/

const cardsRequested = () => {
  return {
    type: "FETCH_CARDS_REQUEST"
  };
};

const cardsLoaded = newCards => {
  return {
    type: "FETCH_CARDS_SUCCESS",
    payload: newCards.cards
  };
};

const cardsError = error => {
  return {
    type: "FETCH_CARDS_FAILURE",
    payload: error
  };
};

const fetchSets = (pokemonTCG, dispatch) => () => {
  dispatch(setsRequested());
  pokemonTCG
    .getSets()
    .then(data => dispatch(setsLoaded(data)))
    .catch(err => dispatch(setsError(err)));
};

const fetchCards = (pokemonTCG, dispatch) => code => {
  dispatch(cardsRequested());
  pokemonTCG
    .getСards(code)
    .then(data => dispatch(cardsLoaded(data)))
    .catch(err => dispatch(cardsError(err)));
};

export { fetchSets, fetchCards };
