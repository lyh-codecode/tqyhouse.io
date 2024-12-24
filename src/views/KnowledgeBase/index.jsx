import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './style.css';
import PageLayout from '@components/knowledge-Layout';

const KnowledgeBase = ({ isDark }) => {
    const items = [
        {
            title: 'React',
            icon: '⚛️',
            description: 'React 相关知识整理',
            children: [
                {
                    title: 'React Hooks',
                    description: 'React Hooks 的使用和原理',
                    link: 'https://reactjs.org',
                    cover: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
                },
                {
                    title: 'React Router',
                    description: '路由管理和配置',
                    link: 'https://reactjs.org',
                    cover: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
                },
                {
                    title: 'React State',
                    description: '状态管理方案',
                    link: 'https://reactjs.org',
                    cover: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
                },
                {
                    title: 'React 性能优化',
                    description: '性能优化技巧',
                    link: 'https://reactjs.org',
                    cover: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
                },
            ]
        },
        {
            title: 'Node.js',
            icon: '🟢',
            description: 'Node.js 学习笔记',
            children: [
                {
                    title: 'Express',
                    description: 'Express 框架使用',
                    link: 'https://nodejs.org',
                    cover: 'https://nodejs.org/static/images/logo.svg'
                }
            ]
        },
        {
            title: 'Vue',
            icon: '🟢',
            description: 'Vue.js 学习笔记',
            children: [
                {
                    title: 'Vue Basics',
                    description: 'Vue.js 基础知识',
                    link: 'https://vuejs.org',
                    cover: 'https://vuejs.org/images/logo.png'
                }
            ]
        },
        {
            title: '数据结构',
            icon: '📚',
            description: '数据结构学习笔记',
            children: [
                {
                    title: '树和图',
                    description: '树和图的基本概念',
                    link: 'https://computer.org',
                    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tree_structure.svg/1200px-Tree_structure.svg.png'
                }
            ]
        },
        {
            title: '计网',
            icon: '🌐',
            description: '计算机网络学习笔记',
            children: [
                {
                    title: '网络协议',
                    description: '常见网络协议介绍',
                    link: 'https://computer.org',
                    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Internet_map_1024.jpg/1200px-Internet_map_1024.jpg'
                }
            ]
        },
        {
            title: '操作系统',
            icon: '💻',
            description: '操作系统学习笔记',
            children: [
                {
                    title: '进程管理',
                    description: '操作系统中的进程管理',
                    link: 'https://computer.org',
                    cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Operating_system_placement.svg/1200px-Operating_system_placement.svg.png'
                }
            ]
        },
    ];

    const [selectedItem, setSelectedItem] = useState(items[0]);

    const sidebarContent = (
        <div className="sidebar-container">
            <h2 className="sidebar-title">知识导航</h2>
            <motion.ul className="sidebar-list">
                {items.map((item, index) => (
                    <motion.li
                        key={index}
                        onClick={() => setSelectedItem(item)}
                        className={`list-item ${selectedItem.title === item.title ? 'active' : ''}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="item-icon">{item.icon}</span>
                        <span className="item-title">{item.title}</span>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );

    const mainContent = (
        <div className="main-content">
            <motion.h1
                className="content-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                {selectedItem.title}
                <span className="content-description">{selectedItem.description}</span>
            </motion.h1>
            <div className="item-grid">
                {selectedItem.children.map((child, index) => (
                    <motion.div
                        key={index}
                        className="item-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => window.open(child.link, '_blank')}
                    >
                        <div className="card-cover">
                            <img src={child.cover} alt={child.title} />
                        </div>
                        <div className="card-content">
                            <h3>{child.title}</h3>
                            <p>{child.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );

    return (
        <PageLayout
            headerContent={
                <motion.div
                    className="header-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <h1>知识库</h1>
                    <p>前端学习笔记整理</p>
                </motion.div>
            }
            sidebarContent={sidebarContent}
            mainContent={mainContent}
            footerContent={
                <div className="footer-content">
                    <p>持续更新中...</p>
                </div>
            }
        />
    );
};

export default KnowledgeBase; 