import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();
    const { scrollYProgress } = useScroll();

    const socialVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 100
            }
        })
    };

    const floatingAnimation = {
        initial: { y: 0 },
        animate: {
            y: [-5, 5, -5],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <>
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 z-50">
                <motion.a 
                    href="https://www.linkedin.com/in/deepak-das-tatwa-06922a247/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    custom={0}
                    variants={socialVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        y: useTransform(scrollYProgress, [0, 1], [0, -20]),
                        opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1])
                    }}
                >
                    <motion.div
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <FaLinkedin className='text-white transition ease-in-out delay-100 hover:text-blue-500' size={24}></FaLinkedin>
                    </motion.div>
                </motion.a>
                <motion.a 
                    href="https://leetcode.com/Deepakdas10/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    custom={1}
                    variants={socialVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        y: useTransform(scrollYProgress, [0, 1], [0, -15]),
                        opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1])
                    }}
                >
                    <motion.div
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <SiLeetcode className='text-white transition ease-in-out delay-100 hover:text-yellow-500' size={24}></SiLeetcode>
                    </motion.div>
                </motion.a>
                <motion.a 
                    href="https://www.instagram.com/dpak_das_/?igshid=NzZlODBkYWE4Ng%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    custom={2}
                    variants={socialVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        y: useTransform(scrollYProgress, [0, 1], [0, -10]),
                        opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1])
                    }}
                > 
                    <motion.div
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <FaInstagram className='text-white transition ease-in-out delay-100 hover:text-pink-500' size={24}></FaInstagram>
                    </motion.div>
                </motion.a>
                <motion.a 
                    href="https://github.com/dpakdas10" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    custom={3}
                    variants={socialVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        y: useTransform(scrollYProgress, [0, 1], [0, -5]),
                        opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1])
                    }}
                > 
                    <motion.div
                        variants={floatingAnimation}
                        initial="initial"
                        animate="animate"
                    >
                        <FaGithub className='text-white transition ease-in-out delay-100 hover:text-gray-400' size={24}></FaGithub>
                    </motion.div>
                </motion.a>
                <motion.div
                    custom={4}
                    variants={socialVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        y: useTransform(scrollYProgress, [0, 1], [0, 0]),
                        opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1])
                    }}
                >
                    <Link to="/contact">
                        <motion.div
                            variants={floatingAnimation}
                            initial="initial"
                            animate="animate"
                        >
                            <IoMail className='text-white transition ease-in-out delay-100 hover:text-red-500' size={24}></IoMail>
                        </motion.div>
                    </Link>
                </motion.div>
            </div>

            <footer className='pt-14 pb-14'>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }} 
                    className="container mx-auto text-center"
                >
                    <p className="text-white text-xl mb-4">
                        Developed with <motion.span 
                            className="text-red-500" 
                            animate={{ scale: [1, 1.2, 1] }} 
                            transition={{ repeat: Infinity, duration: 1.5 }}>
                            ReactJs
                        </motion.span> by Deepak Das Tatwa
                    </p>

                    <button 
                        onClick={scrollToTop} 
                        className="text-sm text-blue-500 underline mb-4">
                        Back to Top
                    </button>

                    <p className="text-white text-sm">
                        © {currentYear} Deepak Das Tatwa. All Rights Reserved.
                    </p>
                </motion.div>
            </footer>
        </>
    );
}

export default Footer;
