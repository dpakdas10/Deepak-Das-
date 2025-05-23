import React from 'react'
import aboutImg from '../assets/About2.png';
import {ABOUT_TEXT} from '../constants';
import { motion } from "framer-motion"
const About = () => {
  return (
    <div  className='border-b border-neutral-900 pb-4'>
    <h1 className='my-20 text-center text-4xl'> About
         <span className='text-neutral-500'> Me.
        </span>
        </h1>
    <div  className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <motion.div whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:0.5}} 
             className='flex items-center justify-center'>
                <img src = {aboutImg} alt='About' className='max-w-[200px] lg:max-w-[300px] h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110'></img>
            </motion.div>
            </div>
            <div className='w-full lg:w-1/2 '>
                <motion.div whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                 className='flex justify-center text-justify lg:justify-start '>
                    <p className='my-4 max-w-xl py-6 font-medium '>
                    Hello! I’m a passionate Computer Science and Engineering graduate from SRM University AP in Guntur, Andhra Pradesh. 
                    My academic journey has equipped me with a strong foundation in both theoretical concepts and practical applications of computer science.
                       <br></br>
                        <br></br>
                        I am proficient in programming languages such as C/C++, Java, and JavaScript, with hands-on experience in web development using frameworks like React.js and Next.js. 
                        I’m well-versed in HTML/CSS for frontend development and experienced in backend development using Node.js (Express.js), Java (Spring Boot), and Firebase. 
                        I’m also skilled in SQL for relational database management.
                        <br></br>
                        <br></br>
                        In addition to my technical skills, I regularly practice coding problems on platforms such as LeetCode and HackerRank, having solved over 250 problems on LeetCode. 
                        I’m a keen problem-solver with a strong interest in algorithms and data structures. Beyond academics, I actively participate in extracurricular activities and hold certifications such as the AWS Cloud Practitioner Essentials. 
                        I’m always eager to explore new technologies and contribute to impactful projects.
                    </p>
                </motion.div>
            </div>
        </div>
    </div> 
  )
}

export default About  