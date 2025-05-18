import React, {useState} from 'react';

const GeneralCommands: React.FC = () => {
    const [isAutoRegulation, setIsAutoRegulation] = useState(true);
    const toggleAutoRegulation = () => setIsAutoRegulation((prev) => !prev);

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


        </div>

    );
};

export default GeneralCommands;
