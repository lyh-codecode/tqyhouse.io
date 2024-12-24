import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './style.css';

const MarkdownViewer = ({ filePath }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                // 使用 new URL 构造动态导入路径
                const md = await import(filePath);
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