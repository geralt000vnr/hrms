import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";

const reducers = combineReducers({
  user: AuthReducer,
});

export default reducers;
