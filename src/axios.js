import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

instance.interceptors.request.use(async (config) => {
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
