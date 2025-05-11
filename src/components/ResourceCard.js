import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ResourceCard = ({ item, index }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2
            }
        },
        hover: {
            y: -10,
            boxShadow: `0 15px 30px rgba(0, 0, 0, 0.2), 0 0 0 2px ${item.color}`,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="resource-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            <div className="card-icon" style={{ color: item.color }}>
                {item.icon}
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
            <Link to={item.link} className="card-link">
                Explore <span>&rarr;</span>
            </Link>
        </motion.div>
    );
};

export default ResourceCard;
