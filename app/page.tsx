import Nav from "./components/nav/page";
import 'animate.css';
export default function Home() {
  return (
    <>
    <Nav/>
   
    <div className=" w-full flex flex-col justify-end h-[100vh]">
    <h1 className=" animate__animated animate__fadeInLeft text-custom-textcolor text-2xl lg:text-6xl lg:mx-20 my-3 mx-5 font-thin ">Hello,</h1>
    <h1 className="animate__animated animate__bounceIn text-custom-textcolor2 text-6xl lg:text-9xl lg:mx-20 mx-5 font-bold">Im Abel-Rono<span className="text-custom-textcolor animate__animated animate__flash animate__infinite animate__slower">h</span></h1>
    <div className="animate__animated animate__delay-1s my-3 animate__fadeInUp">
    <h1 className="text-custom-textcolor tracking-wider mx-5 lg:mx-20 text-4xl font-thin my-3">Software Developer & Engineer For The WEB</h1>
    <p className=" tracking-wider lg:mx-20 w-[35rem]">I have 1 Year of experience developing functional full stack applications with <span className=" tracking-wider font-normal text-custom-textcolor2">REACT JS, NEXT JS, NODE JS, FIREBASE & MONGODB</span>  </p>
    <button className="hover:bg-custom-textcolor  hover:text-custom-blue yatra text-lg text-custom-lightblue border border-white  rounded-md lg:mx-20 my-10 px-5  py-4 tracking-widest font-black">See my work</button>
    </div>
    </div>
    </>
  );
}
