import React from "react";
import { Link } from "react-router-dom"


export const ActivityLog = () => {
  return (
    <>
      <div className="">
        <div >
          <div class="mx-auto w-full ">
            <div class="flex flex-col items-center justify-between gap-4 rounded-lg p-4 sm:flex-row md:p-8">
              <div>
                <h2 class="text-xl font-bold text-indigo-500 md:text-2xl">
                  Employee Activity Logs
                </h2>
                <p class="text-gray-600">Realtime Activity for employee</p>
              </div>

              <button
                href="#"
                class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
       Refresh
              </button>
            </div>
          </div>
          <div class="overflow-x-auto   px-5">
  <table class="min-w-full divide-y-2 divide-gray-200 bg-gray-50 rounded-xl text-sm">
    <thead class=" ">
      <tr>
        <th class="whitespace-nowrap px-4 py-2 w-24  font-medium text-md  text-indigo-500 ">Emp Id </th>
        <th class="whitespace-nowrap px-4 py-2 w-52 font-medium text-md  text-indigo-500 ">Name of Employee</th>
        <th class="whitespace-nowrap px-4 py-2 w-64 font-medium text-md  text-indigo-500 ">Time</th>
        <th class="whitespace-nowrap px-4 py-2  w-full font-medium text-md  text-indigo-500 ">Activity</th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
 
      {SingleLog()}
      {SingleLog()}
      {SingleLog()}
    </tbody>
  </table>
</div>
        
        </div>
      </div>
    </>
  );

    function SingleLog() {
        return <tr>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700 ">1001</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">Suraj Lal Mehta</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">19:20:20 14 December 2023</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">Login in </td>
        </tr>;
    }
};
