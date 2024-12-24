import { motion } from 'framer-motion';
import SkillSection from '@components/SkillSection';
import SiteSection from '@components/SiteSection';
import './style.css';

const Index = ({ isDark }) => {
    const containerVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        },
        exit: {
            opacity: 0
        }
    };

    const sectionVariants = {
        initial: index => ({
            y: index === 0 ? -100 : 100,
            opacity: 0
        }),
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            className="index-container"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div
                custom={0}
                variants={sectionVariants}
            >
                <SiteSection isDark={isDark} />
            </motion.div>

            <motion.div
                custom={1}
                variants={sectionVariants}
            >
                <SkillSection isDark={isDark} />
            </motion.div>
        </motion.div>
    );
};

export default Index; 