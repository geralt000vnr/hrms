import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";
import { PermissionReducer } from "./PermissionsReducer";

const reducers = combineReducers({
  user: AuthReducer,
  permissions: PermissionReducer,
});

export default reducers;
