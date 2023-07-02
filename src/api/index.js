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

export async function addProject(data) {
  return http.post(API_PATH.apiProjectAdd, data);
}

export async function getTaskList(data) {
  return http.post(API_PATH.apiGetTaskList, data, {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQyZDc1OGNlMGM3ODU1ZTE1YjdmZTciLCJpYXQiOjE2ODEwMzE3NDh9.-JczPI9Yw4Am6xl7nhKCa4noQgezGFjlUzVf4AisXIg",
    },
  });
}

export async function getTaskDetails(id) {
  return http.get(API_PATH.apiGetTaskDetails + id);
}

export async function updateTask(data) {
  return http.put(API_PATH.apiUpdateTask, data, {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQyZDc1OGNlMGM3ODU1ZTE1YjdmZTciLCJpYXQiOjE2ODEwMzE3NDh9.-JczPI9Yw4Am6xl7nhKCa4noQgezGFjlUzVf4AisXIg",
    },
  });
}

export async function getCommonComponent(data) {
  return http.post(API_PATH.apiCommonComponent, data, {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQyZDc1OGNlMGM3ODU1ZTE1YjdmZTciLCJpYXQiOjE2ODEwMzE3NDh9.-JczPI9Yw4Am6xl7nhKCa4noQgezGFjlUzVf4AisXIg",
    },
  });
}

export async function getProjectList() {
  return http.get(API_PATH.apiGetProject);
}

export async function getProjectListPagination(data) {
  return http.post(API_PATH.apiGetProject, data, {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQyZDc1OGNlMGM3ODU1ZTE1YjdmZTciLCJpYXQiOjE2ODEwMzE3NDh9.-JczPI9Yw4Am6xl7nhKCa4noQgezGFjlUzVf4AisXIg",
    },
  });
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

export async function getUserListPagination(data) {
  return http.post(API_PATH.apiGetUserList, { ...data });
}

export async function applyHoliday(data) {
  return http.post(API_PATH.apiApplyNewHoliday, data);
}

export async function holidayList() {
  return http.get(API_PATH.apiHolidayList);
}

export async function holidayListPagination(data) {
  return http.post(API_PATH.apiHolidayList, data);
}

export async function chatMsg() {
  return http.get(API_PATH.apiChat);
}

export async function getChatsList(id) {
  return http.get(API_PATH.getChatsList + "/" + id);
}

export async function searchUser(value) {
  return http.get(API_PATH.searchUser + value);
}

export async function getMessage(value) {
  return http.get(API_PATH.getMessage + value);
}

export async function assignProject(data) {
  return http.post(API_PATH.apiAssignProject, data);
}

export async function getProjectDetails(id) {
  return http.get(API_PATH.getProjectDetails + "/" + id);
}

export async function getProjectTaskList(data) {
  return http.post(API_PATH.getProjectTaskList, data, {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQyZDc1OGNlMGM3ODU1ZTE1YjdmZTciLCJpYXQiOjE2ODEwMzE3NDh9.-JczPI9Yw4Am6xl7nhKCa4noQgezGFjlUzVf4AisXIg",
    },
  });
}

// {
//   headers: {
//     "Content-Type": "multipart/form-data",
//     Accept: "*/*",
//     Authorization: apiToken,
//   },
