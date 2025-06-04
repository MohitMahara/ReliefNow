import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { LoginPage } from "./Pages/auth/LoginPage";
import {RegisterPage} from "./Pages/auth/RegisterPage";
import {ForgetPasswordPage} from "./Pages/auth/ForgetPasswordPage";
import { Toaster } from "react-hot-toast";
import "./styles/App.css";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { ResueReq } from "./Pages/RescueReq";
import { BecomeVolunteer } from "./Pages/BecomeVolunteer";

function App() {
  return (
    <>
      <Toaster position="top-center" toastOptions={{ default: { duration: 3000 } }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/rescue-request" element={<ResueReq />} />
        <Route path="/become-volunteer"  element={<BecomeVolunteer/>} />
 
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<h1>Profile</h1>} />

        </Route>


      </Routes>
    </>
  );
}

export default App;
