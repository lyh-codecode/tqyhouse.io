import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // 用于支持 GitHub 风格的 Markdown
import './ArticleDetail.css';

const ArticleDetail = () => {
    const { id } = useParams(); // 获取文章 ID
    const filePath = `/src/assets/project1.md`; // 根据文章 ID 构造 Markdown 文件路径
    const [content, setContent] = useState('');
    const [sections, setSections] = useState([]); // 用于存储章节信息

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const response = await fetch(filePath);
                const text = await response.text();
                setContent(text);

                // 提取章节信息（假设章节以特定格式存在）
                const sectionRegex = /^(#{1,3})\s+(.*)$/gm; // 匹配一级、二级和三级 Markdown 标题
                const matches = [...text.matchAll(sectionRegex)];
                const sectionList = matches.map(match => ({
                    level: match[1].length, // 章节级别
                    title: match[2], // 章节标题
                    id: match[2]
                }));
                setSections(sectionList);
                console.log(sectionList)
            } catch (error) {
                console.error('Error loading markdown:', error);
                setContent('Failed to load content.');
            }
        };

        fetchMarkdown();
    }, [filePath]);

    return (
        <>
            <div className="article-detail">
                <aside className="sidebar">
                    <ul className="sidebar-list">
                        {sections.map((section) => {
                            const ListItem = () => (
                                <li key={section.id} className="sidebar-item" style={{ paddingLeft: `${15 * section.level + 15}px`, fontSize: `${1.3 - 0.07 * section.level}rem` }}>
                                    <a href={`#${section.id}`} className="sidebar-link">{section.title}</a>
                                </li>
                            );
                            return (
                                <ul key={section.id}>
                                    <ListItem />
                                </ul>
                            );
                        })}
                    </ul>
                </aside>
                <main className="content">
                    <div className="markdown-content">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {content}
                        </ReactMarkdown>
                    </div>
                </main>
            </div>
            <footer className="footer">
                <div className='footer-content'>
                    <button onClick={() => {/* 逻辑去上一篇 */ }}>上一篇：React 源码解读</button>
                    <button onClick={() => {/* 逻辑去下一篇 */ }}>下一篇：Vue 原理</button>
                </div>
            </footer>
        </>


    );
};

export default ArticleDetail; 