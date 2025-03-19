import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { UseFirebase } from '../../Contexts/firebase';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
   const { userInfo, setUserInfo, signInGoogle} = UseFirebase();
   const [email, setEmail] = useState("");
   const [password, setPassword]   = useState("");
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post(`${meta.VITE_AP_SERVER}/api/auth/login`, {
          email, password
      });


      if(res.data.success){
        toast.success("Login Successfully");
     
        setUserInfo({
          ...userInfo,
          user: res.data.user,
          token: res.data.token,
        });

        localStorage.setItem("reliefnow", JSON.stringify(res.data));

        navigate("/");
      }

    } catch (error) {
      const {msg} = error.response.data;
      toast.error(msg);
    }
  };









    return (
        <section className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-4">Sign In</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input type="email" className="w-full p-2 border rounded-md" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input type="password" className="w-full p-2 border rounded-md" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
                    </div>
                    <div className="flex justify-between text-sm">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-1" /> Remember me
                        </label>
                        <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700" onClick={handleSubmit}>
                        Sign In
                    </button>
                    <p className="text-center text-sm">
                        Don’t have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default LoginPage;