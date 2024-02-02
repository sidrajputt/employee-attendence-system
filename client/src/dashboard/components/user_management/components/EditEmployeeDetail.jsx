/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  createNewEmployee,
  fetchEmployeeData,
} from "../../../../redux-toolkit/slice/employeeSlice";

export const EditEmployeeDetail = ({ empData, setEdit }) => {
  const dispatch = useDispatch();

  const [employeeId, setEmployeeId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [dateofbirth, setDateOfBirth] = useState(null);
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");

  const [employmentType, setEmploymentType] = useState("");
  const [salary, setSalary] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [emg_contact_person, setEmg_contact_person] = useState("");
  const [emg_contact_number, setEmg_contact_number] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [healthCondition, setHealthCondition] = useState("");

  useEffect(() => {
    setEmployeeId(empData?.employeeId || "");
    setFirstName(empData?.firstName || "");
    setLastName(empData?.lastName || "");
    setDateOfBirth("2024-01-14" || "");
    setDateOfBirth(empData?.dateofbirth || "");
    setGender(empData?.gender || "");
    setNationality(empData?.nationality || "");
    setMaritalStatus(empData?.maritalStatus || "");
    setPhone(empData?.phone || "");
    setEmail(empData?.email || "");
    setAddress(empData?.address || "");
    setDesignation(empData?.designation || "");
    setDepartment(empData?.department || "");
    setEmploymentType(empData?.employmentType || "");
    setSalary(empData?.salary || "");
    setWorkLocation(empData?.workLocation || "");
    setEmg_contact_person(empData?.emg_contact_person || "");
    setEmg_contact_number(empData?.emg_contact_number || "");
    setBloodGroup(empData?.bloodGroup || "");
    setHealthCondition(empData?.healthCondition || "");
  }, [empData]);

  var newupdatedata = {
    employeeId: employeeId,
    firstName: firstName,
    lastName: lastName,
    password: password,
    dateofbirth: dateofbirth,
    gender: gender,
    nationality: nationality,
    maritalStatus: maritalStatus,
    phone: phone,
    email: email,
    address: address,
    designation: designation,
    department: department,
    employmentType: employmentType,
    salary: salary,
    workLocation: workLocation,
    emg_contact_person: emg_contact_person,
    emg_contact_number: emg_contact_number,
    bloodGroup: bloodGroup,
    healthCondition: healthCondition,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // dispatch(createNewEmployee(newupdatedata))
    dispatch(fetchEmployeeData());
  };

  return (
    <>
      <div
        className="w-full p-6 max-w-4xl z-70 bg-green-50  mx-auto 
      rounded-2xl shadow-md "
      >
        <div className="flex justify-between mx-auto">
          <div className="w-full">
            <h2 className="font-bold text-center  text-2xl my-6 text-primary">
              Add New Employee
            </h2>
          </div>
          <button
            onClick={() => setEdit(false)}
            className="h-5 my-auto text-red-500 text-sm font-semibold"
          >
            Close
          </button>
        </div>
        <form onSubmit={handleSubmit}>
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
                value={employeeId || ""}
                onChange={(e) => setEmployeeId(e.target.value)}
                type="text"
                name="employeeId"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              />
            </div>

            <div>
              <label
                htmlFor="Password"
                className="block text-sm text-gray-800 "
              >
                Password
              </label>
              <input
                value={password || ""}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              />
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm text-gray-800 "
              >
                First Name
              </label>
              <input
                value={firstName || ""}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                name="firstName"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm text-gray-800 "
              >
                Last Name
              </label>
              <input
                value={lastName || ""}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                name="lastName"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              />
            </div>
            <div>
              <label
                htmlFor="dateofbirth"
                className="block text-sm text-gray-800 "
              >
                Date of Birth
              </label>
              {dateofbirth}
              <input
                value={dateofbirth || ""}
                onChange={(e) => setDateOfBirth(e.target.value)}
                type="date"
                name="dateofbirth"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-sm text-gray-800 ">
                Gender
              </label>
              <select
                id="gender"
                value={gender || ""}
                onChange={(e) => setGender(e.target.value)}
                name="gender"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="nationality"
                className="block text-sm text-gray-800 "
              >
                Nationality
              </label>
              <input
                value={nationality || ""}
                onChange={(e) => setNationality(e.target.value)}
                type="text"
                name="nationality"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              />
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
                value={maritalStatus || ""}
                onChange={(e) => setMaritalStatus(e.target.value)}
                name="maritalStatus"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="">Select Marital status</option>
                <option value="married">Married</option>
                <option value="unmarried">UnMarried</option>
              </select>
            </div>
          </div>
          <h3 className="mt-8 mb-2 font-semibold">Contact Information</h3>
          <hr />
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-800 ">
                Phone Number
              </label>
              <input
                value={phone || ""}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                name="phone"
                inputMode="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              />
            </div>

            <div className="">
              <label htmlFor="email" className="block text-sm text-gray-800 ">
                Email Address
              </label>
              <input
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="address" className="block text-sm text-gray-800 ">
                Address
              </label>
              <textarea
                value={address || ""}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                name="address"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              ></textarea>
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
                value={designation || ""}
                onChange={(e) => setDesignation(e.target.value)}
                type="text"
                name="designation"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              />
            </div>
            <div className="">
              <label
                htmlFor="department"
                className="block text-sm text-gray-800 "
              >
                Department
              </label>
              <input
                value={department || ""}
                onChange={(e) => setDepartment(e.target.value)}
                type="text"
                name="department"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              />
            </div>{" "}
            <div className="">
              <label
                htmlFor="employmentType"
                className="block text-sm text-gray-800 "
              >
                Employment Type
              </label>
              <select
                id="employmentType"
                value={employmentType || ""}
                onChange={(e) => setEmploymentType(e.target.value)}
                name="employmentType"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="">Select Employment Type</option>
                <option value="onsite">OnSite</option>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="workLocation"
                className="block text-sm text-gray-800 "
              >
                Work Location
              </label>
              <textarea
                value={workLocation || ""}
                onChange={(e) => setWorkLocation(e.target.value)}
                type="text"
                name="workLocation"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              ></textarea>
            </div>
          </div>

          <h3 className="mt-8 mb-2 font-semibold">Salary Details</h3>
          <hr />
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label htmlFor="salary" className="block text-sm text-gray-800 ">
                Salary
              </label>
              <input
                value={salary || ""}
                onChange={(e) => setSalary(e.target.value)}
                type="number"
                name="salary"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              />
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
                value={emg_contact_person || ""}
                onChange={(e) => setEmg_contact_person(e.target.value)}
                type="text"
                name="emg_contact_person"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              />
            </div>
            <div>
              <label
                htmlFor="emg_contact_number"
                className="block text-sm text-gray-800 "
              >
                Emergency Contact Number
              </label>
              <input
                value={emg_contact_number || ""}
                onChange={(e) => setEmg_contact_number(e.target.value)}
                type="number"
                name="emg_contact_number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              />
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

              <select
                id="bloodGroup"
                value={bloodGroup || ""}
                onChange={(e) => setBloodGroup(e.target.value)}
                name="bloodGroup"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="">Select Blood Group</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="healthCondition"
                className="block text-sm text-gray-800 "
              >
                Allergies or Health Conditions
              </label>
              <input
                value={healthCondition || ""}
                onChange={(e) => setHealthCondition(e.target.value)}
                type="text"
                name="healthCondition"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder=""
              />
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
    </>
  );
};
