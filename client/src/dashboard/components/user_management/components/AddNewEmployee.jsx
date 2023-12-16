/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";

export const AddNewEmployee = () => {
  const data = useSelector((state) => state);
  console.log(data);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        employeeId: "",
        fullName: "",
        dateofbirth: "",
        gender: "",
        nationality: "",
        maritalStatus: "",
        phone: "",
        email: "",
        address: "",
        designation: "",
        depatment: "",
        employmentType: "",
        workLocation: "",
        salary: "",
        emg_contact_person: "",
        emg_contact_number: "",
        bloodGroup: "",
        healthCondition: "",
      },

      onSubmit: async (values, action) => {
        console.log("onSubmit", values);
      },
    });
  return (
    <>
      <div className="flex">
        <div
          className="w-full p-6 max-w-3xl bg-gray-50  mx-auto 
      rounded-lg shadow-md "
        >
          <div className="flex justify-between mx-auto">
            <div className="w-full">
              <h2 className="font-bold text-center  text-2xl my-6 text-primary">
                Add New Employee
              </h2>
            </div>
            {/* <button
             
              className="w-10 h-10 relative text-red-500 "
            >
              <XCircleIcon />
            </button> */}
          </div>
          <form>
            <h3 className="mt-8 mb-2 font-semibold">Basic Information</h3>
            <hr />
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm text-gray-800 "
                >
                  Employee ID
                </label>
                <input
                  value={values.employeeId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="employeeId"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                />
                {errors.employeeId && touched.employeeId ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.employeeId}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm text-gray-800 "
                >
                  Full Name
                </label>
                <input
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="fullName"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                />
                {errors.fullName && touched.fullName ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.fullName}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="dateofbirth"
                  className="block text-sm text-gray-800 "
                >
                  Date of Birth
                </label>
                <input
                  value={values.dateofbirth}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="date"
                  name="dateofbirth"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                />
                {errors.dateofbirth && touched.dateofbirth ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.dateofbirth}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm text-gray-800 "
                >
                  Gender
                </label>
                <select
                  id="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="gender"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="Other">Other</option>
                </select>

                {errors.gender && touched.gender ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.gender}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="nationality"
                  className="block text-sm text-gray-800 "
                >
                  Nationality
                </label>
                <input
                  value={values.nationality}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="nationality"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                />
                {errors.nationality && touched.nationality ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.nationality}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="maritalStatus"
                  className="block text-sm text-gray-800 "
                >
                  Marital Status
                </label>
                <select
                  id="maritalStatus"
                  value={values.maritalStatus}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="maritalStatus"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option value="">Select Marital status</option>
                  <option value="married">Married</option>
                  <option value="unmarried">UnMarried</option>
        
                </select>

        
                {errors.fullName && touched.fullName ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.fullName}
                  </p>
                ) : null}
              </div>
            </div>
            <h3 className="mt-8 mb-2 font-semibold">Contact Information</h3>
            <hr />
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-gray-800 "
                >
                  Phone Number
                </label>
                <input
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  name="phone"
                  inputMode="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                />
                {errors.phone && touched.phone ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.phone}
                  </p>
                ) : null}
              </div>

              <div className="">
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-800 "
                >
                  Email Address
                </label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                />
                {errors.email && touched.email ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm text-gray-800 "
                >
                  Address
                </label>
                <textarea
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="address"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                ></textarea>
                {errors.address && touched.address ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.address}
                  </p>
                ) : null}
              </div>
            </div>
            <h3 className="mt-8 mb-2 font-semibold">Employment Details</h3>
            <hr />
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="designation"
                  className="block text-sm text-gray-800 "
                >
                  Job Title / Designation
                </label>
                <input
                  value={values.designation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="designation"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                />
                {errors.designation && touched.designation ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.designation}
                  </p>
                ) : null}
              </div>
              <div className="">
                <label
                  htmlFor="depatment"
                  className="block text-sm text-gray-800 "
                >
                  Department
                </label>
                <input
                  value={values.depatment}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="depatment"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                />
                {errors.depatment && touched.depatment ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.depatment}
                  </p>
                ) : null}
              </div>{" "}
              <div className="">
                <label
                  htmlFor="employmentType"
                  className="block text-sm text-gray-800 "
                >
                  Employment Type
                </label>
                <input
                  value={values.employmentType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="employmentType"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                />
                {errors.employmentType && touched.employmentType ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.employmentType}
                  </p>
                ) : null}
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="workLocation"
                  className="block text-sm text-gray-800 "
                >
                  Work Location
                </label>
                <textarea
                  value={values.workLocation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="workLocation"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                ></textarea>
                {errors.workLocation && touched.workLocation ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.workLocation}
                  </p>
                ) : null}
              </div>
            </div>

            <h3 className="mt-8 mb-2 font-semibold">Salary Details</h3>
            <hr />
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="salary"
                  className="block text-sm text-gray-800 "
                >
                  Salary
                </label>
                <input
                  value={values.salary}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="salary"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                />
                {errors.salary && touched.salary ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.salary}
                  </p>
                ) : null}
              </div>
            </div>

            <h3 className="mt-8 mb-2 font-semibold">Emergency Contacts</h3>
            <hr />
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="emg_contact_person"
                  className="block text-sm text-gray-800 "
                >
                  Emergency Contact Person
                </label>
                <input
                  value={values.emg_contact_person}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="emg_contact_person"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                />
                {errors.emg_contact_person && touched.emg_contact_person ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.emg_contact_person}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="emg_contact_number"
                  className="block text-sm text-gray-800 "
                >
                  Emergency Contact Number
                </label>
                <input
                  value={values.emg_contact_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="emg_contact_number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                />
                {errors.emg_contact_number && touched.emg_contact_number ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.emg_contact_number}
                  </p>
                ) : null}
              </div>
            </div>
            <h3 className="mt-8 mb-2 font-semibold">Health Information:</h3>
            <hr />
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="bloodGroup"
                  className="block text-sm text-gray-800 "
                >
                  Blood Group+
                </label>
                <input
                  value={values.bloodGroup}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="bloodGroup"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                />
                {errors.bloodGroup && touched.bloodGroup ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.bloodGroup}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm text-gray-800 "
                >
                  Allergies or Health Conditions
                </label>
                <input
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  name="fullName"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder=""
                />
                {errors.fullName && touched.fullName ? (
                  <p className=" mt-1 px-5 text-sm text-red-600">
                    {errors.fullName}
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex justify-end   py-20">
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full px-6 py-2.5 max-w-lg m-auto text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Add New Employee
              </button>
            </div>
          </form>
        </div>
        <div className="w-full max-w-md p-5">
          <div class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
            <div class=" p-4 bg-lightColor">
              <h1 class="text-xl  text-center py-5 mb-5 font-bold text-gray-900">
                Employee Detail
              </h1>
           
              <p class="text-sm capitalize mt-2 font-semibold text-gray-600">
              Name: <span className="pl-2 text-black">  {values.fullName}  </span>
              </p>

              <p class="text-sm capitalize mt-2 font-semibold text-gray-600">
              Date of Birth: <span className="pl-2 text-black">  {values.dateofbirth}  </span>
              </p>
              <p class="text-sm capitalize mt-2 font-semibold text-gray-600">
                Gender: <span className="pl-2 text-black">  {values.gender}  </span>
              </p>
              <p class="text-sm capitalize mt-2 font-semibold text-gray-600">
              Nationality: <span className="pl-2 text-black">  {values.nationality}  </span>
              </p>

              <p class="text-sm capitalize mt-2 font-semibold text-gray-600">
              Marital Status: <span className="pl-2 text-black">  {values.maritalStatus}  </span>
              </p>

              <p class="text-sm capitalize mt-2 font-semibold text-gray-600">
              Phone Number: <span className="pl-2 text-black">  {values.phone}  </span>
              </p>

              <p class="text-sm capitalize mt-2 font-semibold text-gray-600">
                Gender: <span className="pl-2 text-black">  {values.gender}  </span>
              </p>

              <p class="text-sm capitalize mt-2 font-semibold text-gray-600">
                Gender: <span className="pl-2 text-black">  {values.gender}  </span>
              </p>

              <p class="text-sm capitalize mt-2 font-semibold text-gray-600">
                Gender: <span className="pl-2 text-black">  {values.gender}  </span>
              </p>

              <p class="text-sm capitalize mt-2 font-semibold text-gray-600">
                Gender: <span className="pl-2 text-black">  {values.gender}  </span>
              </p>

              <p class="text-sm capitalize mt-2 font-semibold text-gray-600">
                Gender: <span className="pl-2 text-black">  {values.gender}  </span>
              </p>

              <p class="text-sm capitalize mt-2 font-semibold text-gray-600">
                Gender: <span className="pl-2 text-black">  {values.gender}  </span>
              </p>








              <p class="mt-2 text-sm text-gray-600">
                You can&#x27;t buy your future, but you can do it. Money is
                nothing, you&#x27;r everything.
              </p>

              <div class="flex justify-between mt-3 item-center">
                <h1 class="text-xl font-bold text-gray-700">$220</h1>
                <button class="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                  Add to Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
