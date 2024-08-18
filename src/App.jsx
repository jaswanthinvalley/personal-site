
import './App.css';
import Navbar from './assets/Components/Navbar';
import Hero from './assets/Components/Hero';
import Smallnavbar from './assets/Components/Smallnavbar';

function App() {
  return (
    <>
      <div className="flex h-screen">

        <div className="hidden lg:block w-2/12 h-full bg-gray-800">
          <Navbar />
        </div>

        <div className="w-full md:w-8/12 h-full flex bg-sky-950 items-center ps-3 relative">
          <div className='flex-1'>
            <Hero />
          </div>
          <div className='block md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2'>
            <Smallnavbar />
          </div>
        </div>

        <div className="hidden md:block bg-sky-950 w-2/12 h-full">
        </div>

      </div>
    </>
  );
}

export default App;
