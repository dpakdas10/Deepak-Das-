import React, { useState } from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Get unique categories from projects
  const categories = [...new Set(PROJECTS.flatMap(project => project.technologies))];
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === '' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.technologies.includes(selectedCategory));

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:1,y:-100}}
        transition={{duration:0.5}}
        className='my-10 text-center text-4xl'
      >
        <span className='text-white'>Projects.</span> 
      </motion.h1>

      {/* Category Filters */}
      <div className='flex flex-wrap justify-center gap-4 mb-12 px-4'>
        {categories.map((category, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-neutral-800 text-white'
                : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      <div className='max-w-7xl mx-auto px-4'>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='mb-16 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300'
          >
            <div className='flex flex-col lg:flex-row'>
              <div className='w-full lg:w-1/3 p-4'>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className='relative group'
                >
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-sky-200 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200'></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='relative w-full h-48 object-cover rounded-lg'
                  />
                </motion.div>
              </div>
              
              <div className='w-full lg:w-2/3 p-6'>
                <h3 className='text-2xl font-bold mb-2 text-white'>{project.title}</h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
                
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-3 py-1 rounded-full text-sm font-medium bg-blue-700/30 text-sky-100'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex gap-4'>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-400 bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-800 transition-colors duration-300'
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-400 bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-800 transition-colors duration-300'
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects