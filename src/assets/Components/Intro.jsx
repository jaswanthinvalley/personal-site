import React from 'react';
import { FaCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineOpenAI } from "react-icons/ai"

const Intro = () => {
    return (
        <div className='m-4'>
            <h1 className='text-sky-500 font-poppins font-semibold text-center mb-4 text-2xl'>Who am I?</h1>
            <div className='bg-black text-sky-500 font-poppins flex flex-wrap justify-center'>
                <div className='bg-sky-950 m-3 rounded-md h-40 w-40 lg:w-50 flex flex-col items-center justify-center sm:h-32 sm:w-32'>
                    <h1 className='text-center font-semibold pb-2'>Developer</h1>
                    <FaCode size="32" />
                </div>

                <div className='bg-sky-950 m-3 rounded-md h-40 w-40 flex flex-col items-center justify-center sm:h-32 sm:w-32'>
                    <h1 className='text-center font-semibold pb-2'>Web3 Engineer</h1>
                    <FaEthereum size="32" />
                </div>
                <div className='bg-sky-950 m-3 rounded-md h-40 w-40 flex flex-col items-center justify-center sm:h-32 sm:w-32'>
                    <h1 className='text-center font-semibold pb-2'>AI enthusiast</h1>
                    <AiOutlineOpenAI size="32" />
                </div>
                <div className='bg-sky-950 m-3 rounded-md h-40 w-40 flex flex-col items-center justify-center sm:h-32 sm:w-32'>
                    <h1 className='text-center font-semibold pb-2'>Designer</h1>
                    <MdDesignServices size="32" />
                </div>
            </div>
        </div>
    );
}

export default Intro;
