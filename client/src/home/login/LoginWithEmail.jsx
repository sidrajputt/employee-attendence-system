import React,{ useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import loginImg from "../../assets/login.png";
import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux-toolkit/slice/authSlice";

export const LoginWithEmail = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn)
const state = useSelector((state) => state)
console.log(state);
const [email, setEmail ] = useState("");
const [password, setPassword]=useState("");

useEffect(()=>{
  if(isLoggedIn){
    navigate('/dashboard');
  }
},[isLoggedIn,navigate])

const userdata = {
  email: email,
  password: password
}
const clearState = () =>{
setEmail("");
setPassword("");
}
const handleSubmit= (e) => {
  e.preventDefault();
  console.log("onSumbit:" ,userdata)
  dispatch(loginUser(userdata))
  clearState();
  navigate('/dashboard');
};

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
              src={loginImg}
              alt="login Img"
            />
   
          </div>
          <form  onSubmit={handleSubmit} className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1
                className="mb-4 text-xl font-semibold text-gray-700 "
              >
                Login
              </h1>
              <label className="block text-sm">
                <span className="text-gray-700 ">Email</span>
                <input
                  className="block w-full mt-1 text-sm border-black p-2 border rounded-lg shadow-outline-gray-400 "
                  placeholder="suraj@gmail.com"
                  onChange={(e)=>setEmail(e.target.value)}
                  type="email"
                  required
                />
              </label>
              <label className="block mt-4 text-sm">
                <span className="text-gray-700 ">Password</span>
                <input
                  className="block w-full mt-1 text-sm border-black p-2 border rounded-lg shadow-outline-gray-400 "
                  placeholder="************"
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  required

                />
              </label>

           
              <button
                type="submit"
                // onClick={ handleSubmit}
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        
              >
                Log in
              </button>

              <hr className="my-8" />

              <Link
                          to="/login-with-phone"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg  active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
              >
                
                Login with Phone
              </Link>
     

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600  hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
             
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
