// registrationSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const createNewEmployee = createAsyncThunk(
  "employee/createNewEmployee",
  async (employeeData) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/employee/createEmployee`,

        employeeData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          Credential: "include",
        }
      );
      // console.log(EmployeeData);
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateEmployeeData = createAsyncThunk(
  "employee/updateEmployeeData",
  async (updatedEmployeeData) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/Employee/update`,

        updatedEmployeeData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          Credential: "include",
        }
      );
      // console.log(updatedEmployeeData);
      // console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchEmployeeData = createAsyncThunk(
  "employee/fetchEmployeeData",
  async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/employee/allEmployeeData`,

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

export const loginEmployee = createAsyncThunk(
  "employee/loginEmployee",
  async (EmployeeData) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/admin/login`,
        EmployeeData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          Credential: "include",
        }
      );
      console.log(EmployeeData);
      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const logout = createAsyncThunk(
  "employee/logout",
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

      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    resetemployeeState: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;

    },
  },
  extraReducers: (builder) => {
    builder
  .addCase(loginEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;

      })
      .addCase(loginEmployee.rejected, (state, action) => {
        state.data = null;
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateEmployeeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateEmployeeData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(updateEmployeeData.rejected, (state, action) => {
        state.data = null;
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchEmployeeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployeeData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchEmployeeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetemployeeState } = employeeSlice.actions;
export default employeeSlice.reducer;
