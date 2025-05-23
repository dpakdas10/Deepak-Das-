import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { FaJava, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { TbFileTypeSql } from "react-icons/tb";
import { SiPhp } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { motion } from "framer-motion"

const iconMove= (duration) => ({
    initial: {y:-10},
    animate : {
        y: [10,-10],
        transition : {
            duration: duration,
            ease: "linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies.</motion.h1>
        <motion.div whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={iconMove(1.5)}
                initial="initial"
                animate="animate"
             className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    React
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <VscAzure className='text-7xl text-blue-500 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    MS Azure
                </span>
            </motion.div>
            <motion.div
            variants={iconMove(2)}
                initial="initial"
                animate="animate"
                 className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-7xl text-cyan-400 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    Tailwind CSS
                </span>
            </motion.div>
            <motion.div 
            variants={iconMove(1.5)}
                initial="initial"
                animate="animate"
                className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMongodb className='text-7xl text-green-600 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    MongoDB
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <TbFileTypeSql className='text-7xl text-black-400 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    SQL
                </span>
            </motion.div>
            <motion.div variants={iconMove(2)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJava className='text-7xl text-green-900 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    Java
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPhp className='text-7xl text-blue-600 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    PHP
                </span>
            </motion.div>
            <motion.div variants={iconMove(2)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <FaAws className='text-7xl text-yellow-400 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    AWS
                </span>
            </motion.div>
            <motion.div variants={iconMove(1.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <RiFirebaseFill className='text-7xl text-orange-600 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    Firebase
                </span>
            </motion.div>
            <motion.div variants={iconMove(2.5)}
                initial="initial"
                animate="animate" className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoCPlusPlus className='text-7xl text-neutral-400 group-hover:opacity-50'/>
                <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
                    C++
                </span>
            </motion.div>
        </motion.div>
    </div>
  );
}

export default Technologies;
