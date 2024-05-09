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
                <div key={item.id} className="flex flex-col h-60 border my-5 p-5 rounded-xl">
                    <p className="text-white">{item.projectName}</p>
                    <p>{item.Description}</p>
                    <div className="flex self-bottom justify-between text-white">
                        <button className="bg-white text-custom-blue rounded-full px-2 py-1">Live</button>
                        <button className="bg-white text-custom-blue rounded-full px-2 py-2">Code</button>
                    </div>
                </div>
            )}
            <p className="w-full text-end cursor-pointer hover:text-custom-lightblue tracking-widest text-gray-300 text-sm font-thin">see more</p>     
        </div>
       )
}