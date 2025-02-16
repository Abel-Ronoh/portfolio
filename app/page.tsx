'use client'
import { useState } from 'react';
import light from '../assets/light.png'
import dark from '../assets/dark.png'
import Image from 'next/image'; 
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#5A3E2B] text-[#EDE0D4]' : 'bg-yellow-100 text-gray-900'}`}>
      <nav className={`${darkMode ?'bg-[#5A3E2B] ' : 'bg-yellow-100'} fixed w-full p-6 flex justify-between items-center`}>
      <div className="text-2xl font-black">webDev</div>
      <div className="text-[16px] font-light gap-5 flex justify-between">
        <h4 className='cursor-pointer hover:font-thin '>Skills</h4>
        <h4 className='cursor-pointer hover:font-thin '>projects</h4>
        <h4 className='cursor-pointer hover:font-thin '>education</h4>
        <h4 className='cursor-pointer hover:font-thin '>contacts</h4>
      </div>
      <button className={ `${darkMode ? 'border-2 border-white px-5 py-1  rounded-md' : 'border-2 border-black px-5 py-1  rounded-md'}`}
        >
          See My Work
        </button>
      </nav>
      <button
        onClick={toggleDarkMode}
        className="fixed left-0 top-[10vh] ml-14"
      >
        {darkMode ? (
          <Image className='rounded-full hover:shadow-[0px_0px_95px_25px_#FFD700] transition-all duration-300' src={light} alt="Light Mode" width={24} height={24} />
        ) : (
          <Image className='rounded-full hover:shadow-[0px_0px_45px_25px_#1A1B26] transition-all duration-300' src={dark} alt="Dark Mode" width={20} height={20} />
        )}
      </button>
      <main className="bg-[FFFFEE]">
        <section className="h-[100vh] flex flex-col justify-center items-center text-center mb-16">
          <h1 className="text-[60px] font-bold font-bold mb-[12px]">I'm Abel Ronoh.</h1>
          <p className="w-[618px]  text-[21px] mb-[12px]">A <span className='font-bold'>Software Engineer</span> based on the web. Building <span className='font-bold'>full stack web applications</span> with focus on the overall <span className='font-bold'>Architecture</span> and the <span className='font-bold'>front end.</span></p>
          <button className={`${darkMode ? 'mt-6 px-16 py-3 bg-[#A67B5B] text-[#F5E8D0] rounded-lg text-lg' : 'mt-6 px-16 py-3 bg-blue-500 text-white rounded-lg text-lg'}`}>Experience</button>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Improve your results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Remote work made easy with better tools</h3>
              <p className="text-lg">Get unlimited design 14+ Premium totalled 10 kits.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Import your results</h3>
              <p className="text-lg">Experience, territ up. Start with unlimited product your design.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Remove work made easy with better tools</h3>
              <p className="text-lg">Get unlimited design 14+ Premium totalled 10 kits.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Start with unlimited product</h3>
              <p className="text-lg">Your design. downtools.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Get unlimited design</h3>
              <p className="text-lg">14+ Premium totalled 10 kits.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Import your results</h3>
              <p className="text-lg">Experience, territ up. Start with unlimited product your design.</p>
            </div>
          </div>
        </section>

        <footer className="text-center mt-16">
          <p className="text-lg">&copy; 2023 AbelRonoh. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}