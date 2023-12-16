import React from 'react'
import forgetImg from "../../assets/forget.jpg"
export const ForgetPassword = () => {
  return (
  <>
   <div className="flex items-center min-h-screen p-6 bg-gray-50 ">
      <div
        className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl "
      >
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full "
              src={forgetImg}
              alt="forgetImg"
            />
      
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1
                className="mb-4 text-xl font-semibold text-gray-700 "
              >
                Forgot password
              </h1>
              <label className="block text-sm">
                <span className="text-gray-700 ">Email</span>
                <input
                  className="block w-full mt-1 text-sm   focus:border-purple-400 focus:outline-none focus:shadow-outline-purple  form-input"
                  placeholder="suraj@gmail.com"
                />
              </label>


              <a
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                href="./login.html"
              >
                Recover password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
