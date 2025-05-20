import React from 'react';

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "Preise", href: "#" },
    { label: "Kontakt", href: "#" }
];

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white border-b shadow">
            <div className="max-w-screen-lg mx-auto px-4 flex items-center justify-between h-16">
                <div className="flex items-center">
                    <span className="text-xl font-bold text-sky-600">React App</span>
                </div>
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-gray-600 hover:text-sky-600 font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    <button type="button" className="text-sky-600 hover:text-sky-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;