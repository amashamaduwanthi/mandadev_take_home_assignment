import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.tsx'

// Ensure Tailwind CSS is working and base styles are set in index.css
// Check tailwind.config.js includes content paths for components/pages properly

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <div className="min-h-screen bg-[#0a0f2c] text-white font-sans">
            <App />
        </div>
    </React.StrictMode>
);
