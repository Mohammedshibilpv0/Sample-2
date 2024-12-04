import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const DarkModeButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        
        if (newMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className="flex transition-colors">
            <button 
                onClick={toggleDarkMode}
                className="flex items-center space-x-2 px-4 py-2 
                bg-gray-200 dark:bg-gray-700 
                text-gray-800 dark:text-gray-200
                rounded-full focus:outline-none 
                shadow-md transition-all duration-300 
                hover:bg-gray-300 dark:hover:bg-gray-600"
            >
                <SunIcon className="h-5 w-5 text-yellow-500 dark:hidden" />
                <MoonIcon className="h-5 w-5 text-blue-500 hidden dark:block" />
            </button>
        </div>
    );
}

export default DarkModeButton;