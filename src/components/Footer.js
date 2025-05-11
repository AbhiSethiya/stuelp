import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            <div className="container">
                <p className="footer-text">
                    &copy; {currentYear} STUELP - Student Electronic Learning Platform. All Rights Reserved.
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;