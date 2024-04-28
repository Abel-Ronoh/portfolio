import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild } from '@fortawesome/free-solid-svg-icons'


export default function Footer(){
    return(
        <div className="h-[50vh] text-white bg-gray-800 flex items-center">
            <div className="w-1/4 flex justify-center items-center">
            <h1 className="playball  text-9xl">A</h1>
            </div>
            <div className="h-3/4 border-l border-gray-600"></div>
            <div className='w-1/2 flex flex-col'>
            <h1 className='text-center mb-4 font-bold tracking-widest'>Talk To Me</h1>
                <form action="" className='w-full  h-3/4 flex flex-col items-center'>
                    
                <input type='email' placeholder='email *' required className='w-1/3 rounded-3xl text-center bg-transparent border border-gray-600'/>
                <textarea name="" id="" required placeholder='brief description of the subject *' className='w-1/2 m-5 p-2 bg-transparent border border-gray-600 rounded-3xl text-center'></textarea>
                <input type='submit' className='bg-custom-textcolor cursor-pointer text-custom-blue py-2 px-7 rounded-sm'/>
                </form>
            </div>
            <div className="h-3/4 border-l border-gray-600"></div>
            <div className='flex w-1/4 flex-col justify-center items-center'>
            <a href=""><p>| abellronoh@gmail.com | </p></a><br/>
            <p> +254794140776</p>
            </div>
        </div>
    )
}