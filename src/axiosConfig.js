import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    let token = window.localStorage.getItem("persist:auth");
    console.log(token);
    return config;
  },
  function (error) {
    console.log.apply(error);
    return Promise.reject(error);
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
