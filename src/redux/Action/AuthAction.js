import { toast } from "react-toastify";
import { getUserDetails, login } from "../../api";
import {
  cleanLocalStorage,
  getUserInfoFromJWT,
  setJWT,
} from "../../utils/storage";
import { ActionType } from "../Constants/ActionType";

export const loginAction = (data) => async (dispatch) => {
  dispatch({ type: ActionType.LOADING, payload: true });
  const response = await login(data);

  if (response.data?.status === true) {
    setJWT(response?.data?.data?.token);
    toast.success("Logged in Successfully");
  } else {
    toast.error("Invalid Email or Password");
  }
  const userData = await getUserInfoFromJWT();

  dispatch({
    type: ActionType.LOGIN,
    payload: userData,
  });
  dispatch({ type: ActionType.LOADING, payload: false });
};

export const fetchUserAction = () => async (dispatch) => {
  dispatch({ type: ActionType.LOADING, payload: true });
  const token = await getUserInfoFromJWT();

  dispatch({
    type: ActionType.FETCH_CURRENTUSER,
    payload: token,
  });
  dispatch({ type: ActionType.LOADING, payload: false });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: ActionType.LOGOUT, payload: { loading: true } });
  cleanLocalStorage();
  toast.success("Logged Out Successfully");

  dispatch({
    type: ActionType.LOGOUT,
    payload: null,
  });
  dispatch({ type: ActionType.LOADING, payload: false });
};

export const userDetails = (userId) => async (dispatch) => {
  dispatch({ type: ActionType.LOADING, payload: true });
  const response = await getUserDetails(userId);
  dispatch({
    type: ActionType.GET_USER_DETAILS,
    payload: response.data?.data,
  });
  dispatch({ type: ActionType.LOADING, payload: false });
};
