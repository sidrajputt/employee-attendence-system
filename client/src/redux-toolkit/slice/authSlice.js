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

// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async (userData) => {
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_BASE_URL}/api/v1/auth/register`,

//         userData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//           Credential: "include",
//         }
//       );
//       // console.log(userData);
//       // console.log(response);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }
// );

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

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/admin/login`,
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
      const response = await axios.post(
        `http://localhost:8000/api/admin/logout`,
        
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
