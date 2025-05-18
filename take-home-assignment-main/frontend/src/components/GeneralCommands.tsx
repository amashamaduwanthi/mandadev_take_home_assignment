import React, {useState} from 'react';

const GeneralCommands: React.FC = () => {
    const [isAutoRegulation, setIsAutoRegulation] = useState(true);
    const [isSolarPanels, setIsSolarPanels] = useState(true);

    const toggleAutoRegulation = () => setIsAutoRegulation((prev) => !prev);
    const toggleSolarPanels = () => setIsSolarPanels((prev) => !prev);
    return (
        <div className="w-80 bg-[#1b2c4a] p-6 rounded-xl flex flex-col gap-8 text-white font-sans">
            {/* Thermostat */}
            <div>
                <h2 className="text-sm uppercase text-gray-300 mb-4">General commands</h2>
                <h3 className="text-base font-medium mb-3">Thermostat</h3>
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-2xl font-bold">25°C</p>
                        <p className="text-sm text-gray-400">19°C</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="bg-gray-600 text-white w-8 h-8 rounded">+</button>
                        <button className="bg-gray-600 text-white w-8 h-8 rounded">-</button>
                    </div>
                </div>
                {/* Toggle: Automatic Regulation */}
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-300">Automatic regulation</span>
                    <button
                        onClick={toggleAutoRegulation}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
                            isAutoRegulation ? 'bg-cyan-500' : 'bg-gray-500'
                        }`}
                    >
                        <div
                            className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                                isAutoRegulation ? 'translate-x-6' : 'translate-x-0'
                            }`}
                        />
                    </button>
                </div>
            </div>

            <div>
                <h3 className="text-base font-medium mb-2">Energy</h3>
                <p className="text-sm text-cyan-400 mb-3">CURRENT CONSUMPTION - 12.4 kWh</p>

                {/* Toggle: Solar Panels */}
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Solar panels</span>
                    <button
                        onClick={toggleSolarPanels}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
                            isSolarPanels ? 'bg-cyan-500' : 'bg-gray-500'
                        }`}
                    >
                        <div
                            className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                                isSolarPanels ? 'translate-x-6' : 'translate-x-0'
                            }`}
                        />
                    </button>
                </div>
                {/* Toggle: power reserve */}
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">power reserve</span>
                    <button
                        onClick={toggleSolarPanels}
                        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
                            isSolarPanels ? 'bg-cyan-500' : 'bg-gray-500'
                        }`}
                    >
                        <div
                            className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                                isSolarPanels ? 'translate-x-6' : 'translate-x-0'
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* Stays */}
            <div>
                <h3 className="text-base font-medium mb-3">Stays</h3>
                {['Kitchen', 'Living room', 'Bedrooms', 'Bath', 'Garden'].map((room) => (
                    <div key={room} className="text-sm text-gray-400 py-1 border-b border-[#233656] last:border-none">
                        {room}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GeneralCommands;
