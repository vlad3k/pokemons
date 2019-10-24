import { combineReducers } from "redux";
import setsReducer from "./sets";
import cardsReducer from "./cards";

const reducer = combineReducers({
  sets: setsReducer,
  cards: cardsReducer
});

export default reducer;
