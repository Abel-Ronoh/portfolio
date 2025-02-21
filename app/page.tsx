'use client'
import { useState } from 'react';
import light from '../assets/light.png';
import dark from '../assets/dark.png';
import Image from 'next/image'; 
import figma from '../assets/figma.png';
import fig from '../assets/fig-grey.png';
import architecture from '../assets/architecture.png'
import web from '../assets/web.png'
import db from '../assets/db.png'
import firebase from '../assets/firebase.png';
import dns from '../assets/dns.png'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
 
  
  return (
    
    <div className={`min-h-screen ${darkMode ? 'bg-[#5A3E2B] text-[#EDE0D4]' : 'bg-yellow-100 text-gray-900'}`}>

      <nav className={`${darkMode ? 'z-10 bg-[#5A3E2B]' : 'z-10 bg-yellow-100'} fixed w-full p-4 md:p-6 flex justify-between items-center`}>      
        <div className="text-xl md:text-2xl font-black">webDev</div>
        <div className="md:hidden ml-auto">
          <button onClick={() => setMenuOpen(true)} className="focus:outline-none">
            ☰
          </button>
        </div>
        <div className={`absolute md:static top-0 right-0 h-screen md:h-full w-full md:w-1/2 bg-yellow-100 md:bg-transparent p-4 md:p-0 flex flex-col md:flex-row gap-5 text-sm md:text-base font-light justify-center md:justify-center items-center transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
          <button onClick={() => setMenuOpen(false)} className="self-end mb-4 md:hidden">✕</button>        
          <h4 className='cursor-pointer hover:font-thin'>Skills</h4>
          <h4 className='cursor-pointer hover:font-thin'>Projects</h4>
          <h4 className='cursor-pointer hover:font-thin'>Education</h4>
          <h4 className='cursor-pointer hover:font-thin'>Contacts</h4>
          <button className={`${darkMode ? 'border-2 border-white px-4 md:px-5 py-1 rounded-md' : 'border-2 border-black px-4 md:px-5 py-1 rounded-md'}`}>See My Work</button>
        </div>
      </nav>

      <button onClick={toggleDarkMode} className="z-20 fixed left-4 top-16 md:top-[10vh]">
        {darkMode ? (
          <Image className='rounded-full hover:shadow-[0px_0px_95px_25px_#FFD700] transition-all duration-300' src={light} alt="Light Mode" width={24} height={24} />
        ) : (
          <Image className='rounded-full hover:shadow-[0px_0px_45px_25px_#1A1B26] transition-all duration-300' src={dark} alt="Dark Mode" width={20} height={20} />
        )}
      </button>

      <main className="p-4 flex flex-col items-center">
        <section className="relative h-screen w-full flex flex-col justify-end md:justify-center items-center text-center px-4">
          <h1 className="text-4xl font-[uncial] md:text-5xl lg:text-6xl font-bold mb-4">I&apos;m Abel Ronoh.</h1>
          <p className="max-w-lg md:max-w-xl lg:max-w-2xl text-base md:text-lg lg:text-xl mb-4">
            A <span className='font-bold'>Software Engineer</span> based on the web. Building <span className='font-bold'>full-stack web applications</span> with a focus on the overall <span className='font-bold'>architecture</span> and the <span className='font-bold'>front end.</span>
          </p>
          <button className={`${darkMode ? 'mb-24 md:mb-0 mt-6 px-8 py-2 bg-[#A67B5B] text-[#F5E8D0] rounded-lg text-lg' : 'mb-24 md:mb-0 mt-6 px-8 py-2 bg-blue-500 text-white rounded-lg text-lg'}`}>Experience</button>
        
          <section className="md:absolute md:bottom-1 md:mb-16 md:flex hidden md:justify-between md:items-center md:w-4/5 ">
          <div className='flex items-center justify-center'>
            <Image src={architecture} className="" width={38} height={38}/>
            <h2 className='font-black ml-3 text-[#8B8B8B]'>Architecture</h2>
          </div>
          <div className='flex items-center justify-center'>
            <Image src={db} className="" width={38} height={38}/>
            <h2 className='font-black ml-3 text-[#8B8B8B]'>DB design</h2>
          </div>
          <div className='flex items-center justify-center'>
            <Image src={figma} className="grayscale hover:grayscale-0 transition-300]" width={38} height={38}/>
            <h2 className='font-black ml-3 text-[#8B8B8B]'>Design</h2>
          </div>
          <div className='flex items-center justify-center'>
            <Image src={web} className="" width={38} height={38}/>
            <h2 className='font-black ml-3 text-[#8B8B8B]'>Web</h2>
          </div>
          
          <div className='flex items-center justify-center'>
            <Image src={firebase} className="" width={38} height={38}/>
            <h2 className='font-black ml-3 text-[#8B8B8B]'>Serverless</h2>
          </div>
        </section>
        </section>

        

        <section className="mb-16 flex flex-col items-center  w-full">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Featured Projects</h1>
         
          <div className=" w-full mb-20 flex flex-col gap-10 items-center md:w-3/4 md:justify-between md:flex-row">
            <div className='w-1/2  '>
          <h3 className='text-center font-bold mb-4 text-sm md:text-lg md:text-left'>SMART STUDY</h3>
             
              <p className='max-w-[400px] text-center text-xs md:text-sm md:text-left'>This is a <span className='font-bold'>chrome extension</span> that seamlessly <span className='font-bold'>generates summary and questions</span> as you study your material, (e.g PDF), and displays it on a <span className='font-bold'>sidepanel</span>sidepanel for you.</p>
          <a href=""><p className='text-blue-600 font-light mt-10 text-xs italic'>see it yourself</p></a>
            
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center flex-wrap gap-2 md:gap-3 '>
          <Image className='w-28 h-28 md:w-32 md:h-32' src={dns} alt="Dark Mode"  />
          <Image className='w-28 h-28 md:w-32 md:h-32' src={dns} alt="Dark Mode"  />
          <Image className='w-28 h-28 md:w-32 md:h-32' src={dns} alt="Dark Mode"  />
          <Image className='w-28 h-28 md:w-32 md:h-32' src={dns} alt="Dark Mode"  />
        
          </div>
          </div>

          
          <div className=" w-full mb-20 flex flex-col gap-10 items-center md:w-3/4 md:justify-between md:flex-row">
          <div className='w-full md:w-1/2 flex justify-center items-center flex-wrap gap-2 md:gap-3 '>
          <Image className='w-28 h-28 md:w-32 md:h-32' src={dns} alt="Dark Mode"  />
          <Image className='w-28 h-28 md:w-32 md:h-32' src={dns} alt="Dark Mode"  />
          <Image className='w-28 h-28 md:w-32 md:h-32' src={dns} alt="Dark Mode"  />
          <Image className='w-28 h-28 md:w-32 md:h-32' src={dns} alt="Dark Mode"  />
        
          </div>
            
            <div className='w-1/2  flex flex-col md:items-end'>
          <h3 className=' text-center font-bold mb-4 text-sm md:text-lg md:text-right'>SMART STUDY</h3>
             
              <p className='w-full max-w-[400px] text-center text-xs md:text-sm md:text-right'>This is a <span className='font-bold'>chrome extension</span> that seamlessly <span className='font-bold'>generates summary and questions</span> as you study your material, (e.g PDF), and displays it on a <span className='font-bold'>sidepanel</span>sidepanel for you.</p>
          <a href=""><p className='text-blue-600 font-light mt-10 text-xs italic'>see it yourself</p></a>
            
            </div>
            
          </div>
         
         
         
         <div className=" w-full mb-20 flex flex-col gap-10 items-center md:w-3/4 md:justify-between md:flex-row">
            <div className='w-1/2  '>
          <h3 className='text-center font-bold mb-4 text-sm md:text-lg md:text-left'>SMART STUDY</h3>
             
              <p className='max-w-[400px] text-center text-xs md:text-sm md:text-left'>This is a <span className='font-bold'>chrome extension</span> that seamlessly <span className='font-bold'>generates summary and questions</span> as you study your material, (e.g PDF), and displays it on a <span className='font-bold'>sidepanel</span>sidepanel for you.</p>
          <a href=""><p className='text-blue-600 font-light mt-10 text-xs italic'>see it yourself</p></a>
            
            </div>
            <div className='w-full md:w-1/2 flex justify-center items-center flex-wrap gap-2 md:gap-3 '>
          <Image className='w-28 h-28 md:w-32 md:h-32' src={dns} alt="Dark Mode"  />
          <Image className='w-28 h-28 md:w-32 md:h-32' src={dns} alt="Dark Mode"  />
          <Image className='w-28 h-28 md:w-32 md:h-32' src={dns} alt="Dark Mode"  />
          <Image className='w-28 h-28 md:w-32 md:h-32' src={dns} alt="Dark Mode"  />
        
          </div>
          </div>
        </section>
        <section>
          <h1 className='text-2xl md:text-3xl font-bold mb-6 text-center'>Education</h1>
          <div></div>
        </section>
        <footer className="text-center mt-16 text-sm md:text-lg">
          <p>&copy; 2023 Abel Ronoh. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
