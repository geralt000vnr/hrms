import http from "./httpServices";
import API_PATH from "./config";

export async function createTeam(data) {
  return http.post(API_PATH.apiCreateTeam, data, {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQyZDc1OGNlMGM3ODU1ZTE1YjdmZTciLCJpYXQiOjE2ODEwMzE3NDh9.-JczPI9Yw4Am6xl7nhKCa4noQgezGFjlUzVf4AisXIg",
    },
  });
}

export async function getTeamList(data) {
  return http.post(API_PATH.apiGetTeamList, data, {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQyZDc1OGNlMGM3ODU1ZTE1YjdmZTciLCJpYXQiOjE2ODEwMzE3NDh9.-JczPI9Yw4Am6xl7nhKCa4noQgezGFjlUzVf4AisXIg",
    },
  });
}
