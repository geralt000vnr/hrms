import http from "./httpServices";
import API_PATH from "./config";

export async function me() {
  return http.get(API_PATH.me, {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQyZDc1OGNlMGM3ODU1ZTE1YjdmZTciLCJpYXQiOjE2ODEwMzE3NDh9.-JczPI9Yw4Am6xl7nhKCa4noQgezGFjlUzVf4AisXIg",
    },
  });
}
