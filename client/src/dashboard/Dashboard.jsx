import React from "react";
import { Routes, Route } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import {  useSelector} from "react-redux"

import { AddNewEmployee } from "./components/user_management/components/AddNewEmployee"

import { UserManagement } from "./components/user_management/UserManagement";
import { DashboardHome } from "./components/dashboard_home/DashboardHome";
import { LeaveManagement } from "./components/leave_management/LeaveManagement";
import{ EmployeeActivity } from "./components/employee_activity/EmployeeActivity";
import { EmployeeAttendence } from "./components/employeeAttendence/EmployeeAttendence"
 export const Dashboard = () => {
  const State = useSelector((state) =>state)
  console.log(State)
  return (
    <>   
    <div className={""}>
      <SideBar  >
        <Routes>
          {/* Update the parent route path to include a trailing "*" */}
          <Route path="/" element={<DashboardHome/>} />
          {/* Update child route paths accordingly */}
          <Route path="/user-management" element={<UserManagement/>} />
          <Route path="/user-management/add-new-employee" element={<AddNewEmployee/>} />
          <Route path="/leave-management" element={<LeaveManagement/>} />
          <Route path="/employee-activity" element={<EmployeeActivity/>} />
          <Route path="/employee-attendence" element={<EmployeeAttendence/>} />
        </Routes>
      </SideBar>
      </div>
    </>
  );
};
