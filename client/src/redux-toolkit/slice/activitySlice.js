import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const createNewActivity = createAsyncThunk(
  "activity/createNewActivity",
  async (activityData) => {
    try {
      const response = await axios.post(
        `http://13.201.2.25:8000/api/activity/create-activities`,
        activityData,
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

export const updateActivityData = createAsyncThunk(
  "activity/updateActivityData",
  async (updatedActivityData) => {
    try {
      const response = await axios.post(
        `http://13.201.2.25:8000/api/v1/Activity/update`,
        updatedActivityData,
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

export const fetchActivityData = createAsyncThunk(
  "activity/fetchActivityData",
  async () => {
    try {
      const response = await axios.get(
        `http://13.201.2.25:8000/api/activity/activities`,
        {
          withCredentials: true,
          Credential: "include",
        }
      );
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        closeButton: true,
      });
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

export const deleteActivityData = createAsyncThunk(
  "activity/deleteActivityData",
  async (data) => {
    try {
      const response = await axios.post(
        `http://13.201.2.25:8000/api/activity/deleteActivity`,
        data,
        {
          withCredentials: true,
          Credential: "include",
        }
      );
      console.log('.data', data);
      console.log('response.data', response);
      toast.success(response.data.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        closeButton: true,
      });
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




const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    resetactivityState: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActivityData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActivityData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchActivityData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetactivityState } = activitySlice.actions;
export default activitySlice.reducer;
