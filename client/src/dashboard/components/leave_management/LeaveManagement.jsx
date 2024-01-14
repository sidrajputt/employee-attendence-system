import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchleaveData, updateleaveData } from "../../../redux-toolkit/slice/leaveSlice";
import { formattedDate, formattedDateOnly } from "../../../utils/formatDate"
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


export const LeaveManagement = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchleaveData());
  }, [dispatch]);

  const leaveData = useSelector((state) => state?.leave?.data?.data);
  console.log(leaveData);


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
      {/* <ToastContainer /> */}
      <section className="container px-2 mx-auto ">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg px-5 font-medium text-gray-800 ">
            All Employees Leave Request
          </h2>
        </div>

        <div className="flex flex-col mt-6">
          <div className="overflow-x-auto ">
            <div className="inline-block min-w-full py-2 align-middle px-2">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <div className="min-w-full divide-y divide-gray-200 ">
                  <div className="bg-gray-50 ">
                    <div className="flex justify-between">
                      <div className="px-1 py-3.5 text-sm font-normal text-center w-20 text-black ">
                        Employee Id
                      </div>

                      <div className="px-1 py-3.5 text-sm font-normal text-center w-40  text-black ">
                        Name
                      </div>
                      <div className="px-1 py-3.5 text-sm font-normal text-center w-28  text-black ">
                        Requested On
                      </div>
                      <div className="px-1 py-3.5 text-sm font-normal text-center w-16  text-black ">
                        No of Days
                      </div>
                      <div className="px-1 py-3.5 text-sm font-normal text-center w-24  text-black ">
                        Form Date
                      </div>
                      <div className="px-2 py-3.5 text-sm font-normal text-center w-24 text-black ">
                        To Date
                      </div>
                      <div className="px-2 py-3.5 text-sm font-normal text-center  w-52 text-black ">
                        Reason
                      </div>
                      <div className="px-2 py-3.5 text-sm font-normal text-center  w-20 text-black ">
                        Status
                      </div>

                      <div className="px-2 py-3.5 text-sm font-normal text-center  w-28 text-black ">
                        Action
                      </div>
                    </div>
                  </div>
                  <div className="bg-white divide-y divide-gray-200  ">
                    {leaveData?.map((data) => (
                      <div key={data?._id}>{LeaveRequest(data)}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  function LeaveRequest(data) {

    const updateLeaveRequest = (Leavedata) =>{
      dispatch(updateleaveData(Leavedata)).then(()=>dispatch(fetchleaveData()))
    
  
    }
    return (
      <>
            <div className="flex justify-between">
                      <div className="px-1 py-3.5 text-sm font-normal text-center w-20 text-black ">
                      {data?.employeeId?.employeeId}
                      </div>

                      <div className="px-1 py-3.5 text-sm font-normal text-center w-40  text-black ">
                      {data?.employeeId?.firstName} {data?.employeeId?.lastName}
                      </div>
                      <div className="px-1 py-3.5 text-sm font-normal text-center w-28  text-black ">
                    {formattedDate(data?.requestedOn)}
                    {/* {data?.requestedOn} */}
                      </div>
                      <div className="px-1 py-3.5 text-sm font-normal text-center w-16  text-black ">
                      {data?.noOfDays}
                      </div>
                      <div className="px-1 py-3.5 text-sm font-normal text-center w-24  text-black ">
                      {formattedDateOnly(data?.startDate)}
                      </div>
                      <div className="px-2 py-3.5 text-sm font-normal text-center w-24 text-black ">
                  {formattedDateOnly(data?.endDate)}
                      </div>
                      <div className="px-2 py-3.5 text-sm font-normal text-center capitalize  w-52 text-black ">
                      {data?.reason}
                      </div>
                      <div className="px-2 py-3.5 text-sm font-normal text-center capitalize w-20 text-black ">
                      {data?.status === "pending"? <span className="text-blue-600">Pending</span> :null} 
                      {data?.status === "approved"? <span className="text-green-600">Approved</span> :null} 
                      {data?.status === "rejected"? <span className="text-red-600">Rejected</span> :null} 
                      </div>

                      <div className="px-2 py-3.5 text-sm font-normal text-center  w-28 text-black ">
                      <div className="flex justify-between ">
              <button key={data?._id} onClick={ ()=> updateLeaveRequest({_id:data?._id, status:"approved"})} className=" font-semibold text-blue-400 transition-colors duration-200   hover:text-green-500 focus:outline-none">
                Accept
              </button>

              <button  key={data?._id}  onClick={ ()=> updateLeaveRequest({_id:data?._id, status:"rejected"})} className="font-semibold text-red-400 transition-colors duration-200  hover:text-red-600 focus:outline-none">
                Reject
              </button>
            </div>
                      </div>
                    </div>
      </>
    );
  }
};
