import Image from 'next/image';
import github from '../../../assets/github.png'
import pdf from '../../../assets/pdf.png'
import linkedin from '../../../assets/linkedin.png'
export default function Nav(){

    return(
        <>
        <div className="w-full z-30 flex items-center justify-between h-30 lg:h-[80px] bg-custom-lightblue fixed top-0 border-b-2 border-white">
       <div className='flex'>
        <Image src={github} alt="My Image" className=' ml-5 rounded-full bg-white hover:scale-110' />
        <div className='flex flex-col items-center justify-center ml-5 bg-white rounded-full w-[50px] h-[50px] hover:scale-110'>
                <Image src={linkedin} alt='resume' className='w-[30px] '/>
                {/* <h1 className='font-bold text-black text-xs'>Resume</h1> */}
            </div>
        
            
             </div>
        <div className='flex   h-full justify-between w-[160px] p-1 items-center '>
        <div className='flex flex-col items-center justify-center rotate-[-20deg] hover:rotate-[0deg] hover:scale-125 cursor-pointer transition-1s w-[50px] h-[60px] bg-white p-1 rounded-sm shadow-lg m-2'>
                {/* <Image src={pdf} alt='resume' className='w-[30px]'/> */}
                <div className="w-5 h-0.5 bg-black rounded-full m-1"></div>
                <div className="w-5 h-0.5 bg-black rounded-full"></div>
                <h1 className='font-bold text-xs text-black'>resume</h1>
            </div>
            {/* <button className='yatra bg-white text-black font-black p-4 rounded-lg h-3/4'>Me projects</button> */}
            <div className='flex flex-col items-center justify-center rotate-[20deg] hover:rotate-[0deg] hover:scale-125 cursor-pointer transition-1s w-[50px] h-[60px] bg-white p-1 rounded-sm shadow-lg m-2'>
                {/* <Image src={pdf} alt='resume' className='w-[30px]'/> */}
                <div className="w-5 h-0.5 bg-black rounded-full m-1"></div>
                <div className="w-5 h-0.5 bg-black rounded-full"></div>
                <h1 className='font-bold text-lg text-black'>CV</h1>
            </div>
        </div>
        <div className="flex  flex-col items-center justify-center w-[8rem] z-50 h-[110%] bg-custom-blue  cursor-pointer">
            <div className="w-10 h-0.5 bg-custom-lightblue rounded-full"></div>
            <div className="w-10 h-0.5 bg-custom-lightblue rounded-full mt-2"></div>
            <div className="w-10 h-0.5 bg-custom-lightblue rounded-full mt-2"></div>
        </div>
        </div>
        </>
    )
}