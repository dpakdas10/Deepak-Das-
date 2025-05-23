import React from 'react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        <span className='text-white'>Education.</span>
      </motion.h1>

      <div className='max-w-7xl mx-auto px-4'>
        {EDUCATION.map((education, index) => (
          <motion.div
            key={education.institution + education.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='mb-12'
          >
            <div className='flex flex-col lg:flex-row gap-8'>
              {/* Duration */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className='lg:w-1/4 text-right'
              >
                <p className='text-sm font-medium text-sky-200'>{education.duration}</p>
              </motion.div>

              {/* Content */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className='lg:w-3/4 bg-neutral-800/30 p-6 rounded-lg hover:bg-neutral-800/50 transition-colors duration-300'
              >
                <h4 className='text-xl font-semibold text-white mb-2'>{education.degree}</h4>
                <h6 className='text-lg font-medium text-sky-200 mb-3'>{education.institution}</h6>
                <p className='text-gray-300 text-justify leading-relaxed mb-3'>{education.description}</p>
                {education.degree === "Bachelors of Technology in Computer Science and Engineering" && (
                  <p className='text-sky-200 font-medium'>Current CGPA (3rd Year): 8.34/10</p>
                )}
                {education.degree === "Higher Secondary Education (Science Stream)" && (
                  <p className='text-sky-200 font-medium'>Grade: 3.43/4</p>
                )}
                {education.degree === "Primary School (10th)" && (
                  <p className='text-sky-200 font-medium'>Grade: 3.70/4</p>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
