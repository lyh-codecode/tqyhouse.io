import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // 用于支持 GitHub 风格的 Markdown
import './style.css';
import project1 from "@assets/project1.md"


const ProjectDetail = () => {
    const { projectId } = useParams(); // 获取项目 ID
    console.log(projectId)
    // const filePath = `/assets/${projectId}.md`; // 根据项目 ID 构造 Markdown 文件路径
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const response = await fetch(project1);
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Error loading markdown:', error);
                setContent('Failed to load content.');
            }
        };

        fetchMarkdown();
    }, []);

    return (
        <div className="project-detail">
            <div className="navigate">
                {content.split('\n').map((line, index) => {
                })}
            </div>
            <div className="markdown-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default ProjectDetail; 