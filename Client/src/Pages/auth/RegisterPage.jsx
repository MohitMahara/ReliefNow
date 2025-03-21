import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import AuthHeader from "./AuthHeader";


const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password.length < 6) {
        toast.error("Password must contain atleast 6 characters");
        return;
      }

      if (password !== conPassword) {
        toast.error( "Password and confirm password does not matched")
        return;
      }

      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/api/auth/register`,
        {
          name,
          email,
          phone,
          password,
        }
      );

      if (res.data.success) {
        toast("Registered Successfully");
        navigate("/login");
      }
    } catch (error) {
      const { msg } = error.response.data;
      toast.error(msg);
    }
  };


  return (
    <>
      <div className="container-fluid login-container">
        <AuthHeader/>
        <div className="formContainer">
          <form className="loginForm">
            <div className="login-header">
              <h1>Hi there !</h1>
              <p>Welcome to ReliefNow.</p>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <small className="text-primary">
                The password should contain atleast 6 characters
              </small>
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={conPassword}
                onChange={(e) => {
                  setConPassword(e.target.value);
                }}
                required
              />
            </div>


            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="btn submitbtn"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>

            <div className="form-group signUpCheck">
              <p>
                Have an account ?{" "}
                <NavLink className="link" to={"/login"}>
                  Login
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;