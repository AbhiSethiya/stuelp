import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SubjectItem = ({ subject, index, icon }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Random colors for subjects (you could also define them in the data)
    const colors = ['#6c63ff', '#ff6584', '#48cae4', '#06d6a0', '#ffd166', '#ef476f'];
    const color = colors[index % colors.length];

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: index * 0.1
            }
        }
    };

    const iconContainerVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.2,
            rotate: 5,
            transition: { duration: 0.3, type: "spring", stiffness: 300 }
        }
    };

    const handleClick = () => {
        // Open link in new tab
        window.open(subject.link, '_blank');
    };

    return (
        <motion.div
            className="subject-item"
            onClick={handleClick}
            variants={itemVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
                y: -10,
                boxShadow: `0 15px 30px rgba(0, 0, 0, 0.3), 0 0 0 2px ${color}`
            }}
            style={{
                backgroundColor: isHovered ? `${color}20` : '#1a1a1a',
                borderLeft: `4px solid ${color}`
            }}
        >
            <motion.div
                className="subject-icon-container"
                variants={iconContainerVariants}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                style={{ color }}
            >
                {icon}
            </motion.div>

            <div className="subject-content">
                <h3 className="subject-name">{subject.name}</h3>
                <p className="subject-description">{subject.description}</p>
            </div>

            <motion.div
                className="subject-arrow"
                initial={{ x: 0, opacity: 0.5 }}
                animate={{
                    x: isHovered ? 10 : 0,
                    opacity: isHovered ? 1 : 0.5
                }}
                transition={{ duration: 0.2 }}
            >
                →
            </motion.div>
        </motion.div>
    );
};

export default SubjectItem;

