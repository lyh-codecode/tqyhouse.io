import './style.css'
import myIcon from '../../assets/my.jpg'
import ImageModal from '../ImageModal'
import { useState } from 'react'

export default function ProfileHeader({ isDark }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        }).catch(err => {
            console.error('复制失败: ', err);
        });
    };

    return (
        <div className='profile-box'>
            <h1 className="gradient-text">Basic Info</h1>
            <main>
                <div className="profile-info">
                    <div className="role">
                        <img
                            className='my-pic'
                            src={myIcon}
                            alt=""
                            onClick={() => setIsModalOpen(true)}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className="info">
                        <p>🧑‍💻 <strong style={{ color: '#2e015b', fontSize: '1.2rem' }}>方向：前端开发</strong></p>
                        <p>📍 <strong style={{ color: isDark ? '#ffffff' : '#464646' }}>学校：广东工业大学 </strong></p>
                        <p>🧑‍💻 <strong style={{ color: isDark ? '#ffffff' : '#464646' }}>年级专业：27届/信息安全</strong></p>
                        <p className="contact-info">
                            <strong style={{ color: isDark ? '#ffffff' : '#464646' }}>📫 邮箱：527835202@qq.com</strong>
                            <button
                                onClick={() => copyToClipboard('527835202@qq.com')}
                                className="copy-button"
                            >
                                复制
                            </button>
                        </p>
                        {copySuccess && <div className="copy-success">复制成功√</div>}
                    </div>

                    <div className="personal-info">
                        <h2 className="personal-info-title" style={{ color: isDark ? '#ffffff' : '#333' }}>幸运的来时路</h2>
                        <p style={{ color: isDark ? '#ffffff' : '#555' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;一切源自于2024年5月某个下午决定了要加入工作室的心，然后初次开始接触前端，
                            参加学校的工作室考核，成功加入工作室开始系统学习前端知识。在工作室中遇见了志同道合的朋友和师兄，得到了工作室的资源和师兄的指导，中参与合作开发，沟通和交流。
                        </p>
                        <p style={{ color: isDark ? '#ffffff' : '#555' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;幸运自己的选择和努力，希望自己能一直保持热爱，成为一名优秀的前端工程师~
                        </p>
                    </div>
                </div>
            </main>
            <ImageModal
                isOpen={isModalOpen}
                imageUrl={myIcon}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
} 