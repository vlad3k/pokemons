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

const fetchCards = (pokemonTCG, dispatch) => code => {
  dispatch(cardsRequested());
  pokemonTCG
    .getСards(code)
    .then(data => dispatch(cardsLoaded(data)))
    .catch(err => dispatch(cardsError(err)));
};

export default fetchCards;
