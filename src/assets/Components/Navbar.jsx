import React from 'react';
import { Router,Routes, Route , BrowserRouter, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex flex-col h-full text-white bg-sky-950'>

            <div className='flex justify-center p-4 pt-4'>
                <img
                    className='h-14 w-14 rounded-full'
                    src='https://pbs.twimg.com/profile_images/1791828029683216384/PuKAhhXJ_400x400.jpg'
                    alt='Profile'
                />
            </div>
            

            <nav className='flex flex-col justify-center items-center pt-20 text-sky-500'>
                <ul className='text-center'>
                    <li className='p-2 px-4 font-semibold text-lg'>Home</li>
                    <li className='p-2 px-4 font-semibold text-lg'>About</li>
                    <li className='p-2 px-4 font-semibold text-lg'>Portfolio</li>
                    <li className='p-2 px-4 font-semibold text-lg'>Resume</li>
                    <li className='p-2 px-4 font-semibold text-lg'>Blog</li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
