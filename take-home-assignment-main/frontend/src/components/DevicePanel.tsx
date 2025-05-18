import React, { useState } from 'react';
import {FaDoorClosed, FaLightbulb, FaList, FaUmbrellaBeach, FaVideo} from 'react-icons/fa';

const deviceCategories = [
    { name: 'All', icon: <FaList /> },
    { name: 'House exterior', icon: '🏠' },
    { name: 'Lights', icon: '💡' },
    { name: 'Cams', icon: '📷' },
    { name: 'Router', icon: '📡' },
    { name: 'Home appliances', icon: '🧺' },
    { name: 'Air conditioning', icon: '❄️' },
];
const devices = [
    { name: 'Entrance camera', status: 'Active', icon: <FaVideo />, category: 'House exterior' },
    { name: 'Stairs camera', status: 'Deactivated at 22:47', icon: <FaVideo />, category: 'House exterior' },
    { name: 'Canopies', status: 'Deactivated at 21:00', icon: <FaUmbrellaBeach />, category: 'House exterior' },
    { name: 'Garage door', status: 'Deactivated at 23:51', icon: <FaDoorClosed />, category: 'House exterior' },
    { name: 'Parasols', status: 'Deactivated at 21:00', icon: <FaUmbrellaBeach />, category: 'House exterior' },
    { name: 'Garden lights', status: 'Active', icon: <FaLightbulb />, category: 'Lights' },
];

const CombinedDeviceSection: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const filteredDevices =
        selectedCategory === 'All'
            ? devices
            : devices.filter(device => device.category === selectedCategory);


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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDevices.length === 0 ? (
                        <p className="text-gray-400 text-lg">No devices found in this category.</p>
                    ) : (
                        filteredDevices.map(device => (
                            <div
                                key={device.name}
                                className={`p-8 rounded-2xl border hover:scale-[1.02] transition-transform duration-200 cursor-pointer shadow-lg flex items-start gap-6 ${
                                    device.status.includes('Active')
                                        ? 'border-cyan-400 text-cyan-400 bg-[#213554]'
                                        : 'border-gray-600 text-gray-400 bg-[#2a3f61]'
                                }`}
                            >
                                <div className="text-4xl">{device.icon}</div>
                                <div>
                                    <h3 className="text-lg font-semibold">{device.name}</h3>
                                    <p className="text-md mt-1">
                                        {device.status.includes('Active') ? (
                                            <span className="text-green-400">{device.status}</span>
                                        ) : (
                                            <span className="text-red-400">{device.status}</span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </main>
        </div>
    );
};

export default CombinedDeviceSection;
