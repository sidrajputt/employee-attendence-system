import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const createNewleave = createAsyncThunk(
  "leave/createNewleave",
  async (leaveData) => {
    try {
      const response = await axios.post(
        `http://13.201.2.25:8000/api/leave/createleave`,
        leaveData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          Credential: "include",
        }
      );
      // console.log(response);
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // 2 seconds
        closeButton: true,
      });
      return response.data;
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // 2 seconds
        closeButton: true,
      });
      throw error;
    }
  }
);

export const updateleaveData = createAsyncThunk(
  "leave/updateleaveData",
  async (updatedleaveData) => {
    try {
      const response = await axios.post(
        `http://13.201.2.25:8000/api/updateLeaveRequest`,
        updatedleaveData,
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
        autoClose: 2000, // 2 seconds
        closeButton: true,
      });
      return response.data;
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // 2 seconds
        closeButton: true,
      });
      throw error;
    }
  }
);

export const fetchleaveData = createAsyncThunk(
  "leave/fetchleaveData",
  async () => {
    try {
      const response = await axios.get(
        `http://13.201.2.25:8000/api/leaveRequests`,
        {
          withCredentials: true,
          Credential: "include",
        }
      );
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // 2 seconds
        closeButton: true,
      });
      return response.data;
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // 2 seconds
        closeButton: true,
      });
      throw error;
    }
  }
);

export const deleteleaveData = createAsyncThunk(
  "leave/deleteleaveData",
  async (data) => {
    try {
      const response = await axios.post(
        `http://13.201.2.25:8000/api/leave/deleteleave`,
        data,
        {
          withCredentials: true,
          Credential: "include",
        }
      );
      console.log('.data',data)
      console.log('response.data',response);
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // 2 seconds
        closeButton: true,
      });
      return response.data;
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // 2 seconds
        closeButton: true,
      });
      throw error;
    }
  }
);

export const logout = createAsyncThunk(
  "leave/logout",
  async () => {
    try {
      const response = await axios.post(
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
        autoClose: 2000, // 2 seconds
        closeButton: true,
      });
      console.log(response);
      return response.data;
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // 2 seconds
        closeButton: true,
      });
      throw error;
    }
  }
);

const leaveSlice = createSlice({
  name: "leave",
  initialState,
  reducers: {
    resetleaveState: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchleaveData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchleaveData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchleaveData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetleaveState } = leaveSlice.actions;
export default leaveSlice.reducer;
