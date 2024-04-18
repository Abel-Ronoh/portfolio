import Nav from "./components/nav/page";
import 'animate.css';
export default function Home() {
  return (
    <>
    <Nav/>
   
    <div className=" w-full flex flex-col justify-center h-[100vh]">
    <h1 className="playball animate__animated animate__fadeInLeft text-custom-textcolor text-2xl lg:text-8xl lg:mx-20 my-3 mx-5 ">hello,</h1>
    <h1 className="yatra  text-custom-lightblue text-6xl lg:text-7xl lg:mx-20 mx-5 font-bold">I'm Abel-Rono<span className="text-custom-textcolor animate__animated animate__flash animate__infinite animate__slower">h</span></h1>
    <div className="animate__animated animate__delay-1s my-10 animate__fadeInUp">
    <h1 className="unical tracking-wider  text-custom-textcolor mx-5 lg:mx-20 text-xl font-black">Software Developer & Engineer For The WEB</h1>
    <p className=" tracking-wider lg:mx-20 w-[35rem]">I have 1 Year of experience developing functional full stack applications with <span className="yatra tracking-wider text-custom-textcolor2 font-bold">REACT, NODE JS, FIREBASE & MONGODB</span>  </p>
    <button className="playball text-lg text-custom-blue bg-custom-lightblue rounded-md lg:mx-20 my-10 px-3  py-1 tracking-widest font-black">See my work</button>
    </div>
    </div>
    </>
  );
}
