import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectLayout from '@components/ProjectLayout';

const PracticeProjects = () => {
    const navigate = useNavigate();

    const projects = [
        {
            id: 'project1',
            title: '复现网易云',
            description: '这是项目一的描述',
            icon: '📻'
        },
        {
            id: 'project2',
            title: '项目二',
            description: '这是项目二的描述',
            icon: '📱'
        },
        {
            id: 'project3',
            title: '项目三',
            description: '这是项目三的描述',
            icon: '🌐'
        },
        {
            id: 'project4',
            title: '项目四',
            description: '这是项目四的描述',
            icon: '🚀'
        }
    ];

    const handleProjectClick = (id) => {
        navigate(`/practice-projects/${id}`);
    };

    return (
        <div>
            <h1>练习项目</h1>
            <ProjectLayout projects={projects} onProjectClick={handleProjectClick} />
        </div>
    );
};

export default PracticeProjects; 