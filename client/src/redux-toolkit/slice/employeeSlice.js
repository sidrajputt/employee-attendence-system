import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        `http://13.201.2.25:8000/api/employee/createEmployee`,
        employeeData,
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

export const updateEmployeeData = createAsyncThunk(
  "employee/updateEmployeeData",
  async (updatedEmployeeData) => {
    try {
      const response = await axios.post(
        `http://13.201.2.25:8000/api/v1/Employee/update`,
        updatedEmployeeData,
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

export const fetchEmployeeData = createAsyncThunk(
  "employee/fetchEmployeeData",
  async () => {
    try {
      const response = await axios.get(
        `http://13.201.2.25:8000/api/employee/allEmployeeData`,
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

export const deleteEmployeeData = createAsyncThunk(
  "employee/deleteEmployeeData",
  async (data) => {
    try {
      const response = await axios.post(
        `http://13.201.2.25:8000/api/employee/deleteEmployee`,
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



export const loginEmployee = createAsyncThunk(
  "employee/loginEmployee",
  async (EmployeeData) => {
    try {
      const response = await axios.post(
        `http://13.201.2.25:8000/api/admin/login`,
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
        `http://13.201.2.25:8000/api/admin/logout`,
        
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
