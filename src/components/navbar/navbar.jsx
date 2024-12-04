import React, { useState } from 'react';
import Logo from '../../assets/ATTSLogo.svg';
import DarkModeButton from '../darkModeToggle/darkModeButton';

const navItems = [
    { label: "About us", href: "/about" },
    { label: "Our Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Blogs", href: "/blogs" },
    { label: "Let's Talk", href: "/contact" },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
                

    return (
        <nav className="bg-gradient-to-r from-gray-800 to-gray-700 dark:bg-gradient-to-r dark:from-[#2c2d30] dark:to-[#1b1c1e] 
                        mx-4 sm:mx-8 md:mx-16 lg:mx-32 mt-4 sm:mt-6 md:mt-9 py-4 rounded-3xl shadow-2xl border-2 border-white/80 dark:border-white backdrop-blur-sm relative z-40">
            <div className="main flex justify-between items-center px-4 sm:px-6 ">

                <div className="image w-24 sm:w-32 md:w-40 transform transition-transform hover:scale-105">
                    <img src={Logo} alt="ATTS" className="w-full" />
                </div>
                
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none group"
                        aria-label="Toggle navigation menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-7 h-7 text-white group-hover:text-yellow-300 transition-colors"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-7 h-7 text-white group-hover:text-yellow-300 transition-colors"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                
                <div className="hidden md:flex items-center">
                    <ul className="flex text-white gap-4 lg:gap-8 xl:gap-10 text-sm lg:text-base">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="relative group"
                            >
                                <a 
                                    href={item.href} 
                                    className="text-white hover:text-blue-300 transition-colors duration-300 
                                    after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-300 
                                    after:left-0 after:-bottom-1 after:transition-all after:duration-300 
                                    group-hover:after:w-full"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:block">
                    <DarkModeButton />
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-gray-800/70 backdrop-blur-lg rounded-b-3xl shadow-lg py-6 z-50">                    <ul className="text-start mx-5 text-black space-y-4">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="text-lg hover: py-2 transition-colors text-white"
                            >
                                <a 
                                    href={item.href} 
                                    className="block w-full hover:text-blue-300"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className="pt-4 border-t border-gray-600">
                            <DarkModeButton />
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;