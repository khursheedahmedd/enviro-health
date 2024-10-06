import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-600 text-white py-4 shadow-md px-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link to="/">AECS</Link>
                </div>

                {/* Hamburger menu for mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Navbar items for larger screens */}
                <div className="hidden md:flex md:space-x-4 z-10">
                    <Link to="/" className="hover:bg-blue-500 px-3 py-2 rounded-md">
                        Home
                    </Link>
                    <Link to="/dashboard" className="hover:bg-blue-500 px-3 py-2 rounded-md">
                        Dashboard
                    </Link>
                    <Link to="/alerts" className="hover:bg-blue-500 px-3 py-2 rounded-md">
                        Alerts
                    </Link>
                    <Link to="/recent-news" className="hover:bg-blue-500 px-3 py-2 rounded-md">
                        Recent News
                    </Link>
                </div>
            </div>

            {/* Sidebar for mobile */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>
            <div className={`fixed top-0 right-0 w-64 h-full bg-blue-700 text-white shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-white">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col space-y-4 p-4">
                    <Link to="/" className="hover:bg-blue-500 px-3 py-2 rounded-md">Home</Link>
                    <Link to="/dashboard" className="hover:bg-blue-500 px-3 py-2 rounded-md">Dashboard</Link>
                    <Link to="/alerts" className="hover:bg-blue-500 px-3 py-2 rounded-md">Alerts</Link>
                    <Link to="/map" className="hover:bg-blue-500 px-3 py-2 rounded-md">Map</Link>
                    <Link to="/recent-news" className="hover:bg-blue-500 px-3 py-2 rounded-md">Recent News</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
