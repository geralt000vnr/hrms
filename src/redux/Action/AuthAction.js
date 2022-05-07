import { toast } from "react-toastify";
import { ActionType } from "../Constants/ActionType";

export const loginAction = (data) => async (dispatch) => {
  dispatch({ type: ActionType.LOADING, payload: true });
  const data = {
    id: 100,
    email: "neeraj@gmail.com",
    first_name: "Neeraj",
    last_name: "YadavJi",
    phone: "9874563210",
    status: 1,
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1MjA0MTA5MCwianRpIjoiMTI4M2Q0YWU1NTUyNDVlNjk1NTkyNTgxOThlMGJmYzEiLCJ1c2VyX2lkIjoxMDAsInVzZXJuYW1lIjoiMTgwMSJ9.B_6Alt8jUd1q1m-nP36yyKaqoXpIAzdRwGqPmJEZs3o",
    userAvtar:
      "https://consequence.net/wp-content/uploads/2022/02/doctor-strange-in-the-multiverse-of-madness-super-bowl-trailer.jpg?quality=80&w=1031&h=580&crop=1&resize=1031%2C580&strip",
    userType: "Admin",
    username: "geralt000vnr",
  };

  dispatch({ type: ActionType.LOGIN, payload: data });
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
  dispatch({ type: ActionType.LOGOUT, payload: { loading: true } });
  // cleanLocalStorage();
  toast.success("Logged Out Successfully");

  dispatch({
    type: ActionType.LOGOUT,
    payload: false,
  });
  dispatch({ type: ActionType.LOADING, payload: false });
};

// export const userDetails = (userId) => async (dispatch) => {
//   dispatch({ type: ActionType.LOADING, payload: true });
//   const response = await getUserDetails(userId);
//   dispatch({
//     type: ActionType.GET_USER_DETAILS,
//     payload: response.data?.data,
//   });
//   dispatch({ type: ActionType.LOADING, payload: false });
// };
