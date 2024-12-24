import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './style.css';

const MarkdownViewer = ({ filePath }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                // 使用动态导入来加载 Markdown 文件
                const md = await import(`../../assets/${filePath}`);
                // 如果是 Vite，使用 .default 获取文件内容
                const response = await fetch(md.default);
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Error loading markdown:', error);
                setContent('Failed to load content.');
            }
        };

        fetchMarkdown();
    }, [filePath]);

    return (
        <div className="markdown-viewer">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownViewer; 