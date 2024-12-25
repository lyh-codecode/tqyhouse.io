import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.css';

const Planning = () => {
    const items = [
        {
            title: '近期目标',
            icon: '🎯',
            description: '完成前端核心技术的学习，包括：',
            subItems: [
                'React设计原理',
                'TypeScript学习',
                'Framer-motion动画库的使用',
                '前端工程化'
            ]
        },
        {
            title: '进行中',
            icon: '🚀',
            description: '当前正在进行的事情：',
            subItems: [
                '个人博客系统开发和完善',
                '利用原生JS手写一些小功能',
                'React原理学习'
            ]
        },
        {
            title: '技能提升',
            icon: '📚',
            description: '需要持续提升的技能：',
            subItems: [
                '算法与数据结构',
                '设计模式实践',
                '网络协议深入',
                '前端性能优化'
            ]
        },
        {
            title: '长期规划',
            icon: '🌟',
            description: '未来发展方向：',
            subItems: [
                '全栈开发能力',
                '前端架构设计',
                '团队管理能力',
                '技术分享输出'
            ]
        }
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="planning-layout">
            <main className="planning-main">
                <motion.h1
                    className="page-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    学习规划
                </motion.h1>
                <div className="accordion">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`accordion-item ${expandedIndex === index ? 'expanded' : ''}`}
                            initial={false}
                            onClick={() => toggleExpand(index)}
                        >
                            <motion.div className="accordion-header">
                                <span className="item-icon">{item.icon}</span>
                                <h3>{item.title}</h3>
                                <motion.span
                                    className="expand-icon"
                                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                >
                                    ▼
                                </motion.span>
                            </motion.div>
                            <AnimatePresence initial={false}>
                                {expandedIndex === index && (
                                    <motion.div
                                        className="accordion-content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{item.description}</p>
                                        <ul className="sub-items">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <motion.li
                                                    key={subIndex}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: subIndex * 0.1 }}
                                                >
                                                    {subItem}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Planning; 