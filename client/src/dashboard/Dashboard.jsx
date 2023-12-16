import React from "react";
import { Routes, Route } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import {  useSelector} from "react-redux"

import { AddNewEmployee } from "./components/user_management/components/AddNewEmployee"

import { UserManagement } from "./components/user_management/UserManagement";

export const Dashboard = () => {
  const appState = useSelector((state) =>state?.app)
  return (
    <>   
    <div className={""}>
      <SideBar  >
        <Routes>
          {/* Update the parent route path to include a trailing "*" */}
          <Route path="/" element={<h1>Dashboard</h1>} />
          {/* Update child route paths accordingly */}
          <Route path="/user-management" element={<UserManagement/>} />
          <Route path="/user-management/add-new-employee" element={<AddNewEmployee/>} />
        </Routes>
      </SideBar>
      </div>
    </>
  );
};
