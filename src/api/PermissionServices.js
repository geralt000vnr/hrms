import http from "./httpServices";
import API_PATH from "./config";

export async function createRole(data) {
  return http.post(API_PATH.createRole, data, {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQyZDc1OGNlMGM3ODU1ZTE1YjdmZTciLCJpYXQiOjE2ODEwMzE3NDh9.-JczPI9Yw4Am6xl7nhKCa4noQgezGFjlUzVf4AisXIg",
    },
  });
}

export async function getAllRoleList(data) {
  return http.post(API_PATH.getRoleList, data, {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQyZDc1OGNlMGM3ODU1ZTE1YjdmZTciLCJpYXQiOjE2ODEwMzE3NDh9.-JczPI9Yw4Am6xl7nhKCa4noQgezGFjlUzVf4AisXIg",
    },
  });
}

export async function getRoleDetails(data) {
  return http.get(API_PATH.getRoleDetails + `/${data}`, {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQyZDc1OGNlMGM3ODU1ZTE1YjdmZTciLCJpYXQiOjE2ODEwMzE3NDh9.-JczPI9Yw4Am6xl7nhKCa4noQgezGFjlUzVf4AisXIg",
    },
  });
}
