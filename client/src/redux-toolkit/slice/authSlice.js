// registrationSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  isLoggedIn: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/auth/register`,

        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          Credential: "include",
        }
      );
      // console.log(userData);
      // console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateUserData = createAsyncThunk(
  "auth/updateUserData",
  async (updatedUserData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/user/update`,

        updatedUserData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          Credential: "include",
        }
      );
      // console.log(updatedUserData);
      // console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/v1/user/userdetail`,

        {
          withCredentials: true,
          Credential: "include",
        }
      );
      // console.log('response.data',response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/auth/login`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          Credential: "include",
        }
      );
      // console.log(userData);
      // console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.error.message;
      })
      .addCase(updateUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
