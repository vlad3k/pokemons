const setsRequested = () => {
  return {
    type: "FETCH_SETS_REQUESTED"
  };
};

const setsLoaded = newSets => {
  return {
    type: "FETCH_SETS_SUCCESS",
    payload: newSets
  };
};

const setsError = error => {
  return {
    type: "FETCH_SETS_REQUESTED",
    payload: error
  };
};

export { setsRequested, setsLoaded, setsError };
