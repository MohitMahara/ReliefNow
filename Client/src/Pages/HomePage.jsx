import React from "react";
import { Layout } from "../Components/Layout/Layout";
import { NavLink } from "react-router-dom";


export const HomePage = () => {
  return (
    <Layout>
      <div className="px-8 h-screen relative w-full homepage bg-cover bg-center">
        <div className="absolute inset-0 z-0 overlay"></div>
        <section className=" h-screen relative z-10 w-full flex flex-col justify-center align-center text-white py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Together, We Rebuild.
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Connecting victims with support, volunteers, and resources when
            disaster strikes.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <NavLink to={"/request-help"} className="bg-green-700 text-gray-100 px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
              Request Help
            </NavLink>
            <NavLink  to={"/volunteer"} className="bg-gray-300 text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-400 transition-colors">
              Become a Volunteer
            </NavLink>
          </div>
        </section>
      </div>
    </Layout>
  );
};
