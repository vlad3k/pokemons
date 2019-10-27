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

const fetchSets = (pokemonTCG, dispatch) => () => {
  dispatch(setsRequested());
  pokemonTCG
    .getSets()
    .then(data => dispatch(setsLoaded(data)))
    .catch(err => dispatch(setsError(err)));
};

export default fetchSets;
