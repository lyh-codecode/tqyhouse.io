import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css'
import reactIcon from '../../assets/react.svg'
import vueIcon from '../../assets/vue.svg'
import wxIcon from '../../assets/weixin.svg'
import taroIcon from '../../assets/taro.svg'
import nodeIcon from '../../assets/nodejs.svg'

export default function SkillSection({ isDark }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const backgroundColor = !isDark ? 'rgba(34, 156, 237, 0.1)' : 'rgba(255, 255, 255, 0.1)';

    const skills = [
        {
            name: 'Vue',
            icon: vueIcon,
            description: 'Vue.js 前端框架',
            color: '#42b883'
        },
        {
            name: 'React',
            icon: reactIcon,
            description: 'React 前端框架',
            color: '#61dafb'
        },
        {
            name: '微信小程序',
            icon: wxIcon,
            description: '微信小程序开发',
            color: '#2ed15c'
        },
        {
            name: 'Taro',
            icon: taroIcon,
            description: '跨端开发框架',
            color: '#0969da'
        },
        {
            name: 'Node.js',
            icon: nodeIcon,
            description: '服务端开发',
            color: '#339933'
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % skills.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className="skill-section">
            <h2>⚡ My Skills</h2>
            <div className="carousel-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="skill-carousel"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div
                            className="skill-item-large"
                            style={{ background: backgroundColor }}
                        >
                            <div className="skill-content">
                                <img
                                    src={skills[currentIndex].icon}
                                    alt={skills[currentIndex].name}
                                    style={{ color: skills[currentIndex].color }}
                                />
                                <h3>{skills[currentIndex].name}</h3>
                                <p>{skills[currentIndex].description}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="carousel-controls">
                    <button
                        className="carousel-button prev"
                        onClick={() => setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length)}
                    >
                        ←
                    </button>
                    <div className="carousel-dots">
                        {skills.map((_, index) => (
                            <button
                                key={index}
                                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                            />
                        ))}
                    </div>
                    <button
                        className="carousel-button next"
                        onClick={() => setCurrentIndex((prev) => (prev + 1) % skills.length)}
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    )
} 