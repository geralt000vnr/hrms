import { ActionType } from "../Constants/ActionType";

const initialState = {
  loading: false,
  currentUser: {},
  userDetails: {},
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.LOADING:
      return { ...state, loading: payload };
    case ActionType.LOGIN:
      return { ...state, currentUser: payload };
    case ActionType.LOGOUT:
      return { ...state, currentUser: payload };
    case ActionType.GET_USER_DETAILS:
      return { ...state, userDetails: payload };

    default:
      return { ...state };
  }
};
