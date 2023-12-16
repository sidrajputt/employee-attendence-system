
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  storeData: null,
  loading: false,
  error: null,
  isLogined: false,
  isWelcome: true,
  customerData: null,
  showLogin: false,

};

export const fetchStoreData = createAsyncThunk(
  "store/fetchStoreData",
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

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    resetstoreState: (state) => {
      state.storeData = null;
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
    setShowLogin: (state, action) => {
      state.showLogin = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStoreData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.storeData = null;
      })
      .addCase(fetchStoreData.fulfilled, (state, action) => {
        state.storeData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchStoreData.rejected, (state, action) => {
        state.storeData = null;
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetstoreState, setCustomerData, setIsWelcome, setIsLogined, setShowLogin  } =
  storeSlice.actions;
export default storeSlice.reducer;
