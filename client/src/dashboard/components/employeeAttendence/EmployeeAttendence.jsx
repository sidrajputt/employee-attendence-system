import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MonthlyCalendar } from "./components/MonthlyCalender";
import { AttendanceReport } from "./components/AttendanceReport";
import { useSelector } from "react-redux";
import { HolidayForm } from "./components/HolidayForm";

export const EmployeeAttendence = () => {
  const employeeData = useSelector((state) => state?.employee?.data?.data);
  console.log(employeeData);
  const [veiwReport, setVeiwReport] = useState(false);
  const [selectEmployee, setSelectEmployee] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    const filteredResults = employeeData.filter(
      (employee) =>
        employee.employeeId.includes(e.target.value) ||
        employee.firstName
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        employee.lastName
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        employee.phone.toString().includes(e.target.value) ||
        employee.email.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const displayEmployees =
    searchResults.length > 0 ? searchResults : employeeData;

  return (
    <>
      <div className="px-2 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6 lg:py-6">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl ">
              <div>
                <nav aria-label="Breadcrumb" className="flex">
                  <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
                    <li className="flex items-center">
                      <Link
                        to="/dashboard"
                        className="flex h-10 items-center gap-1.5 bg-gray-100 px-2 transition hover:text-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
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
                      <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

                      <Link
                        to="/dashboard/user-management"
                        className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                      >
                        Attendence Management
                      </Link>
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="max-w-lg mb-2 mt-6  font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
                Attendence Management
              </h2>
              <p className="text-sm text-gray-700 md:text-base">
                You can view attendance report of employee.
              </p>
            </div>
            < HolidayForm   /> 
          </div>
        </div>
    

        <div className=" pt-10 ">
          <div>
            <div className="max-w-lg ">
              <div className="relative flex items-center mb-10 text-gray-400 focus-within:text-cyan-400">
                <span className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 ">
                  <svg
                    xmlns="http://ww50w3.org/2000/svg"
                    className="w-4 fill-current"
                    viewBox="0 0 35.997 36.004"
                  >
                    <path
                      id="Icon_awesome-search"
                      data-name="search"
                      d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search by ID, Name, Phone, or Email"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300  "
                />
              </div>
            </div>

            {veiwReport ? (
              <div className="">
                <AttendanceReport
                  employee={selectEmployee}
                  setVeiwReport={setVeiwReport}
                />
              </div>
            ) :   <div className="w-full">
            {displayEmployees.map((employee) => EmployeeRow(employee))}
          </div>}

          
          </div>
        </div>
      </div>
    </>
  );

  function EmployeeRow(employee) {
    const handleClick = (employee) => {
      setVeiwReport(!veiwReport);
      setSelectEmployee(employee);
    };
    return (
      <div
        key={employee?._id}
        className=" bg-white rounded-md shadow-md mb-5 flex  justify-between"
      >
        <div className="md:flex  space-x-5 p-5 ">
          <div className="w-40 font-semibold text-blue-500">
            {employee.firstName} {employee.lastName}
          </div>
          <div className="w-32 ">Emp. ID: {employee.employeeId}</div>
          <div className="w-56">Email: {employee.email}</div>
          <div className="w-40">Phone: {employee.phone}</div>
        </div>
        <button
          onClick={() => handleClick(employee)}
          className="bg-blue-500 h-10 px-3 py-1.5  rounded-lg my-auto mx-auto md:mx-5 text-sm text-white font-semibold"
        >
          View Report
        </button>
      </div>
    );
  }
};
