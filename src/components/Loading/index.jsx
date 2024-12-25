import { motion } from 'framer-motion';
import './style.css';

const Loading = () => {
    const text = "欢迎来到小梁的主页~";
    const characters = text.split("");

    return (
        <motion.div
            className="loading-container"
            initial={{ backgroundColor: "rgba(2, 15, 33, 1)" }}
            animate={{ backgroundColor: "rgba(2, 15, 33, 0)", opacity: 0 }}
            transition={{ duration: 3, delay: 3.5, ease: "easeInOut" }}
        >
            <div className="welcome-text">
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                            ease: "easeOut"
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </div>
            <motion.div
                className="loading-line"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
            />
        </motion.div>
    );
};

export default Loading; 