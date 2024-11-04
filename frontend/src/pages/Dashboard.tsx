// src/pages/Dashboard.tsx
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Schedule from '../components/Schedule';

const Dashboard = () => {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">
                <aside className="w-1/3 p-4">
                    <Sidebar />
                </aside>
                <main className="flex-1 p-4">
                    <Schedule />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
