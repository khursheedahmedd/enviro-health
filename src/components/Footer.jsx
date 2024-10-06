import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-auto">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold">AECS Dashboard</h2>
                        <p className="text-sm">© 2024 AECS. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#about" className="hover:text-gray-400">About Us</a>
                        <a href="#services" className="hover:text-gray-400">Services</a>
                        <a href="#contact" className="hover:text-gray-400">Contact</a>
                        <a href="#news" className="hover:text-gray-400">Recent News</a>
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <a href="#" className="mx-2 hover:text-gray-400">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="mx-2 hover:text-gray-400">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="mx-2 hover:text-gray-400">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="mx-2 hover:text-gray-400">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
