import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

const PageLayout = ({ sidebarContent, mainContent, footerContent }) => {
    return (
        <div className="new-layout">
            <div className="layout-content">
                <motion.aside
                    className="sidebar"
                    initial={{ x: 0 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {sidebarContent}
                </motion.aside>
                <main className="main-content">
                    {mainContent}
                </main>
            </div>
            <footer className="footer">{footerContent}</footer>
        </div>
    );
};

export default PageLayout; 