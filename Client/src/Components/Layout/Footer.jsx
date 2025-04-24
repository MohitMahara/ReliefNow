import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-800 text-white py-6 mt-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-semibold">
            <p>ReliefNow</p>
          </div>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                map
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Quick links
              </a>
            </li>

          </ul>

          <p className="mt-4 md:mt-0 text-sm">
            © {new Date().getFullYear()} ReliefNow. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};