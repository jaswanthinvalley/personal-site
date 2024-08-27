import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-center h-full w-full text-white bg-black px-4'>

            <nav className='flex justify-center items-center text-sky-500 py-5 '>
                <div className='flex bg-sky-950 p-2 rounded-full justify-center opacity-80 flex-wrap'>
                    <li className='list-none px-5 font-poppins font-medium sm:px-3'>About</li>
                    <li className='list-none px-5 font-poppins font-medium sm:px-3'>Projects</li>
                    <li className='list-none px-5 font-poppins font-medium sm:px-3'>Blog</li>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;
