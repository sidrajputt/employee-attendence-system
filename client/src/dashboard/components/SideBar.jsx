/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
// import Avator from "../../assets/Avator.png";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetAuthState, logout } from "../../redux-toolkit/slice/authSlice";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SideBar = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const admin = useSelector((state) => state?.auth?.user?.admin);
  // const state = useSelector((state) => state)
  const [viewMenu, setViewMenu] = useState(false);

  // console.log(state);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate, isLoggedIn]);

  const logoutFunction = async () => {
    dispatch(resetAuthState());
    dispatch(logout());
    navigate("/");
  };

  const toggleViewMenu =  () =>{
    setViewMenu(!viewMenu)
  }
 const openViewMenu = "fixed top-20  h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300   md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[18%]  "
 const closeViewMenu = `fixed  z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300   md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[18%] `

console.log(viewMenu)
  return (
    <>
  
      <aside className={  viewMenu? openViewMenu: closeViewMenu }>
        <div>
          <div className="sm:mt-0 flex  justify-between   py-2">
            <img className="rounded-xl h-14  sm:m-auto" src={logo} alt=" logo" />
            {viewMenu ? <button
              onClick={ toggleViewMenu}
              className="sm:hidden  text-white h-8 py-1 px-3 my-auto rounded-xl text-sm  font-semibold bg-red-500"
            >
             Close
            </button>: null }
           
          </div>

          <div className=" text-center flex">
            <div className="text-start m-auto   ">
              <h5 className="hidden  text-lg font-semibold text-gray-600 lg:block ">
                {admin?.firstName} {admin?.lastName}{viewMenu}
              </h5>
              <span className="hidden text-sm text-gray-400 lg:block">
                Admin
              </span>
            </div>
          </div>
          <ToastContainer />
          <ul className="mt-8 space-y-2 tracking-wide">
            <li>
              <Link
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 "
                to="/dashboard"
              >
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    className=" fill-current text-cyan-400"
                  ></path>
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    className="fill-current text-cyan-200 group-hover:text-cyan-300"
                  ></path>
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    className="fill-current group-hover:text-sky-300"
                  ></path>
                </svg>
                <span className="group-hover:text-gray-700 ">Dashboard  {viewMenu}</span>
              </Link>
            </li>
            <li>
              <Link
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 "
                to="user-management"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
                <span className="group-hover:text-gray-700 ">
                  User Management
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/leave-management"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 "
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600 "
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clipRule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                  />
                </svg>
                <span className="group-hover:text-gray-700 ">
                  Leave Management
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/employee-activity"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    fillRule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clipRule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600 "
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span className="group-hover:text-gray-700 ">
                  Employee Activity
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/employee-attendence"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600 "
                    d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                  />
                </svg>
                <span className="group-hover:text-gray-700 ">
                  Emp. Attendence
                </span>
              </Link>
            </li>
            {/* <li>
              <a
                to="/dashboard"
                className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600 "
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="group-hover:text-gray-700 ">
                  Salary Tracking
                </span>
              </a>
            </li> */}
          </ul>
        </div>

        <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4  ">
          <button
            onClick={() => logoutFunction()}
            className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className=" hover:text-primary ">Logout</span>
          </button>
        </div>
      </aside>
      <div className="ml-auto z-20 mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[82%]">
        <div className="sticky top-0 h-16 border-b bg-white  lg:py-2.5">
          <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
            <h5 hidden className="text-2xl font-medium text-gray-600 lg:block ">
              Dashboard {viewMenu}
            </h5>
            <button
              onClick={() => toggleViewMenu()}
              className="-mr-2 h-16 w-12 border-r lg:hidden  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="my-auto h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
 
        {children}
      </div>
    </>
  );
};
