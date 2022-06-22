import axios from "axios";
const baseURL = "http://localhost:9000";

axios.defaults.baseURL = baseURL;

function setJwt(jwt) {
  axios.defaults.headers.authorization = `Bearer ${jwt}`;
}
const http = {
  get: axios.get,
  post: axios.post,
  setJwt,
};

export default http;
