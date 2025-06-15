import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import RecruiterNavbar from '../components/recruiter/RecruiterNavbar';
import './RecruiterLayout.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // React Icons

const RecruiterLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <div className="recruiter-page-layout">
            <RecruiterNavbar isOpen={isSidebarOpen} />

            {/* Toggle Button */}
            <button
                className={`global-sidebar-toggle-btn ${isSidebarOpen ? 'open' : ''}`}
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? <FiChevronLeft size={26} /> : <FiChevronRight size={26} />}
            </button>

            <main className="recruiter-main-content">
                <Outlet />
            </main>
        </div>
    );
};

export default RecruiterLayout;
