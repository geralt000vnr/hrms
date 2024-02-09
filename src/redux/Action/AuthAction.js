import { toast } from "react-toastify";
import { addUser, getUserDetails, login } from "../../api";
import { cleanLocalStorage, getUserInfoFromJWT } from "../../utils/storage";
import { ActionType } from "../Constants/ActionType";
import { getRoleDetails } from "../../api/PermissionServices";

export const loginAction = (data) => async (dispatch) => {
  dispatch({ type: ActionType.LOADING, payload: true });
  login(data)
    .then((response) => {
      dispatch({ type: ActionType.LOGIN, payload: response.data });
      localStorage.setItem("HRMSUser", response.data.token);
      const jwt = getUserInfoFromJWT(response.data.token);
      console.log("reponseLoginJWT", jwt);
    })
    .catch((err) => {
      toast.error("Invalid Email or Password");
      console.error("repsonelogin error : ", err);
    });
  dispatch({ type: ActionType.LOADING, payload: false });
};

// export const fetchUserAction = () => async (dispatch) => {
//   dispatch({ type: ActionType.LOADING, payload: true });
//   const token = await getUserInfoFromJWT();

//   dispatch({
//     type: ActionType.FETCH_CURRENTUSER,
//     payload: token,
//   });
//   dispatch({ type: ActionType.LOADING, payload: false });
// };

export const logout = () => async (dispatch) => {
  dispatch({ type: ActionType.LOADING, payload: true });
  cleanLocalStorage();
  toast.success("Logged Out Successfully");

  dispatch({
    type: ActionType.LOGOUT,
    payload: false,
  });
  dispatch({ type: ActionType.LOADING, payload: false });
};

export const userDetails = (userId) => async (dispatch) => {
  dispatch({ type: ActionType.LOADING, payload: true });
  const response = await getUserDetails(userId);
  getRoleDetails(response.data.role).then((userPremissions) => {
    dispatch({
      type: ActionType.SET_ROLE_PERMISSIONS,
      payload: userPremissions.data,
    });
  });
  dispatch({
    type: ActionType.GET_USER_DETAILS,
    payload: response.data?.data,
  });
  localStorage.setItem("UserDetails", JSON.stringify(response.data));
  dispatch({ type: ActionType.LOADING, payload: false });
};

export const addUserAction = (data) => async (dispatch) => {
  dispatch({ type: ActionType.LOADING, payload: true });
  const response = await addUser(data);
  toast("userAdded");
  dispatch({ type: ActionType.LOADING, payload: false });
  return response.status ? true : false;
};
