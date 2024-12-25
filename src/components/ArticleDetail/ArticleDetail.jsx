import React from 'react';
import { NavLink } from 'react-router-dom';
import './ArticleDetail.css';

const ArticleDetail = ({ article, relatedArticles }) => {
    return (
        <div className="article-detail">
            <aside className="sidebar">
                <h2 className="sidebar-title">目录</h2>
                <ul className="sidebar-list">
                    {article.sections.map((section, index) => (
                        <li key={index} className="sidebar-item">
                            <NavLink to={`#${section.id}`} className="sidebar-link">
                                {section.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="content">
                <h1 className="article-title">{article.title}</h1>
                <div className="article-body">
                    {article.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <div className="related-articles">
                    <h3>相关文章</h3>
                    <ul>
                        {relatedArticles.map((related, index) => (
                            <li key={index}>
                                <NavLink to={`/articles/${related.id}`} className="related-link">
                                    {related.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default ArticleDetail; 