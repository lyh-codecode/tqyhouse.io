import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './style.css';
const MarkdownViewer = ({ filePath }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchMarkdown = async () => {
            const response = await fetch(filePath);
            const text = await response.text();
            setContent(text);
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