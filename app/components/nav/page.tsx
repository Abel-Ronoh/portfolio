export default function Nav(){

    return(
        <>
        <div className="w-full flex justify-end h-30 lg:h-[80px] bg-custom-lightblue fixed top-0 border-b-2 border-white">
        <div className="flex mx-20 flex-col items-center justify-center w-[7rem] h-20 bg-custom-blue  cursor-pointer">
            <div className="w-10 h-0.5 bg-custom-lightblue rounded-full"></div>
            <div className="w-10 h-0.5 bg-custom-lightblue rounded-full mt-2"></div>
            <div className="w-10 h-0.5 bg-custom-lightblue rounded-full mt-2"></div>
        </div>
        </div>
        </>
    )
}