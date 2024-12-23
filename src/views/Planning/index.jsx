import React, { useState } from 'react';
import './style.css';

const Planning = () => {
    const items = [
        { title: '目标1', description: '这是目标1的详细描述。' },
        { title: '目标2', description: '这是目标2的详细描述。' },
        { title: '目标3', description: '这是目标3的详细描述。' },
        { title: '目标4', description: '这是目标4的详细描述。' },
    ];

    const [selectedItem, setSelectedItem] = useState(items[0]); // 默认选择第一个项目

    return (
        <div className="planning-layout">
            <main className="main-content">
                <img src="path/to/your/progress-image.png" alt="学习路线进度图" className="progress-image" />
                <ul>
                    {items.map((item, index) => (
                        <li key={index} onClick={() => setSelectedItem(item)} style={{ cursor: 'pointer' }}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default Planning; 