const initialState = {
  cards: [],
  loading: true,
  error: null
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARDS_REQUEST":
      return {
        cards: [],
        loading: true,
        error: null
      };
    case "FETCH_CARDS_SUCCESS":
      return {
        cards: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_CARDS_FAILURE":
      return {
        cards: action.payload,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default cardsReducer;
