import React from "react";
import { Layout } from "../Components/Layout/Layout";

export const ResueReq = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-semibold mb-4 text-center">Rescue Request</h1>
        <form className="w-[80%]">
             <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                <input type="text" className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none leading-tight focus:shadow-outline" />
             </div>

             <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
             </div>

             <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2"></label>
                <textarea rows={10} cols={50} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
             </div>

             <div className="mb-4">
               <button className="w-full rounded-lg py-2 px-8 bg-green-700 text-white font-semibold hover:bg-green-600 transition-colors duration-300">Submit</button>
             </div>

           </form>
      </div>
    </Layout>
  );
};
