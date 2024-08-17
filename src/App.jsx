import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './assets/Components/Navbar';
import Hero from './assets/Components/Hero';

function App() {
  return (
    <>
      <div className="flex h-screen">

        <div className=" w-2/12 h-full">
          <Navbar />
        </div>
        

        <div className="w-8/12 h-full flex bg-sky-950  items-center ps-3">
        <Hero/>


        </div>
        
        <div className="bg-sky-950  w-2/12 h-full">

        </div>
      </div>
    </>
  );
}

export default App;
