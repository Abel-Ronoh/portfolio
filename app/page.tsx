import Nav from "./components/nav/page";
import Experience from "./components/experience/page";
import 'animate.css';
import Footer from "./components/footer/page";
import Image from 'next/image';
import github from '../assets/github.png'
import pdf from '../assets/pdf.png'
import linkedin from '../assets/linkedin.png'
import Projects from "./components/projects/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
    
   
    <div className=" w-full  flex flex-col justify-end items-center h-[120vh]">
      <div className="w-3/5 ">
    <h1 className=" animate__animated animate__fadeInLeft text-custom-textcolor text-2xl lg:text-6xl  font-thin ">Hello,</h1>
    <h1 className="animate__animated animate__bounceIn text-custom-textcolor2 text-6xl lg:text-9xl  font-bold">Im Abel-Rono<span className="text-custom-textcolor animate__animated animate__flash animate__infinite animate__slower">h</span></h1>
    <div className="animate__animated animate__delay-1s my-3 animate__fadeIn">
    <h1 className="text-custom-textcolor tracking-wider  text-4xl font-thin my-3">Software Developer & Engineer For The WEB</h1>
    <p className=" tracking-wider text-gray-300 w-[35rem]">I have 1 Year of experience developing functional full stack applications with <span className=" tracking-wider font-normal text-custom-textcolor2">REACT JS, NEXT JS, NODE JS, FIREBASE & MONGODB</span>  </p>
    <div className="flex justify-between items-center">
    <button className=" hover:bg-custom-textcolor  hover:text-custom-blue yatra text-lg text-custom-lightblue rounded-md  my-10 px-5  py-1 tracking-widest font-thin border-gray-700 border-l border-r">See my work</button>
    <div className="flex">
    <Image src={github} alt="My Image" className='w-10 h-10 ml-5 rounded-full bg-white hover:scale-110' />
    <div className='flex flex-col items-center justify-center ml-5 bg-white rounded-full w-10 h-10 hover:scale-110'>
                <Image src={linkedin} alt='resume' className='w-[20px] '/>
                {/* <h1 className='font-bold text-black text-xs'>Resume</h1> */}
            </div>
    </div>
    </div>
    <div className="my-5">
    <div className="my-3 flex justify-between">
    <h1 className="font-black text-custom-textcolor tracking-widest text-xl">Experiences</h1>
      <p className="font-thin text-xs  p-0 cursor-pointer hover:text-custom-lightblue">View All </p>
      </div>
      <a href="#"><div className="flex justify-between mb-2 hover:border-l hover:border-r items-center  rounded-md p-1">
      <p className="text-gray-300">Hackathon at Davis & Shirtliff, Nairobi</p>
      <p className="font-thin text-xs">28th October - 3rd November 2023</p>
      </div></a>
      <a href="#"><div className="flex justify-between mb-2 hover:border-l hover:border-r items-center rounded-md p-1">
      <p className="text-gray-300">Hackathon at Davis & Shirtliff, Nairobi</p>
      <p className="font-thin text-xs">28th October - 3rd November 2023</p>
      </div></a>
      <a href="#"><div className="flex justify-between mb-2 hover:border-l hover:border-r items-center rounded-md p-1">
      <p className="text-gray-300">Hackathon at Davis & Shirtliff, Nairobi</p>
      <p className="font-thin text-xs">28th October - 3rd November 2023</p>
      </div></a>
    </div>
    </div>
    </div>
    
    </div>
    <Projects/>
    
    {/* <Experience/> */}
    <Footer/>
    {/* <Nav/> */}
    </div>
  );
}
