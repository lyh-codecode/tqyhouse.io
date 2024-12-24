import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './style.css';
import ProfileHeader from '../../components/ProfileHeader/index'

const AboutMe = ({ isDark }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 模拟加载过程
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const pageVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className='about'
            initial="initial"
            animate="animate"
            variants={pageVariants}
        >
            <motion.div
                className="about-me"
                initial={{ background: "rgba(232, 246, 247, 0)" }}
                animate={{ background: "rgba(232, 246, 247, 0.4)" }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <motion.div
                    className="about-me-left"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <ProfileHeader isDark={isDark} />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default AboutMe; 