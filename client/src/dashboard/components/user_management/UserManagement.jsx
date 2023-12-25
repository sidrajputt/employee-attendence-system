/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import avator from "../../../assets/Avator.png";
import { fetchEmployeeData } from "../../../redux-toolkit/slice/employeeSlice";

export const UserManagement = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployeeData());
  }, [dispatch]);
  const State = useSelector((state) => state);
  console.log("State", State);
  const EmployeeData = useSelector((state) => state?.employee?.data?.data);
  const appState = useSelector((state) => state.app);
  console.log(appState);

  return (
    <>
      <div className="px-2 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6 lg:py-6">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <div>
                <nav aria-label="Breadcrumb" className="flex">
                  <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
                    <li className="flex items-center">
                      <Link
                        to="/dashboard"
                        className="flex h-10 items-center gap-1.5 bg-gray-100 px-2 divansition hover:text-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          sdivoke="currentColor"
                        >
                          <padiv
                            sdivokeLinecap="round"
                            sdivokeLinejoin="round"
                            sdivokeWiddiv="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>

                        <span className="ms-1.5 text-xs font-medium">
                          {" "}
                          Dashboard{" "}
                        </span>
                      </Link>
                    </li>

                    <li className="relative flex items-center">
                      <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-padiv:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

                      <Link
                        to="/dashboard/user-management"
                        className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium divansition hover:text-gray-900"
                      >
                        User Management
                      </Link>
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="max-w-lg mb-2 mt-6  font-sans text-2xl font-bold divacking-tight text-gray-900 sm:text-3xl sm:leading-none">
                User Management
              </h2>
              <p className="text-sm text-gray-700 md:text-base">
                Add New Employee, Edit Details or Remove Employee
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-5 row-gap-8 grid-cols-3">{ActionCard()}</div>

        <section className="container px-2 mx-auto mt-8">
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 ">
              All Employees
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full  ">
              100 users
            </span>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                  <div className="min-w-full divide-y divide-gray-200 ">
                    <div className="bg-gray-50 ">
                      <div className="flex justify-around  ">
                        <div className="py-3.5 px-2 text-sm font-normal text-left  text-black ">
                          <div className="flex items-center gap-x-3 w-32 ">
                            <span>Name</span>
                          </div>
                        </div>

                        <div className="px-4 py-3.5 text-sm font-normal text-left  text-black ">
                          <div className="flex items-center gap-x-2 w-12">
                            <span>Salary</span>
                          </div>
                        </div>

                        <div className="px-2 py-3.5 text-sm font-normal text-left  text-black ">
                          <div className="flex items-center gap-x-2 w-12">
                            <span>Gender</span>
                          </div>
                        </div>

                        <div className="px-1 py-3.5 text-sm font-normal text-center w-28  text-black ">
                          Designation
                        </div>

                        <div className="px-2 py-3.5 text-sm font-normal text-left  w-20 text-black ">
                          Department
                        </div>
                        <div className="px-2 py-3.5 text-sm font-normal text-left  w-28 text-black ">
                          Phone
                        </div>
                        <div className="px-2  py-3.5 text-sm font-normal text-left w-24 text-black ">
                          Employment Type
                        </div>
                        <div className="px-2 py-3.5 text-sm font-normal text-center w-40 text-black ">
                          Email
                        </div>
                        <div className="px-2 py-3.5 text-sm font-normal text-left w-52 text-black ">
                          Work Location
                        </div>

                        <div className="px-2 relative py-3.5 text-sm font-normal text-center w-24 text-black ">
                          Action
                        </div>
                      </div>
                    </div>
                    <div className="bg-white divide-y divide-gray-200  ">
                      {EmployeeData?.map((employee) => (
                        <div key={employee?._id}>
                          {EmployeeDataRow(employee)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );

  function ActionCard() {
    return (
      <div className="flex  rounded-lg bg-secondary shadow-lg">
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
    );
  }

  function EmployeeDataRow(employee) {
    return (
      <div className="inline-block min-w-full py-2 align-middle ">
        <div className="overflow-hidden border border-gray-200  ">
          <div className="min-w-full divide-y divide-gray-200 ">
            <div className="bg-gray-50 ">
              <div className="flex justify-around  gap-x-1 ">
                <div className="py-3.5 px-2 text-sm font-normal text-left  text-black ">
                  <div className=" items-center gap-x-3 w-32 ">
                    <p className="font-semibold text-black">
                      {employee?.firstName} {employee?.lastName}{" "}
                    </p>
                    <p>{employee?.employeeId}</p>
                  </div>
                </div>

                <div className="px-4 py-3.5 text-sm font-normal text-left  text-black ">
                  <div className="flex items-center gap-x-2 w-12">
                    <span>{employee?.salary}</span>
                  </div>
                </div>

                <div className="px-2 py-3.5 text-sm font-normal text-left  text-black ">
                  <div className="flex items-center gap-x-2 w-12 capitalize">
                    <span>{employee.gender}</span>
                  </div>
                </div>

                <div className="px-1 py-3.5 text-sm font-normal text-center w-28  text-black ">
                {employee.designation}
                </div>

                <div className="px-2 py-3.5 text-sm font-normal text-left  w-20 text-black ">
                {employee.department}
                </div>
                <div className="px-2 py-3.5 text-sm font-normal text-left  w-28 text-black ">
                  {employee.phone}
                </div>
                <div className="px-2  py-3.5 text-sm font-normal text-left w-24 text-black ">
                 {employee.employmentType}
                </div>
                <div className="px-2 py-3.5 text-sm font-normal text-center w-44 text-black ">
                {employee.email}
                </div>
                <div className="px-2 py-3.5 text-sm font-normal text-left w-52 text-black ">
                {employee.workLocation}
                </div>
           
                <div className="px-2 py-3.5 relative  text-sm font-normal text-center w-24 text-black">
                  <div className="flex items-center gap-x-2">
                    <button className="text-blue-500 transition-colors duration-200 hover:text-blue-700 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>
                    </button>
                    {/* Delete  */}
                    <button className="text-red-400 transition-colors duration-200  hover:text-red-600 focus:outline-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                        </button>
                  
                    {/* Edit */}
                    <button className="text-black divansition-colors duration-200  hover:text-gray-500 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"
                      >
                        <path
                      strokeLinecap="round" strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
