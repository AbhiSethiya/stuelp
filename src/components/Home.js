import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBookOpen, FaVideo, FaLaptopCode } from 'react-icons/fa';
import ResourceCard from './ResourceCard';

const Home = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        }),
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const resourceItems = [
        {
            title: "NOTES",
            icon: <FaBookOpen size={40} />,
            description: "Access comprehensive lecture notes and study materials for all subjects.",
            link: "/subjects?type=notes",
            color: "#6c63ff" // Purple
        },
        {
            title: "VIDEOS",
            icon: <FaVideo size={40} />,
            description: "Watch video tutorials and recorded lectures to enhance your learning.",
            link: "/subjects?type=videos",
            color: "#ff6584" // Pink
        },
        {
            title: "PRACTICE",
            icon: <FaLaptopCode size={40} />,
            description: "Practice with question papers and quizzes for better preparation.",
            link: "/subjects?type=practice",
            color: "#48cae4" // Blue
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="container">
                    <motion.div
                        className="hero-content"
                        custom={0}
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            Welcome to <span className="highlight">STUELP</span>
                        </motion.h1>

                        <motion.p
                            className="hero-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            Your ultimate destination for academic resources and learning materials
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                        >
                            <Link to="/subjects" className="btn hero-btn">
                                Get Started
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="resources-section" id="resources">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        custom={1}
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                    >
                        Resources
                    </motion.h2>

                    <motion.div
                        className="resources-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {resourceItems.map((item, index) => (
                            <ResourceCard
                                key={index}
                                item={item}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section" id="about">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        custom={2}
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                    >
                        About STUELP
                    </motion.h2>

                    <motion.div
                        className="about-content"
                        custom={3}
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                    >
                        <p>
                            STUELP (Student Electronic Learning Platform) is designed to help students access all their academic resources in one place.
                            Our mission is to make quality educational content easily accessible to enhance the learning experience.
                            We provide notes, video tutorials, and practice resources for various subjects to help you excel in your studies.
                        </p>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;