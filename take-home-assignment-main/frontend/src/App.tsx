import React, {useState} from 'react';
import Header from './components/Header';
import DeviceList from "./components/DeviceList.tsx";
import DevicePanel from "./components/DevicePanel.tsx";
import GeneralCommands from "./components/GeneralCommands.tsx";

const App: React.FC = () => {
    const [selectedDevice, setSelectedDevice] = useState('House exterior');
    return (
        <div className="min-h-screen bg-[#0f1e37] text-white font-sans p-4 space-y-4">
            <Header />
            <div className="flex gap-6">
                <DeviceList selected={selectedDevice} onSelect={setSelectedDevice} />
                <DevicePanel/>
                <GeneralCommands/>
            </div>

        </div>
    );
};

export default App;
