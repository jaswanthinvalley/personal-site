import React from 'react'

const Works = () => {
  return (
    <div className=' lg:flex lg:justify-start'>
             <div className="bg-black text-white py-8 px-4 text-sky-500 font-poppins">
            
            <div className="flex flex-col md:flex-row md:justify-center">
                
                <div className="relative md:w-1/4">
                    <div className="absolute h-full w-1 bg-sky-500 left-1/2 transform -translate-x-1/2 md:hidden"></div>
                    <div className="hidden md:flex flex-col items-center w-full">
                        <div className="h-full w-1 bg-sky-500"></div>
                    </div>
                </div>

                
                <div className="md:w-3/4 text-sky-500">
                    {/* First Item */}
                    <div className="mb-8 flex flex-col md:flex-row items-start md:items-center">
                        <div className="md:w-1/4 md:text-right md:pr-8">
                            <h3 className="text-lg font-semibold text-sky-500">2023 September </h3>
                        </div>
                        <div className="md:w-3/4 bg-sky-950 p-4 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold"><a href='https://www.southhold.co.in/'>Southhold construction</a></h4>
                            <p className="mt-2">Redesigned and developed a mobile responsive and seo friendly website to increase sales</p>
                        </div>
                    </div>

                    
                    <div className="mb-8 flex flex-col md:flex-row items-start md:items-center">
                        <div className="md:w-1/4 md:text-right md:pr-8">
                            <h3 className="text-lg font-semibold text-sky-500">2023 December </h3>
                        </div>
                        <div className="md:w-3/4 bg-sky-950 p-4 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold"><a href='https://www.sriadhiraengineers.com/'>Adhira Engineers</a> </h4>
                            <p className="mt-2">Designed and developed a dynamic custom construction website form the scrach based on the client requirement </p>
                        </div>
                    </div>
                    <div className="mb-8 flex flex-col md:flex-row items-start md:items-center">
                        <div className="md:w-1/4 md:text-right md:pr-8">
                            <h3 className="text-lg font-semibold text-sky-500">2024 january </h3>
                        </div>
                        <div className="md:w-3/4 bg-sky-950 p-4 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold"><a href='https://jaswanthvenkat001.wixstudio.io/my-site-2'>Energ Foods</a> </h4>
                            <p className="mt-2">Designed and developed a mobile friendly Ecommerce with Razor pay payment integration</p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works