import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div>
        <div>
        <h1 className='text-white text-xl font-md'> Hi, I'm <span className='text-sky-500'>Jaswanth</span></h1>
        <h2 className='text-white text-3xl font-md'>I make <span className='text-green-400'>full-stack</span> products</h2>
        <h2 className='text-white text-3xl font-md'>that people <span className='text-red-400'>love ❤️</span></h2>
        </div>
        <div className='mt-4'>
            <div className='social-icons flex flex-none'>
            <FaGithub className='text-sky-500 transform hover:scale-125 transition-transform duration-300 text-2xl '/>
            <FaLinkedin className='text-sky-500 transform hover:scale-125 transition-transform duration-300 text-2xl mx-3'/>
            <FaSquareXTwitter className='text-sky-500 transform hover:scale-125 transition-transform duration-300 text-2xl mx-3'/>
            <FaInstagram className='text-sky-500 transform hover:scale-125 transition-transform duration-300 text-2xl mx-3'/>

        </div>
        <div>
        <button className='mt-4 bg-sky-500 p-2 px-3 text-lg  rounded-md text-white'>Resume</button>
        <button className='mt-4 bg-sky-500 p-2 px-3 text-lg  rounded-md text-white mx-4'>Contact Me</button>

        </div>

        </div>
    </div>
  )
}

export default Hero