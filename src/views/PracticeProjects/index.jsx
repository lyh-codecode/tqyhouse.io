import React, { useState } from 'react';
import './style.css';
import PageLayout from '../../components/knowledge-Layout';
import MarkdownViewer from '../../components/transform-md/MarkdownViewer';


const PracticeProjects = ({ isDark }) => {
    const items = [
        { title: '复现网易云音乐', description: '这是', filePath: '../../assets/myproject/wyy.md' }
    ];

    const [selectedItem, setSelectedItem] = useState(items[0]); // 默认选择第一个项目
    const sidebarContent = (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => setSelectedItem(item)} style={{ cursor: 'pointer' }}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );

    const mainContent = (<MarkdownViewer filePath={selectedItem.filePath} />);

    return (
        <PageLayout
            headerContent="练习项目的总结"
            sidebarContent={sidebarContent}
            mainContent={mainContent}
            isDark={isDark}
        />
    );
};

export default PracticeProjects; 