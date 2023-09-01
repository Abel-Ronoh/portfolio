export default function Projects(){

    const project =[
        {id: 1, projectName: "Media Craft", Description: "This is a web app that allows a freelancer to select media and edit for the client. By the help of a blockchain smart contract, the freelancer is paid"},
        {id: 2, projectName: "Media Craft", Description: "This is a web app that allows a freelancer to select media and edit for the client. By the help of a blockchain smart contract, the freelancer is paid" }
    ]
       return(
        <div className="w-3/5 my-10">
            <div className="flex justify-between items-center">
            
            <h2 className="tracking-widest text-gray-300">Projects</h2>
            
            </div>
            {project.map(item=>
                <div key={item.id} className="flex relative flex-col justify-center h-60 border my-5 p-5 rounded-xl">
                    <p className="text-white">{item.projectName}</p>
                    <p className="text-sm font-thin tracking-wider w-3/4 ">{item.Description}</p>
                    <div className="flex absolute bottom-3 w-11/12 justify-between text-white">
                        <button className="bg-custom-lightblue text-xl font-medium text-custom-blue rounded-full px-4 py-1">Live</button>
                        <button className="bg-custom-textcolor2 text-xl font-medium text-custom-blue rounded-full px-4 py-2">Code</button>
                    </div>
                </div>
            )}
            <p className="w-full text-end cursor-pointer hover:text-custom-lightblue tracking-widest text-gray-300 text-sm font-thin">see more</p>     
        </div>
       )
}