import axios from "axios";
const baseURL = "https://rupalibhargava.pythonanywhere.com";

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
