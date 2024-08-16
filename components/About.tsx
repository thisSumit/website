'use client';
import React, { useRef } from 'react'
import { useScroll } from 'framer-motion';
import { Separator } from './ui/separator';

const About = () => {

    const element=useRef(null);

  return (
      <div id='what' className='relative md:flex md:flex-row items-center justify-center w-full p-20 px-5 mt-10'>
        <div className='flex flex-col justify-center md:px-10 md:w-3/4 w-full'>
        <img src="/logo.svg" className='md:w-[25vh] w-[20vh]' alt="" />
        <Separator/>
        <h1 className='font-bold text-4xl md:mt-8 mt-5 md:text-6xl tracking-tighter items-center flex'>At InternPro, We specialize at createing Career and increase high chances of Recruting in MNCs.</h1>
        <p className='text-xl text-muted-foreground mt-1 mb-4 md:my-4'>We bridge the gap between academic knowledge and industry experience. Our mission is to empower students and young professionals by offering real-world internships and industry-standard project opportunities that prepare them for the challenges of the professional world.</p>
        </div>
        <div className='md:w-1/4 w-full '>
          <img src="https://i.pinimg.com/originals/ef/d1/d7/efd1d77206043396e9b10ccd6cf277cc.gif" className='rounded-3xl w-full' alt="" />
        </div>
      </div>
  )
}

export default About