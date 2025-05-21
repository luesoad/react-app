import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Prices", href: "/prices" },
    { label: "Contact", href: "/contact" }
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white border-b shadow">
            <div className="max-w-screen-lg mx-auto px-4 flex items-center justify-between h-16">
                <div className="flex items-center">
                    <Link to="/" className="text-xl font-bold text-secondary cursor-pointer">
                        React App
                    </Link>
                </div>
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className="text-gray-600 hover:text-secondary font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="md:hidden">
                    <Button
                        onClick={toggleMenu}
                        className="text-sky-600 hover:text-sky-800 focus:outline-none cursor-pointer"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </Button>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col justify-start items-start p-4">
                    <div className="flex justify-between items-center w-full">
                        <h2 className="text-lg font-bold">Menu</h2>
                        <Button
                            onClick={() => setIsOpen(false)}
                            className="text-sky-600 hover:text-sky-800 focus:outline-none cursor-pointer"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Button>
                    </div>
                    <div className="flex flex-col space-y-4 w-full mt-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.href}
                                className="text-gray-600 hover:text-sky-600 font-medium text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;