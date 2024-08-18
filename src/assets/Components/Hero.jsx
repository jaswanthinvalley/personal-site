import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className=' absolute top-14 '>
      <div className=''>
        <img
          className=' h-60 rounded-md hover:scale-105 transition-transform duration-200'
          src='https://pbs.twimg.com/profile_images/1791828029683216384/PuKAhhXJ_400x400.jpg' />
      </div>
      <div className='mt-4'>
        <h1 className='text-white text-xl font-md'> Hi, I'm <span className='text-sky-500'>Jaswanth</span></h1>
        <h2 className='text-white text-3xl font-md'>I make <span className='text-green-400'>full-stack</span> products</h2>
        <h2 className='text-white text-3xl font-md'>that people <span className='text-red-400'>love ❤️</span></h2>
      </div>
      <div className='mt-4'>
        <div className='social-icons flex flex-none'>
          <a href='https://github.com/jaswanthinvally'><FaGithub className='text-sky-500 transform hover:scale-125 transition-transform duration-300 text-2xl ' /></a>
          <a href='https://www.linkedin.com/in/jaswanth-v-754142212/'><FaLinkedin className='text-sky-500 transform hover:scale-125 transition-transform duration-300 text-2xl mx-3' /></a>
          <a href='https://x.com/Jaswant23480367'><FaSquareXTwitter className='text-sky-500 transform hover:scale-125 transition-transform duration-300 text-2xl mx-3' /></a>
          <a href='https://www.instagram.com/jaswanth.py/'><FaInstagram className='text-sky-500 transform hover:scale-125 transition-transform duration-300 text-2xl mx-3' /></a>

        </div>
        <div>
          <button
           className='mt-4 bg-sky-500 p-2 px-3 text-lg  rounded-md text-white hover:scale-110 transition-transform duration-200'>
           Resume
           </button>
          <button
           className='mt-4 bg-sky-500 p-2 px-3 text-lg  rounded-md text-white mx-4 hover:scale-110 transition-transform duration-200'>
           contact
           </button>

        </div>

      </div>
    </div>
  )
}

export default Hero