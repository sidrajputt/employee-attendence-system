import React from "react";
import { Link } from "react-router-dom";
import { HolidayForm } from "../employeeAttendence/components/HolidayForm";
import { ActivityLog } from "../employee_activity/components/ActivityLog";

export const DashboardHome = () => {
  return (
    <>
<div className="flex">


      <div className="flex w-96  m-5 rounded-lg bg-secondary shadow-lg">
        <div className=" p-5 w-full ">
          <h1 className="text-xl font-bold text-gray-900">Add New Employee</h1>
          <p className="mt-2 text-sm text-gray-600">
            You can add new Employee here.
          </p>

          <div className="flex justify-between mt-3 item-center">
            <Link
              to="add-new-employee"
              className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded"
            >
              Employee Form
            </Link>
          </div>
        </div>

      </div> 
      
      <div className="flex w-96  m-5 rounded-lg bg-secondary shadow-lg">
        <div className=" p-5 w-full ">
          <h1 className="text-xl font-bold text-gray-900">Create Holiday</h1>
          <p className="mt-2 text-sm text-gray-600">
            You can mark holiday.
          </p>

          <div className="flex justify-between mt-3 item-center">
          < HolidayForm   />
          </div>
        </div>
        
      </div> 
</div>
<ActivityLog />
    </>
  );
};
