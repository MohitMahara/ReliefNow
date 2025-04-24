import React from "react";
import { NavLink } from "react-router-dom";

export const AuthHeader = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto pt-3">
          <NavLink to={"/"}>
             <h2 className="text-xl">ReliefNow</h2>
          </NavLink>
        </div>
      </div>
    </>
  );
};