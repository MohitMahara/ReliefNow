import React, {useState} from "react";
import { UseFirebase } from "../../Contexts/firebase";
import { NavLink } from "react-router-dom";

export const MenuBtn  = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {userInfo} = UseFirebase();



    const handleClick = () =>{
        if(isOpen)setIsOpen(false);
        else setIsOpen(true);
    }

    return <>
       <div className="block md:hidden" onClick={handleClick}>
         &#9776; Menu
       </div>

       {isOpen &&(
         <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10 transition duration-300 ease-in-out" onClick={() => setIsOpen(false)}></div>
       )}
       
        <div className={`md:hidden left-0 top-30 fixed w-[65%] bg-white h-100 shadow-lg rounded-lg p-4 z-20 mt-4 transition duration-200 ease-in-out ${isOpen ? "block" : "hidden"}`}>
           <div className="profile-header flex flex-col items-center justify-center mb-4">
              {userInfo?.user?.photoURL ? (
                <>
                  <img
                    src={userInfo?.user?.photoURL}
                    className="rounded-full w-16  h-16"
                    alt="user profile pic"
                  />

                  <h3 className="pt-1 text-lg font-bold">
                    {userInfo?.user.name}
                  </h3>

                  
                  <p className="pt-1 text-sm font-semibold text-gray-500">
                    {userInfo?.user?.role}
                  </p>
                </>
              ) : (
                <>
                  <div className="w-24 h-24 bg-gray-500 rounded-full flex items-center justify-center text-white text-xl mb-4">
                      <p className="text-3xl">{userInfo?.user?.name?.charAt(0)}</p>
                  </div>
                  <h3 className="pt-1 text-lg font-bold">
                    {userInfo?.user?.name}
                  </h3>

                  <p className="pt-1 text-md text-gray-500">
                    {userInfo?.user?.role}
                  </p>

                </>
              )}
            </div>

            <hr className="text-gray-400 mb-4"></hr>

            <div className="flex flex-col items-center justify-center profile-info mb-4">
              <NavLink to="/user-dashboard" className="mb-3 bg-gray-300 p-2 w-full text-center rounded-sm text-md hover:bg-gray-500 cursor-pointer hover:text-white transition duration-200">Profile</NavLink>
             
              <NavLink to="/attended-events" className="mb-3 bg-gray-300 p-2 w-full text-center rounded-sm text-md hover:bg-gray-500 cursor-pointer hover:text-white transition duration-200">Attended Events</NavLink>

              <NavLink to="/organized-events" className="mb-3 bg-gray-300 p-2 w-full text-center rounded-sm text-md hover:bg-gray-500 cursor-pointer hover:text-white transition duration-200">Organized Events</NavLink>

            </div>
        </div>

    </>
}