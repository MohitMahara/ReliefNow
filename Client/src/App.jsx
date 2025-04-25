import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { LoginPage } from "./Pages/auth/LoginPage";
import {RegisterPage} from "./Pages/auth/RegisterPage";
import {ForgetPasswordPage} from "./Pages/auth/ForgetPasswordPage";
import { Toaster } from "react-hot-toast";
import "./styles/App.css";

function App() {
  return (
    <>
      <Toaster position="top-center" toastOptions={{ default: { duration: 1500 } }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
      </Routes>
    </>
  );
}

export default App;
