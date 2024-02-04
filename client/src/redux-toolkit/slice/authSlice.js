// registrationSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  isLoggedIn: false,
  error: null,
};




export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    try {
      const response = await axios.post(
        `http://13.201.2.25:8000/api/admin/login`,
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

      toast.success(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        closeButton: true,
      });
           console.log(response.data);
      return response.data;

    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        closeButton: true,
      });
      throw error;
    }
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async () => {
    try {
      const response = await axios.get(
        `http://13.201.2.25:8000/api/admin/logout`,
        
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          Credential: "include",
        }
      );
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        closeButton: true,
      });
      // console.log(response);
      return response.data;
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        closeButton: true,
      });
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
      });
  },
});

export const { resetAuthState } = authSlice.actions;
export default authSlice.reducer;
