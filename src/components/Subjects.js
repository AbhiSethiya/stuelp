import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import {
    FaChevronLeft, FaClipboardList, FaFileAlt, FaChartBar,
    FaDesktop, FaJava, FaDatabase, FaCog, FaMicrochip
} from 'react-icons/fa';
import SubjectItem from './SubjectItem';
import subjectsData from '../data/subjectsData';

const Subjects = () => {
    const [searchParams] = useSearchParams();
    const resourceType = searchParams.get('type') || 'notes';
    const [year] = useState('2');
    const [branch] = useState('cs');
    const [subjects, setSubjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Get icon component by name string
    const getIconComponent = (iconName) => {
        const iconMap = {
            'FaClipboardList': <FaClipboardList size={24} />,
            'FaFileAlt': <FaFileAlt size={24} />,
            'FaChartBar': <FaChartBar size={24} />,
            'FaDesktop': <FaDesktop size={24} />,
            'FaJava': <FaJava size={24} />,
            'FaDatabase': <FaDatabase size={24} />,
            'FaCog': <FaCog size={24} />,
            'FaMicrochip': <FaMicrochip size={24} />
        };

        return iconMap[iconName] || <FaClipboardList size={24} />;
    };

    useEffect(() => {
        setIsLoading(true);

        // Simulate loading data
        setTimeout(() => {
            if (subjectsData[year] && subjectsData[year][branch]) {
                setSubjects(subjectsData[year][branch]);
            } else {
                setSubjects([]);
            }
            setIsLoading(false);
        }, 800);
    }, [year, branch, resourceType]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    const childVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    // Function to get resource type heading
    const getResourceTypeHeading = () => {
        switch(resourceType) {
            case 'videos':
                return 'Video Resources';
            case 'practice':
                return 'Practice Materials';
            default:
                return 'Study Notes';
        }
    };

    return (
        <motion.div
            className="subjects-page"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
        >
            <div className="container">
                <motion.div
                    className="subjects-header"
                    variants={headerVariants}
                >
                    <Link to="/" className="back-button">
                        <FaChevronLeft /> Back to Home
                    </Link>
                    <h1 className="subjects-title">{getResourceTypeHeading()}</h1>
                    <p className="subjects-subtitle">Browse all available subjects for {branch.toUpperCase()} branch</p>
                </motion.div>

                {isLoading ? (
                    <div className="loading-container">
                        <div className="loader"></div>
                        <p>Loading subjects...</p>
                    </div>
                ) : (
                    <motion.div
                        className="subjects-grid"
                        variants={containerVariants}
                    >
                        {subjects.length > 0 ? (
                            subjects.map((subject, index) => (
                                <SubjectItem
                                    key={subject.id}
                                    subject={subject}
                                    index={index}
                                    icon={getIconComponent(subject.icon)}
                                />
                            ))
                        ) : (
                            <motion.div
                                className="no-subjects"
                                variants={childVariants}
                            >
                                <p>No subjects found for the selected criteria.</p>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default Subjects;