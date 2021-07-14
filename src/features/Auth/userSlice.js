import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

const login = createAsyncThunk("user/login", async (payload) => {
  const data = await userApi.login(payload);

  //   save data to local storage
  localStorage.setItem("user", data.user);
  localStorage.setItem("access_token", JSON.stringify(data.jwt));

  return data.user;
});

const register = createAsyncThunk("user/register", async (payload) => {
  const data = await userApi.register(payload);

  //   save data to local storage
  localStorage.setItem("user", data.user);
  localStorage.setItem("access_token", JSON.stringify(data.jwt));

  return data.user;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    current: JSON.parse(localStorage.getItem("user")) || {},
  },

  reducers: {
    logout: (state) => {
      // clear local storage
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");

      state.current = {};
    },
  },

  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
