import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },

  paramsSerializer: (params) => queryString.stringify(params),
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    const customHeaders = {};

    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      // customHeaders.Authorization = `Bearer ${accessToken}`;
      customHeaders["auth-token"] = accessToken;
    }

    return {
      ...config,
      headers: {
        ...customHeaders, // auto attach token
        ...config.headers, // but you can override for some requests
      },
    };
    // return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
