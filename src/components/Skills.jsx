import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  "Frontend": [
    { name: "React", level: 60 },
    { name: "JavaScript", level: 65 },
    { name: "HTML/CSS", level: 70 },
    { name: "Tailwind CSS", level: 80 },
  ],
  "Backend": [
    { name: "Node.js", level: 60 },
    { name: "Java", level: 75 },
    { name: "C++", level: 80 },
    { name: "MongoDB", level: 70 },
  ],
  "Tools & Others": [
    { name: "Git", level: 80 },
    { name: "AWS", level: 60 },
  ]
};

const Skills = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        <span className='text-white'>Skills &</span> <span className='text-neutral-500'>Expertise.</span>
      </motion.h1>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">{category}</h2>
              <div className="space-y-4">
                {categorySkills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-sky-100">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-neutral-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-sky-200 to-blue-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Additional Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Problem Solving",
              "Team Collaboration",
              "Code Review",
              "Performance Optimization",
              "Debugging",
              "API Design",
              "Database Design"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-4 py-2 bg-blue-700/30 text-sky-100 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 