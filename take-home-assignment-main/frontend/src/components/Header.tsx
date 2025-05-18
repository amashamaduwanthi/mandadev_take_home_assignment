import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="relative flex items-center justify-between px-6 py-4 bg-[#1b2c4a] text-white rounded-xl">
            {/* GS Badge */}
            <div className="absolute top-2 left-4 text-2xl font-bold">
                <span className="text-cyan-400">G</span>
                <span className="text-white">S</span>
            </div>


            {/*  Search with margin to separate from GS */}
            <div className="ml-10"> {/* Adjust this value as needed */}
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-3 py-1 rounded bg-[#2c446e] text-white placeholder-gray-400 focus:outline-none"
                />
            </div>

            {/*  Profile Image */}
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-500">
                <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
        </header>
    );
};

export default Header;
