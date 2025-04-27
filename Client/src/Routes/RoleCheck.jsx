import React from "react";
import { UseFirebase } from "../Contexts/firebase";
import { Navigate, Outlet } from "react-router-dom";

export default function RoleCheck({ role}) {
    const { userInfo } = UseFirebase();
  
    if (!userInfo?.token) {
      return <Navigate to="/login" replace />;
    }
    if (userInfo?.user?.role !== role) {
      return <Navigate to="/" replace />;
    }
    return <Outlet/>;
  }
  