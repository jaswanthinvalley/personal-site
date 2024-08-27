import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './assets/Pages/About';
import Error from './assets/Pages/Error';
import Projects from './assets/Pages/Projects';
import Blog from './assets/Pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/error' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
