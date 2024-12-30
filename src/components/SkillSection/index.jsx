import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css'
import reactIcon from '../../assets/react.svg'
import vueIcon from '../../assets/vue.svg'
import wxIcon from '../../assets/weixin.svg'
import taroIcon from '../../assets/taro.svg'
import nodeIcon from '../../assets/nodejs.svg'
import framerIcon from '../../assets/framer.svg'
import gsapIcon from '../../assets/gsap.svg'
import jsIcon from '../../assets/javascript.svg'
import webpackIcon from '../../assets/webpack.svg'
import gitIcon from '../../assets/git.svg'
import typeSIcon from '../../assets/typescript.svg'
import viteIcon from '../../assets/vite.svg'

export default function SkillSection({ isDark }) {
    const backgroundColor = !isDark ? 'rgba(34, 156, 237, 0.1)' : 'rgba(255, 255, 255, 0.1)';
    const skills = [
        { name: 'JavaScript', icon: jsIcon, description: '深入理解 ES6+，掌握异步编程、原型链、闭包等核心概念', color: '#f7df1e' },
        { name: 'React', icon: reactIcon, description: 'React 前端框架，熟悉 Hooks、Context、状态管理、性能优化等', color: '#61dafb' },
        { name: 'Vue', icon: vueIcon, description: 'Vue.js 前端框架，掌握 Vue2/3 核心概念，包括组合式 API、响应式系统、生命周期等', color: '#42b883' },
        { name: 'Framer Motion', icon: framerIcon, description: 'React 动画库，用于创建流畅的页面过渡和交互动画效果', color: '#c026d3' },
        { name: 'GSAP', icon: gsapIcon, description: '专业的网页动画库，可实现复杂的动画序列和交互效果', color: '#88ce02' },
        { name: '微信小程序', icon: wxIcon, description: '微信小程序开发，包括原生开发和框架开发，熟悉小程序生态', color: '#2ed15c' },
        { name: 'Taro', icon: taroIcon, description: '跨端开发框架，可同时开发多端小程序和 H5 应用', color: '#0969da' },
        { name: 'Node.js', icon: nodeIcon, description: '服务端开发，熟悉 Express、Koa 等框架，了解服务端渲染', color: '#339933' },
        { name: 'TypeScript', icon: typeSIcon, description: '熟练使用 TypeScript 进行类型安全的开发，了解高级类型和泛型编程', color: '#3178c6' },
        { name: 'Webpack', icon: webpackIcon, description: '熟悉前端工程化，包括模块打包、代码分割、性能优化等', color: '#8dd6f9' },
        { name: 'Vite', icon: viteIcon, description: '前端工具，提供快速的开发环境和构建工具', color: '#646CFF' },
        { name: 'Git', icon: gitIcon, description: '熟练使用 Git 进行版本控制，了解分支管理、代码review等', color: '#f05032' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);


    const handleNext = (isRight) => {
        setCurrentIndex((prev) => isRight ? (prev + 1) % skills.length : (prev - 1 + skills.length) % skills.length);
        setIsPaused(true);
        setTimeout(() => {
            setIsPaused(false)
        }, 100)
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
        setIsPaused(true);
        setTimeout(() => {
            setIsPaused(false)
        }, 100)
    };

    const handleDragEnd = (event, info) => {
        const swipe = info.offset.x;
        if (swipe < -100) {
            setCurrentIndex((prev) => (prev + 1) % skills.length);
        } else if (swipe > 100) {
            setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
        }
    };

    return (
        <section className="skill-section">
            <div className="carousel-container">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="skill-carousel"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleDragEnd}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
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

                {/* <div className="carousel-controls">
                    <button className="carousel-button prev" onClick={() => handleNext(false)}>
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
                    <button className="carousel-button next" onClick={() => handleNext(true)}>
                        →
                    </button>
                </div> */}
            </div>
        </section>
    )
} 