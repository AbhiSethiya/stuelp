import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -5 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3
            }
        })
    };

    return (
        <motion.header
            className={`header ${scrolled ? 'scrolled' : ''}`}
            initial="hidden"
            animate="visible"
            variants={headerVariants}
        >
            <div className="container header-container">
                <Link to="/" className="logo">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        STUELP
                    </motion.span>
                </Link>

                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>

                <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    {['Home', 'Resources', 'About'].map((item, index) => (
                        <motion.li key={item} custom={index} variants={linkVariants} initial="hidden" animate="visible">
                            <Link
                                to={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                                className="nav-link"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.header>
    );
};

export default Header;