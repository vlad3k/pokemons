const initialState = {
  sets: [],
  cards: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SETS_REQUEST":
      return {
        sets: [],
        loading: true,
        error: null
      };
    case "FETCH_SETS_SUCCESS":
      return {
        sets: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_SETS_FAILURE":
      return {
        sets: action.payload,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
