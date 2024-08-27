
import './App.css';
import Navbar from './assets/Components/Navbar';
import Hero from './assets/Components/Hero';
import Smallnavbar from './assets/Components/Smallnavbar';
import Intro from './assets/Components/Intro';
import Works from './assets/Components/Works';

function App() {
  return (
    <div className=''>
          <div className='bg-black'>
      <div className='flex justify-center w-full'>        
      <Navbar/>
      </div>
      <div className='w-full h-full bg-black'>
        <Hero/>
        <Intro/>
        <div><Works/></div>
      </div>


    </div>
    </div>
  );
}

export default App;
