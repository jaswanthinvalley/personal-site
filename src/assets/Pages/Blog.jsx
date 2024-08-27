import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className=' h-screen bg-sky-950 font-poppins text-sky-500 flex justify-center items-center'>
    <div className=' flex flex-col justify-center text-center'>
    <h1 className="text-6xl font-bold text-sky-500">Blog</h1>
      <p className="mt-4 text-xl text-sky-500">Blog page under developement</p>
      <Link to="/" className="mt-6 py-2 bg-sky-500 text-white rounded hover:bg-sky-900">
        Go Back Home
      </Link>
    </div>
    </div>
  )
}

export default Blog