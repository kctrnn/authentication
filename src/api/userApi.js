import axiosClient from "./axiosClient";

const userApi = {
  login: (data) => {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },

  register: (data) => {
    const url = "/auth/register";
    return axiosClient.post(url, data);
  },

  updateAccount: (data, userId) => {
    const url = `/users/${userId}`;
    return axiosClient.patch(url, data);
  },
};

export default userApi;
