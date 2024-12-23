import React, { useState } from 'react';
import './style.css';

const PageLayout = ({ isDark, headerContent, sidebarContent, mainContent, footerContent }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="new-layout">
            <div className="layout-content">
                <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`} style={{
                    backgroundColor: !isDark ? '#fff' : '#101e36',
                    color: !isDark ? '#000' : '#fff'
                }}>
                    {sidebarContent}
                </aside>
                <div className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    {isSidebarOpen ? '←' : '→'}
                </div>
                <main className="main-content">{mainContent}</main>
            </div>
            <footer className="footer">{footerContent}</footer>
        </div>
    );
};

export default PageLayout; 