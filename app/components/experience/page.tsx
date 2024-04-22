'use client'
import { useState, useEffect } from 'react';
import { db } from "../../../firebase-config";
import { getDocs, collection, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
// import { Console } from 'console';

// Define an interface for the structure of your Firestore documents
interface Comments{
    id:string;
    postId: string;
    date:Date;
    username: string;
    comment: string;
}
interface Experience {
    id: string;
    image: string;
    header: string;
    description: string;
    index: number;
}



async function fetchDataFromFirestore(): Promise<Experience[]> {
    const querySnapshot = await getDocs(collection(db, "experiences"));
    const data: Experience[] = [];
    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        data.push({ id: doc.id, ...doc.data() } as Experience);
    });
    
    console.log(data); // Logging the data here
    return data;
}



export default function Experience() {
    const [experiences, setExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        async function fetchExperiences() {
            const data = await fetchDataFromFirestore();
            setExperiences(data);
        }
        fetchExperiences();
    }, []);
    var i=0;
    experiences.forEach(experience =>{
        i++;
        experience.index = i;
    })
    return (
        <div className="h-[100vh] w-full flex flex-col items-center my-20">
            <h1 className="text-5xl text-custom-lightblue">EXPERIENCES</h1>
            <ul className='w-full h-full'>
                {experiences.map((experience) => (
                    <li key={experience.id} className='relative flex w-full h-full items-center justify-between'>
                        {experience.index}
                        <img className={`animate__animated animate__bounceIn animate__delay-2s w-1/3 m-20 ${experience.index % 2 === 0 ? 'order-2' : 'order-1'}`} src={experience.image} alt="IMAGE" />
                        <div className={`animate__animated animate__fadeInUp h-full flex flex-col justify-center text-end mx-20 ${experience.index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                            <h1 className='text-6xl font-bold text-custom-textcolor2'>{experience.header}</h1>
                            <p>{experience.description}</p>
                        </div>
                        <h4 className='playball tracking-widest text-lg absolute bottom-0 right-20 font-bold'>see comments</h4>
                        <hr className='absolute bottom-2 left-20 w-4/5 bg-white'/>
                        <div className='absolute  rounded-2xl w-1/3 h-3/4 right-20 bottom-5 bg-gradient-to-r from-custom-bg to-custom-blue border border-white z-20'>
                            <div className='relative flex  w-full bg-red-500 '>
                                <h1 className='absolute mx-0 text-xl font-thin text-custom-lightblue top-0 right-0  '>x</h1>
                            </div>
                            <ul className='rounded-xl my-1 bg-gray-700'>
                                <li className='mx-5'>
                                    <h1>username</h1>
                                    <h3>comment</h3>
                                </li>
                                {/* <hr className='bg-white w-full shadow-neumorphism'/> */}
                            </ul>
                           
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

