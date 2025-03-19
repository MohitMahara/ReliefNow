import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const handleAuth = () => {
        setisLoggedIn(false);
        //Other codes for the removing data of user from the client side 
    }

    return (

        <div className=" text-gray-800 shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4 sticky">
                <h1 className="text-xl font-bold italic">Relief Now</h1>

                <nav className="hidden md:flex justify-center">
                    <Link to="#" className="hover:underline mr-5">Home</Link>
                    <Link to="#" className="hover:underline mr-5">About</Link>
                    <Link to="#" className="hover:underline mr-5">Map</Link>
                    <Link to="#" className="hover:underline mr-5">Emergency Details</Link>
                </nav>

                <div className="hidden md:block">
                    {isLoggedIn ? (
                        <button onClick={handleAuth} className="hover:underline">Logout</button>
                    ) : (
                        <Link to="/signup" className="hover:underline">Sign Up</Link>
                    )}
                </div>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                </button>
            </div>
            {isOpen && (
                <nav className="md:hidden p-4">
                    <Link to="#" className="block hover:underline mb-5">Home</Link>
                    <Link to="#" className="block hover:underline mb-5">About</Link>
                    <Link to="#" className="block hover:underline mb-5">Map</Link>
                    <Link to="#" className="block hover:underline mb-5">Emergency Details</Link>
                    <div className="hover:underline mb-5">
                        {isLoggedIn ? (
                            <button onClick={handleAuth} className="hover:underline">Logout</button>
                        ) : (
                            <Link to="/signup" className="hover:underline mb-5">Sign Up</Link>
                        )}
                    </div>
                </nav>
            )}
        </div>
    )
}

export default Header