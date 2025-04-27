import React, { useState } from "react";
import { UseFirebase } from "../../Contexts/firebase";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {
  const [visible, setVisible] = useState(false);
  const { userInfo, setUserInfo } = UseFirebase();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

// For handling the mobile menu

  const handleClick = () => {
      if (visible) {
        setVisible(false);
        setIsOpen(false);
      }
      else setVisible(true);
  };

  // For handling the profile menu

  const handleMenu = () =>{
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  }

  // For handling the Logout

  const handleLogOut = async() =>{
    try {
      await setUserInfo({
        ...userInfo,
        user : null,
        token : null
       })

       localStorage.removeItem("reliefNow");
       setIsOpen(false);
       navigate("/login");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <nav className="bg-green-700 text-white shadow-md w-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex text-2xl font-bold content-center">
              {/* <img
                src=""
                alt=""
                className="h-10 w-10"
              /> */}
              <p className="ps-2">ReliefNow</p>
            </Link>
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link to="/" className="text-gray-100 hover:text-green-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/request-help" className="text-gray-100 hover:text-green-200">
                   Request Help
                </Link>
              </li>

              <li>
                <Link to="/donate" className="text-gray-100 hover:text-green-200">
                   Donate
                </Link>
              </li>

              <li>
                <Link to="/map" className="text-gray-100 hover:text-green-200">
                  Map
                </Link>
              </li>

              </ul>

              <div className="hidden md:flex">
                {userInfo?.token ? (
                  <>
                    <div className="relative flex flex-col items-center justify-center inline-block cursor-pointer mr-2">
                      {userInfo?.user?.photoURL ? (
                        <img src={userInfo?.user?.photoURL} className="rounded-full w-8 border h-8" alt="user profile pic" onClick={handleMenu}/>
                      ) : (

                         <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white text-xl mb-4" onClick={handleMenu}>
                            <p className="text-lg">{userInfo?.user?.name?.charAt(0)}</p>
                         </div>
                      )}

                     {isOpen && (
                      <div className="absolute z-20 flex flex-col bg-gray-800 text-md shadow-lg rounded-md text-white text-center top-10 left-1/2 transform -translate-x-1/2 w-25">
                        <NavLink to= "/dashboard" className="px-2 py-1.5 transition duration-200 ease-in-out hover:bg-gray-600 hover:text-white rounded-t-md">
                          Dashboard
                        </NavLink>                        
                        <NavLink className="px-2 py-1.5 transition duration-200 ease-in-out hover:bg-gray-600 hover:text-white rounded-b-md" onClick={handleLogOut}>
                          Logout
                        </NavLink>
                      </div>
                     )}

                    </div>
                  </>
                ) : (
                  <Link to="/register" className="bg-gray-100 text-green-600 py-2 px-4 rounded-lg hover:bg-green-200 transition duration-200">
                    SignUp
                  </Link>
                )}
              </div>

            <button
              id="menu-btn"
              className="md:hidden text-gray-700"
              onClick={handleClick}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

          </div>
          {visible && (
            <>
              <div id="mobile-menu" className="md:hidden">
                <ul className="flex flex-col space-y-4 py-4 text-center bg-green-700">
                  <li>
                    <Link to="/" className="block text-gray-100 hover:text-green-200">
                      Home
                    </Link>
                  </li>
                  <li>

                    <Link to="/request-help" className="block text-gray-100 hover:text-green-200">
                      Request Help
                    </Link>

                  </li>

                  <li>
                    <Link to="/donate" className="block text-gray-100 hover:text-green-200">
                      Donate
                    </Link>
                  </li>

                  <li>
                    <Link to="/map" className="block text-gray-100 hover:text-green-200">
                      Map
                    </Link>
                  </li>
                  <li>
                {userInfo?.token ? (
                  <>
                    <div className="relative flex flex-col items-center justify-center inline-block cursor-pointer mr-2">
                      {userInfo?.user?.photoURL ? (
                        <img src={userInfo?.user?.photoURL} className="rounded-full w-8 border h-8" alt="user profile pic" onClick={handleMenu}/>
                      ) : (

                         <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white text-xl mb-4" onClick={handleMenu}>
                         <p className="text-lg">{userInfo?.user?.name?.charAt(0)}</p>
                      </div>
                      )}

                     {isOpen && (
                      <div className="absolute z-20 flex flex-col bg-gray-800 text-md shadow-lg rounded-md text-white text-center top-10 left-1/2 transform -translate-x-1/2 w-25">
                        <NavLink to= "/dashboard" className="px-2 py-1.5 transition duration-200 ease-in-out hover:bg-gray-600 hover:text-white rounded-t-md">
                          Dashboard
                        </NavLink>  
                        <NavLink className="px-2 py-1.5 transition duration-200 ease-in-out hover:bg-gray-600 hover:text-white rounded-b-md" onClick={handleLogOut}>
                          Logout
                        </NavLink>
                      </div>
                     )}

                    </div>
                  </>
                ) : (
                  <Link to="/register" className="bg-gray-100 text-green-600 py-2 px-4 rounded-lg hover:bg-green-200 transition duration-200">
                    SignUp
                  </Link>
                )}
              </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};