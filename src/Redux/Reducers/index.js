import { combineReducers } from "redux";
import { userReducer, designReducer } from "./reducers";

const rootReducer = combineReducers({
  userReducer,
  designReducer,
});

export default rootReducer;
