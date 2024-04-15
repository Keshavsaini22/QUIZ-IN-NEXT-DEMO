import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { loginType, logoutType, signinType } from "./auth.type";
import { cookiecreate } from "@/actions";

interface signup {
  email: string;
  password: string;
  name: string;
  role: string;
}

interface login {
  email: string;
  password: string;
}

export const signUpUser = createAsyncThunk(
  signinType,
  async (data: signup, { rejectWithValue }) => {
    try {
      // console.log("signInUser", data);
      const res = await axios.post(`api/signup`, data);
      const output = res.data;
      console.log('output: ', output);
      return output;
    } catch (error: any) {
      console.log('error.response.data.message: ', error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  loginType,
  async (data: login, { rejectWithValue }) => {
    try {
      const res = await axios.post(`api/login`, data);
      const output = res.data;
      await cookiecreate("token", res.data.token)
      await cookiecreate("logged", "true")
      await cookiecreate("userid", res.data.user._id)
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return output;
    } catch (error: any) {
      console.log('error.response.data.message: ', error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutUser = createAsyncThunk(logoutType, async () => {
  try {
    localStorage.removeItem("logged");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userid");
  } catch (error: any) {
    return error.message;
  }
});
