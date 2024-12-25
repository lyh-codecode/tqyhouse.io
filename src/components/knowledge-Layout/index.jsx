import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './style.css';

const PageLayout = ({ headerContent, sidebarContent, mainContent, footerContent }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="new-layout">
            <div className="layout-content">
                <motion.aside
                    className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}
                    initial={{ x: 0 }}
                    animate={{ x: isSidebarOpen ? 0 : '-100%' }}
                    transition={{ duration: 0.2 }}
                >
                    {sidebarContent}
                </motion.aside>
                <motion.div
                    className="sidebar-toggle"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isSidebarOpen ? '←' : '→'}
                </motion.div>
                <main className={`${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
                </main>
                {mainContent}
            </div>
            <footer className="footer">{footerContent}</footer>
        </div>
    );
};

export default PageLayout; 