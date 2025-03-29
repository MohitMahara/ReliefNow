import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { UseFirebase } from "../../Contexts/firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast} from "react-toastify";
import AuthHeader from "./AuthHeader";

const LoginPage = () => {
  const { userInfo, setUserInfo, signInGoogle} = UseFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post(`${import.meta.env.VITE_SERVER_API}/api/auth/login`, {
          email, password
      });


      if(res.data.success){
        toast.success("Login Successfully");
     
        setUserInfo({
          ...userInfo,
          user: res.data.user,
          token: res.data.token,
        });

        localStorage.setItem("reliefNow", JSON.stringify(res.data));

        navigate("/");
      }

    } catch (error) {
      const {msg} = error.response.data;
      toast.error(msg);
    }
  };


  const loginwithGoogle = async (e) => {
    e.preventDefault();
    try {

      const snapshot = await signInGoogle();
      const data = snapshot?.user;
      const token = snapshot?._tokenResponse.idToken;

      const userData = {
          name : data.displayName,
          email : data.email,
          photoURL : data.photoURL,
          googleId : data.uid
      }
       
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/api/auth/register-google`,{
          userData,
        }
      );

      if(res.data.success){

        const user = res.data?.isExists || res.data?.user;

        setUserInfo({
          ...userInfo,
          user: user,
          token: token,
        });
  
        localStorage.setItem("reliefNow", JSON.stringify({user, token}));

        navigate("/");
      }



    } catch (error) {
      console.log(error);
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
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
              />
            </div>

            <div className="form-group">
              <NavLink to={"/forget-password"}>Forget Password</NavLink>
              
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

            <p>OR</p>

            <div className="form-group">
              <button
                type="submit"
                className="btn submitbtn googlebtn"
                onClick={loginwithGoogle}
              >
                <FaGoogle className="me-2" />
                Log in with Google
              </button>
            </div>

            <div className="form-group signUpCheck">
              <p>
                Don't have an account ?{" "}
                <NavLink className="link" to={"/register"}>
                  SignUp
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;