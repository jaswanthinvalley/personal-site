import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Intro from '../Components/Intro'
import Works from '../Components/Works'

const About = () => {
  return (
    <div>
      <div className=''>
        <div className='bg-black'>
          <div className='flex justify-center w-full'>
            <Navbar />
          </div>
          <div className='w-full h-full bg-black'>
            <Hero />
            <Intro />
            <div><Works /></div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default About