import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './style.css';

const PageLayout = ({ sidebarContent, mainContent }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
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
            <div className='content'>
                {mainContent}
            </div>
        </div>
    );
};

export default PageLayout; 