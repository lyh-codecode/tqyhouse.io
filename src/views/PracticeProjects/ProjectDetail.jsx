import React from 'react';
import { useParams } from 'react-router-dom';
import MarkdownViewer from '../../components/transform-md/MarkdownViewer';
import './style.css';

const ProjectDetail = () => {
    const { projectId } = useParams(); // 获取项目 ID
    const filePath = (`../../assets/myproject/${projectId}.md`); // 根据项目 ID 构造 Markdown 文件路径

    return (
        <div className="project-detail">
            <h1>项目详情</h1>
            <MarkdownViewer filePath={filePath} />
        </div>
    );
};

export default ProjectDetail; 