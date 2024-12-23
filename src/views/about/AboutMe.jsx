import React from 'react';
import './style.css'; // 如果需要样式文件
import ProfileHeader from '../../components/ProfileHeader/index'
import SkillSection from '../../components/SkillSection/index'

const AboutMe = ({ isDark }) => {
    return (
        <div className='about'>
            <div className="about-me">
                <div className="about-me-left">
                    <ProfileHeader isDark={isDark} />
                </div>
            </div>
            <SkillSection />
        </div>
    );
};

export default AboutMe; 