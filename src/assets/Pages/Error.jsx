import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-sky-950 font-poppins">
      <h1 className="text-6xl font-bold text-sky-500">404</h1>
      <p className="mt-4 text-xl text-sky-500">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-900">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
