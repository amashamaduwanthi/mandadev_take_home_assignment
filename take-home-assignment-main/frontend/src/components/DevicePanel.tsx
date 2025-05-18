import React, { useState } from 'react';
import {  FaList } from 'react-icons/fa';

const deviceCategories = [
    { name: 'All', icon: <FaList /> },
    { name: 'House exterior', icon: '🏠' },
    { name: 'Lights', icon: '💡' },
    { name: 'Cams', icon: '📷' },
    { name: 'Router', icon: '📡' },
    { name: 'Home appliances', icon: '🧺' },
    { name: 'Air conditioning', icon: '❄️' },
];

const CombinedDeviceSection: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');


    return (
        <div className="flex gap-8 p-8 bg-[#16223b] min-h-screen rounded-xl">
            {/* Sidebar: Device Categories */}
            <aside className="w-64 bg-[#1b2c4a] p-6 rounded-xl">
                <h2 className="text-lg font-bold mb-6 text-white">Devices</h2>
                <ul className="space-y-3">
                    {deviceCategories.map(category => (
                        <li
                            key={category.name}
                            onClick={() => setSelectedCategory(category.name)}
                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
                                selectedCategory === category.name
                                    ? 'bg-cyan-500 text-white'
                                    : 'hover:bg-[#2c446e] text-gray-300'
                            }`}
                        >
                            <span className="text-xl">{category.icon}</span>
                            {category.name}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Panel: Devices */}
            <main className="flex-1 bg-[#1b2c4a] p-8 rounded-xl min-h-[800px]">
                {/* Main Title */}
                <h1 className="text-5xl font-extrabold text-white mb-4">Domotic Assistant</h1>

                {/* Section Title + Button */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-white">
                        {selectedCategory === 'All' ? 'All Devices' : `${selectedCategory} Devices`}
                    </h2>
                    <button className="bg-cyan-500 text-white px-5 py-2 text-lg rounded-lg hover:bg-cyan-600 transition duration-200">
                        + Add Device
                    </button>
                </div>

                {/* Devices Grid */}


            </main>
        </div>
    );
};

export default CombinedDeviceSection;
