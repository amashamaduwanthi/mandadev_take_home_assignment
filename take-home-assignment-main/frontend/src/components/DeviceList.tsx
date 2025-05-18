import React from 'react';

interface DeviceListProps {
    selected: string;
    onSelect: (device: string) => void;
}

const devices = [
    { name: 'Settings', icon: '⚙️' },
    { name: 'Lock', icon: '🔒' },
    { name: 'Accessories', icon: '🎧' },
];

const DeviceList: React.FC<DeviceListProps> = ({ selected, onSelect }) => {
    return (
        <div className="w-40 bg-[#1b2c4a] p-4 rounded-xl">

            <ul className="space-y-2">
                {devices.map((device) => (
                    <li
                        key={device.name}
                        onClick={() => onSelect(device.name)}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
                            selected === device.name
                                ? 'bg-cyan-500 text-white'
                                : 'hover:bg-[#2c446e] text-gray-300'
                        }`}
                    >
                        <span className="text-xl">{device.icon}</span>
                        {device.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeviceList;
