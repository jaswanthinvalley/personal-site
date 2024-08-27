import React from 'react'
import { Link } from 'react-router-dom';
import { CiHome, CiMail } from "react-icons/ci";
import { FaFile } from "react-icons/fa6";
import { FiAward } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
const Smallnavbar = () => {
  return (
    <div className=' bg-sky-500  rounded-2xl '>
    <ol className=' flex p-3 '>
        <li className='p-3 text-2xl hover:scale-110 transition-transform duration-200'><CiHome /></li>
        <li className='p-3 text-2xl hover:scale-110 transition-transform duration-200'><IoIosContact /></li>
        <li className='p-3 text-2xl hover:scale-110 transition-transform duration-200'><FiAward /></li>
        <li className='p-3 text-2xl hover:scale-110 transition-transform duration-200'><FaFile /></li>
        <li className='p-3 text-2xl hover:scale-110 transition-transform duration-200'><CiMail /></li>
    </ol>
    </div>
  )
}

export default Smallnavbar