import React from "react";
import { Link } from "react-router-dom";
export const LeaveManagement = () => {
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
                        Leave Management
                      </Link>
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="max-w-lg mb-2 mt-6  font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
                Leave Management
              </h2>
              <p className="text-sm text-gray-700 md:text-base">
                You can accept or reject employee leave request
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="container px-2 mx-auto ">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">
            All Employees Request
          </h2>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50 ">
                    <tr>
               
                      <th
                        scope="col"
                        className="px-1 py-3.5 text-sm font-normal text-center w-24 text-gray-500 "
                      >
                       Employee Id
                      </th>
                
                      <th
                        scope="col"
                        className="px-1 py-3.5 text-sm font-normal text-center w-40  text-gray-500 "
                      >
                       Name
                      </th>
                      <th
                        scope="col"
                        className="px-1 py-3.5 text-sm font-normal text-center w-14  text-gray-500 "
                      >
                        No of Days
                      </th>
                      <th
                        scope="col"
                        className="px-1 py-3.5 text-sm font-normal text-center w-32  text-gray-500 "
                      >
                        Form Date
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3.5 text-sm font-normal text-center w-32  text-gray-500 "
                      >
                        To Date
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3.5 text-sm font-normal text-left  text-gray-500 "
                      >
                        Reason
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-3.5 text-sm font-normal text-center  w-32 text-gray-500 "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200  ">
                    {LeaveRequest()}
                    {LeaveRequest()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  function LeaveRequest() {
    return (
      <tr>
        <td className="px-4 py-4 text-sm font-medium  text-gray-700 whitespace-nowrap">
          <h2 className="text-sm font-semibold "> 1001</h2>
        </td>
        <td className="px-4 py-4 text-sm text-gray-500  text-left whitespace-nowrap">
          Suraj Lal Mehta
        </td>
        <td className="px-2 py-4 text-sm text-gray-500  text-center whitespace-nowrap">
          03
        </td>
        <td className="px-2 py-4 text-sm text-gray-500  text-center whitespace-nowrap">
          01/02/1230
        </td>
        <td className="px-2 py-4 text-sm text-gray-500  whitespace-nowrap">
          01/02/1230
        </td>

        <td className="px-2 py-4 text-sm text-gray-500  whitespace-nowrap">
        I have some import work
        </td>

        <td className="px-2 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center gap-x-4">
            {/* Delete  */}
            <button className=" font-semibold text-blue-400 transition-colors duration-200   hover:text-green-500 focus:outline-none">
           Accept
            </button>
         
            {/* Edit */}
            <button className="font-semibold text-red-400 transition-colors duration-200  hover:text-red-600 focus:outline-none">
            Reject
            </button>
          </div>
        </td>
      </tr>
    );
  }
};
