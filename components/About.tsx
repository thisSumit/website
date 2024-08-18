'use client';
import React, { useRef } from 'react'
import { useScroll } from 'framer-motion';
import { Separator } from './ui/separator';
import { useTheme } from 'next-themes';

const About = () => {
  const { theme } = useTheme();
    const element=useRef(null);
    const logoSrc = theme === 'light' ? 'logo.svg' : 'white-logo.svg';
  const logoClass = theme === 'light' ? 'md:w-[25vh] w-[20vh]' : 'md:w-[25vh] w-[20vh]';

  return (
      <div id='what' className='relative md:flex md:flex-row items-center justify-center w-full py-20 mt-10'>
        <div className='flex flex-col justify-center md:px-10 md:w-3/4 w-full'>
        <img src={logoSrc} className={logoClass} alt="" />
        <Separator/>
        <h1 className='font-bold text-4xl md:mt-8 mt-5 md:text-6xl tracking-tighter items-center flex'>Empower Your Future</h1>
        <p className='text-xl text-muted-foreground mt-1 mb-4 md:my-4'>At InternPro, We Create Careers and Boost Your Chances of Recruitment in Top MNCs.We are dedicated to bridging the gap between academic learning and industry demands. Our mission is to equip students and young professionals with the real-world experience and industry-standard projects they need to thrive in today’s competitive job market.</p>
        </div>
        <div className='md:w-1/4 w-full '>
          <img src="https://i.pinimg.com/originals/ef/d1/d7/efd1d77206043396e9b10ccd6cf277cc.gif" className='rounded-3xl w-full' alt="" />
        </div>
      </div>
  )
}

export default About