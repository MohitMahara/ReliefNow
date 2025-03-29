import React, {useState} from "react";
import AuthHeader from "./AuthHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [userExists, setUserExists] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [password, setPassword] = useState("");
  const[confirmPass, setConfirmPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/api/auth/forget-password`, {
        email
      })

      if(res.data.success){
        setUserExists(true);
        await axios.post(`${import.meta.env.VITE_SERVER_API}/api/auth/generate-otp`, {email});
        console.log(res.data.msg);
      }
      
    } catch (error) {
      console.log(error);
    }
  }


  const handleOTP = async(e) =>{
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/api/auth/verify-otp`, {
        otp,email
      })

      if(res.data.success){
         alert(res.data.msg);
         setIsOtpVerified(true);
      }
      
    } catch (error) {
      console.log(error);
    }
  }


  const handlePasswordReset = async(e) =>{
    e.preventDefault();
    try {

      if(password !== confirmPass){
        alert("Password does not match");
        return;
      }

      const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/api/auth/reset-password`, {
        email, confirmPass
      })

      if(res.data.success){
         alert(res.data.msg);
         navigate("/login");
      }
      
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className="container-fluid login-container">
        <AuthHeader />
        <div className="formContainer">
          <form className="loginForm">
            <div className="login-header">
              <h1>Password Reset</h1>
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your registered email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            {userExists &&(<><p>OTP sent on your registered email</p></>)}
            <div className="form-group">
              <button
                type="submit"
                className="btn submitbtn"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>

            {userExists && (
              <>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="otp"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
              />
            </div>


            <div className="form-group">
              <button
                type="submit"
                className="btn submitbtn"
                onClick={handleOTP}
              >
                Submit
              </button>
            </div>
              </>
            )}



         {isOtpVerified && (
              <>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="confirmpass"
                placeholder="Confirm password"
                value={confirmPass}
                onChange={(e) => {
                  setConfirmPass(e.target.value);
                }}
              />
            </div>


            <div className="form-group">
              <button
                type="submit"
                className="btn submitbtn"
                onClick={handlePasswordReset}
              >
                Submit
              </button>
            </div>
              </>
            )} 

          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordPage;
