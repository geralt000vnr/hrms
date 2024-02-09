import { ActionType } from "../Constants/ActionType";

const initialState = {
  rolePermissions: [],
};

export const PermissionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_ROLE_PERMISSIONS:
      return { ...state, rolePermissions: payload };

    default:
      return { ...state };
  }
};
