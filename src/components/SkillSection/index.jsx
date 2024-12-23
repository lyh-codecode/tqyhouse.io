import './style.css'
import reactIcon from '../../assets/react.svg'
import vueIcon from '../../assets/vue.svg'

export default function SkillSection({ isDark }) {
    const backgroundColor = !isDark ? 'rgba(34, 156, 237, 0.1)' : 'rgba(255, 255, 255, 0.1)';

    const skills = [
        { name: 'Vue', icon: vueIcon },
        { name: 'React', icon: reactIcon },
    ]

    return (
        <section className="skill-section" >
            <h2>⚡ 常用技术栈</h2>
            <div className="skill-grid">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="skill-item"
                        style={{ background: backgroundColor }}
                    >
                        <img src={skill.icon} alt={skill.name} title={skill.name} />
                    </div>
                ))}
            </div>
        </section>
    )
} 