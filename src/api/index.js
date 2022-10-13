import http from "./httpServices";
import API_PATH from "./config";
import { getJWT } from "./../utils/storage";

// const apiToken =
//   "Basic Y3liZXJmcmF0OjAyNjg2NjMyNmE5ZDFkMmIyMzIyNmU0ZTg5MjkxOTJn";

export async function getAndSetJwt() {
  http.setJwt(getJWT());
}

export async function login(data) {
  return http.post(API_PATH.apiUserLogin, data);
}

// export async function getUserDetails(userID) {
//   return http.get(API_PATH.apiGetUser + userID, {
//     headers: {
//       Authorization: apiToken,
//     },
//   });
// }

export async function addTask(data) {
  return http.post(API_PATH.apiAddTask, data);
}

export async function getprojectlist(data) {
  return http.post(API_PATH.apiProject);
}

export async function getTaskList() {
  return http.get(API_PATH.apiGetTaskList);
}

export async function getTaskDetails(id) {
  return http.get(API_PATH.apiGetTaskDetails + id);
}

export async function updateTask(data) {
  return http.put(API_PATH.apiUpdateTask, data);
}

export async function getCommonComponent() {
  return http.get(API_PATH.apiCommonComponent);
}

export async function getProjectList() {
  return http.get(API_PATH.apiGetProject);
}

export async function addUser(data) {
  return http.post(API_PATH.apiAddUser, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function getUserDetails(userId) {
  return http.get(API_PATH.apiGetUser + userId);
}

export async function getUserList() {
  return http.get(API_PATH.apiGetUserList);
}

export async function applyHoliday(data) {
  return http.post(API_PATH.apiApplyNewHoliday, data);
}

export async function holidayList() {
  return http.get(API_PATH.apiHolidayList);
}

// {
//   headers: {
//     "Content-Type": "multipart/form-data",
//     Accept: "*/*",
//     Authorization: apiToken,
//   },
