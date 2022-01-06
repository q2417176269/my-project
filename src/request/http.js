import axios from "../utils/axios.js";
const api = "/api/";

export const register = (data, url) => {
  return axios({
    url: `${api}${url}`,
    method: "post",
    data
  });
};
export const post = (data, url) => {
  return axios({
    url: `${api}${url}`,
    method: "post",
    data
  });
};

const $http = {
  register,
  post
};

export default $http;
