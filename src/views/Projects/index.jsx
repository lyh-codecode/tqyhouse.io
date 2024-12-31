import React from 'react';

import { useNavigate } from 'react-router-dom';
import ProjectLayout from '@components/Project-Layout';
import './style.css'
const PracticeProjects = () => {
    const navigate = useNavigate();

    const projects = [
        {
            id: 'project1',
            title: '复现网易云',
            description: '熟悉如何使用React',
            icon: '📻'
        },
        {
            id: 'project2',
            title: '招新小程序',
            description: '工作室招新，练习taro和微信小程序',
            icon: '📱'
        },
        {
            id: 'project3',
            title: '字节跳动青训营',
            description: '寒假学习技术',
            icon: '🌐'
        },
        {
            id: 'project4',
            title: '个人博客搭建',
            description: '学习framer-motion和使用vite，巩固个人技术',
            icon: '🚀'
        },
        {
            id: 'project5',
            title: '文件上传工具',
            description: '动态上传文章到我的博客',
            icon: '🔧'
        },
        {
            id: 'project6',
            title: '工作室考核项目',
            description: '练习node写接口',
            icon: '⚙'
        }
    ];

    const handleProjectClick = (id) => {
        navigate(`/practice-projects/${id}`);
    };

    return (
        <div>
            <h1 className='pj-title'>我的项目总结</h1>
            <ProjectLayout projects={projects} onProjectClick={handleProjectClick} />
        </div>
    );
};

export default PracticeProjects; 