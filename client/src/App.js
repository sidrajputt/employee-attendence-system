import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { LoginWithEmail } from "./home/login/LoginWithEmail";
import { ForgetPassword } from "./home/forgetpassword/ForgetPassword";
import { LoginWithPhone } from "./home/login/LoginWithPhone";
import { Dashboard } from "./dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginWithEmail/>} />
        <Route path="/login" element={<LoginWithEmail/>} />
        <Route path="/login-with-phone" element={<LoginWithPhone/>} />
        <Route path="/dashboard/*" element={<Dashboard/>} />
        {/* <Route path="/dashboard/user-management" element={<Dashboard/>} /> */}
        <Route path="/forgot-password" element={<ForgetPassword/>} />
      </Routes>
    </Router>
  );
};

export default App;