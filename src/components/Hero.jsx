import React, { useState } from 'react'
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/hero-1.JPG";
import { motion } from "framer-motion"
import resume from "../assets/projects/Resume.pdf";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const container = (delay) => ({
  hidden:{x:-100,opaciry:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay},
  }
})

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap p-8'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start lg:pl-16'>
            <motion.h1 variants={container(0.5)}
            initial="hidden"
            animate="visible"
             className='pb-14 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl hover:underline decoration-blue-400 transition duration-700 ease-in-out'>
              Deepak Das Tatwa
            </motion.h1>
            
            <motion.span variants={container(1)}
            initial="hidden"
            animate="visible" className='bg-gradient-to-r from-blue-200 via-blue-400 to-blue-500 bg-clip-text text-3xl tracking-tight text-transparent'>
              Software Developer
            </motion.span>
            <motion.p
              variants={container(1.5)}
            initial="hidden"
            animate="visible"
             className='my-2 max-w-xl font-normal text-justify tracking-tighter text-gray-300'>
              {HERO_CONTENT}
            </motion.p>
            
            {/* Social Media Links */}
            <motion.div 
              variants={container(1.8)}
              initial="hidden"
              animate="visible"
              className='flex gap-4 my-4'
            >
              <a href="https://github.com/dpakdas10" target="_blank" rel="noopener noreferrer" 
                className='text-gray-400 hover:text-white transition-colors'>
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/deepak-das-tatwa-06922a247/" target="_blank" rel="noopener noreferrer"
                className='text-gray-400 hover:text-white transition-colors'>
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
                className='text-gray-400 hover:text-white transition-colors'>
                <FaTwitter size={24} />
              </a>
            </motion.div>

            <div className='px-2 flex gap-4'> 
              <motion.button 
                onClick={() => setIsModalOpen(true)}
                variants={container(1.5)}
                initial="hidden"
                animate="visible" 
                className='rounded-md border my-2 px-4 py-4 border-gray-400 bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-800 transition-all duration-300 hover:scale-105'>
                View Resume
              </motion.button>
              <motion.a 
                href={resume}
                download="Deepak_Das_Tatwa_Resume.pdf"
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                className='rounded-md border my-2 px-4 py-4 border-gray-400 bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-800 transition-all duration-300 hover:scale-105 inline-block'>
                Download Resume
              </motion.a>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-3'>
          <div className='flex justify-center lg:justify-end'>
            <motion.div 
              className="relative"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src={profilePic} 
                  alt="Deepak Das Tatwa" 
                  className='relative max-w-xs lg:max-w-s h-auto rounded-2xl hover:scale-105 focus:outline-none focus-visible:outline-none transition duration-300'
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal */}
            <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-4xl">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Resume
                  </h3>
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="mt-2 h-[80vh]">
                  <object
                    data={resume}
                    type="application/pdf"
                    className="w-full h-full"
                  >
                    <p>Unable to display PDF file. Please try downloading the resume instead.</p>
                  </object>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
