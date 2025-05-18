import React from 'react';

const GeneralCommands: React.FC = () => {
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

            </div>
        </div>
    );
};

export default GeneralCommands;
