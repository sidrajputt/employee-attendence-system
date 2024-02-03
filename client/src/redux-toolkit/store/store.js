// store.js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import storage from "redux-persist/lib/storage";


import employeeSlice from "../slice/employeeSlice";
import appSlice from "../slice/appSlice";
import leaveSlice from "../slice/leaveSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import sessionExpiryMiddleware from "../middleware/sessionExpiryMiddleware";
import activitySlice from "../slice/activitySlice";
// import facebook reducers

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  auth: authSlice,
  employee: employeeSlice,
  app: appSlice,
  leave: leaveSlice,
  activity:activitySlice
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sessionExpiryMiddleware),
});
