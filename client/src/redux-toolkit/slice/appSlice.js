
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  appData: null,
  loading: false,
  error: null,
  isLogined: false,
  isWelcome: true,
  customerData: null,

  showNewEmployeeForm: false,
};

export const fetchappData = createAsyncThunk(
  "app/fetchappData",
  async (publicUrl) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/v1/restaurant/restaurant-details/${publicUrl}`,
        {
          withCredentials: true,
          Credential: "include",
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    resetappState: (state) => {
      state.appData = null;
      state.loading = false;
      state.error = null;
    },
    setCustomerData: (state, action) => {
      state.customerData = action.payload;
    },
    setIsWelcome: (state, action) => {
      state.isWelcome = action.payload;
    },
    setIsLogined: (state, action) => {
      state.isLogined = action.payload;
    },
    setShowEmployeeFrom: (state, action) => {
      state.showNewEmployeeForm = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchappData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.appData = null;
      })
      .addCase(fetchappData.fulfilled, (state, action) => {
        state.appData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchappData.rejected, (state, action) => {
        state.appData = null;
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetappState, setCustomerData, setIsWelcome, setIsLogined, setShowEmployeeFrom  } =
  appSlice.actions;
export default appSlice.reducer;
