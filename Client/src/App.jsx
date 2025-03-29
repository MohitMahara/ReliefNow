import React from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./Components/Layout/Header"
import LoginPage from "./Pages/auth/LoginPage"
import RegisterPage from "./Pages/auth/RegisterPage"
import ForgetPasswordPage from "./Pages/auth/ForgetPasswordPage"

function App() {
 return <Routes>
    <Route path="/" element={<Header/>} />
    <Route path="/login" element={<LoginPage/>} />
    <Route path="/register" element={<RegisterPage/>} />
    <Route path="/forget-password" element={<ForgetPasswordPage/>} />
 </Routes>
}

export default App
