import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
