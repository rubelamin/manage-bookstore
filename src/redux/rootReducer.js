import { combineReducers } from "redux";
import bookReducer from "./bookReducer";

const rootReducer = combineReducers({
  bookstate: bookReducer,
});

export default rootReducer;
