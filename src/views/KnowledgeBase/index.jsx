import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import './style.css';
import PageLayout from '@components/knowledge-Layout';
import hh1 from '@assets/img/hh1.jpg'
import hh2 from '@assets/img/hh2.jpg'
import hh3 from '@assets/img/hh3.jpg'
import hh4 from '@assets/img/hh4.jpg'
import hh5 from '@assets/img/hh5.jpg'
import hh6 from '@assets/img/hh6.jpg'
import hh7 from '@assets/img/hh7.jpg'
import hh8 from '@assets/img/hh8.jpg'
import hh9 from '@assets/img/hh9.jpg'
const KnowledgeBase = ({ isDark }) => {

    const items = [
        {
            id: 'article1',
            title: 'JavaScript',
            icon: 'JS',
            description: 'JavaScript 相关知识整理',
            children: [
                {
                    id: 'article-1',
                    title: 'JS基础',
                    description: 'JavaScript 基础知识',
                    link: '/knowledge-base/javascript/js-basics',
                    cover: hh1
                },
                {
                    id: 'article-2',
                    title: 'JS高级',
                    description: 'JavaScript 高级特性',
                    link: '/knowledge-base/javascript/js-advanced',
                    cover: hh6
                },
                {
                    id: 'article-3',
                    title: 'JS异步编程',
                    description: '异步编程与Promise',
                    link: '/knowledge-base/javascript/js-async',
                    cover: hh8
                },
                {
                    id: 'article-4',
                    title: 'JS性能优化',
                    description: 'JavaScript 性能优化技巧',
                    link: '/knowledge-base/javascript/js-performance',
                    cover: hh5
                },]
        },
        {
            id: 'article1',
            title: 'React',
            icon: '⚛️',
            description: 'React 相关知识整理',
            children: [
                {
                    id: 'article1-1',
                    title: 'React Hooks',
                    description: 'React Hooks 的使用和原理',
                    link: '/knowledge-base/React',
                    cover: hh1
                },
                {
                    id: 'article1-2',
                    title: 'React Router',
                    description: '路由管理和配置',
                    link: '/knowledge-base/react-router',
                    cover: hh6
                },
                {
                    id: 'article1-3',
                    title: 'React State',
                    description: '状态管理方案',
                    link: '/knowledge-base/react-state',
                    cover: hh8
                },
                {
                    id: 'article1-4',
                    title: 'React 性能优化',
                    description: '性能优化技巧',
                    link: '/knowledge-base/react-performance',
                    cover: hh5
                },
            ]
        },
        {
            id: 'article2',
            title: 'Node.js',
            icon: '🟢',
            description: 'Node.js 学习笔记',
            children: [
                {
                    id: 'article2-1',
                    title: 'Express',
                    description: 'Express 框架使用',
                    link: '/knowledge-base/express',
                    cover: hh1
                }
            ]
        },
        {
            id: 'article3',
            title: 'Vue',
            icon: '🟢',
            description: 'Vue.js 学习笔记',
            children: [
                {
                    id: 'article3-1',
                    title: 'Vue Basics',
                    description: 'Vue.js 基础知识',
                    link: '/knowledge-base/vue-basics',
                    cover: hh2
                }
            ]
        },
        {
            id: 'article4',
            title: '数据结构',
            icon: '📚',
            description: '数据结构学习笔记',
            children: [
                {
                    id: 'article4-1',
                    title: '树和图',
                    description: '树和图的基本概念',
                    link: '/knowledge-base/tree-graph',
                    cover: hh3
                }
            ]
        },
        {
            id: 'article5',
            title: '计网',
            icon: '🌐',
            description: '计算机网络学习笔记',
            children: [
                {
                    id: 'article5-1',
                    title: '网络协议',
                    description: '常见网络协议介绍',
                    link: '/knowledge-base/network-protocols',
                    cover: hh8
                }
            ]
        },
        {
            id: 'article6',
            title: '操作系统',
            icon: '💻',
            description: '操作系统学习笔记',
            children: [
                {
                    id: 'article6-1',
                    title: '进程管理',
                    description: '操作系统中的进程管理',
                    link: '/knowledge-base/process-management',
                    cover: hh9
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
    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate(path)
    }
    const mainContent = (
        <div className="main-content">
            <motion.h1
                className="content-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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
                        onClick={() => handleClick(child.link)}
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
        <PageLayout sidebarContent={sidebarContent} mainContent={mainContent} />
    );
};

export default KnowledgeBase; 