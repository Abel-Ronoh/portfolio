'use client'
import React, { useState, useEffect } from 'react';
import { db } from "../../../firebase-config";
import { getDocs, collection, query, where, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import Image from 'next/image';
import img from '../../../assets/send.png'
import loading from '../../../assets/load.png'

interface Comments {
    id: string;
    postId: string;
    date: Date;
    username: string;
    content: string;
}

interface Experience {
    id: string;
    image: string;
    header: string;
    description: string;
    postId: string;
    index: number;
}

async function fetchDataFromFirestore(): Promise<Experience[]> {
    const querySnapshot = await getDocs(collection(db, "experiences"));
    const data: Experience[] = [];
    querySnapshot.forEach((docs: QueryDocumentSnapshot<DocumentData>) => {
        data.push({ id: docs.id, ...docs.data() } as Experience);
    });

    console.log(data);
    return data;
}

async function fetchComments(postId: string): Promise<Comments[]> {
    const q = query(collection(db, "comments"), where("postId", "==", postId));
    const querySnapshot = await getDocs(q);
    const data: Comments[] = [];
    querySnapshot.forEach((docs: QueryDocumentSnapshot<DocumentData>) => {
        data.push({ id: docs.id, ...docs.data() } as Comments);
    });

    console.log(data);
    return data;
}



export default function Experience() {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [commentsMap, setCommentsMap] = useState<{ [postId: string]: Comments[] }>({});
    const [comments, toggleComments] = useState(false);
    useEffect(() => {
        async function fetchExperiences() {
            const data = await fetchDataFromFirestore();
            setExperiences(data);
        }
        fetchExperiences();
    }, []);

    useEffect(() => {
        async function fetchCommentsData() {
            const commentsData: { [postId: string]: Comments[] } = {};
            for (const experience of experiences) {
                if (experience.postId) { // Check if postId is defined
                    console.log("Experience postId:", experience.postId);
                    const comments = await fetchComments(experience.postId);
                    commentsData[experience.postId] = comments;
                }
            }
            setCommentsMap(commentsData);
        }
        
        if (experiences.length > 0) {
            fetchCommentsData();
        }
    }, [comments]);
console.log(commentsMap)
    var i = 0;
    experiences.forEach(experience => {
        i++;
        experience.index = i;
    });

    function seeComments(){
        toggleComments(!comments)
        
    }
    console.log(comments)

    return (
        <div className="relative  w-full flex flex-col items-center ">
            
            <h1 className="text-5xl yatra text-custom-lightblue  w-full text-center">EXPERIENCES</h1>
            {experiences.length === 0 && (
                <>
                <Image src={loading} alt="My Image" className='w-7 m-2 animate__animated animate__rotateIn animate__infinite' />
    <h1 className='text-white h-20'>loading...</h1>
    </>
)}
{experiences.length > 0 && (
            <ul className='w-full h-full'>
                {experiences.map((experience) => (
                    <li key={experience.id} className='relative flex w-full h-[80vh] items-center justify-between'>
                        {experience.index}
                        <img className={`animate__animated animate__bounceIn animate__delay-2s w-1/3 m-20 ${experience.index % 2 === 0 ? 'order-2' : 'order-1'}`} src={experience.image} alt="IMAGE" />
                        <div className={`animate__animated animate__fadeInUp  flex flex-col justify-center text-end mx-20 ${experience.index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                            <h1 className='text-6xl font-bold text-custom-textcolor2'>{experience.header}</h1>
                            <p>{experience.description}</p>
                        
                        </div>
                        {/* <hr className='absolute bottom-2 left-20 w-4/5 bg-white' /> */}
                        {comments&&
                        <div className='absolute animate__animated animate__bounceInRight  flex flex-col rounded-2xl w-1/4 h-4/5 right-20 bottom-10 bg-gradient-to-r from-custom-bg to-custom-blue  z-20'>
                            <div className='relative flex  w-full text-center justify-between '>
                                <h1 className='playball tracking-widest m-1 text-xl font-thin w-4/5'>Leave Comment</h1>
                                <h1 onClick={seeComments} className='cursor-pointer mx-3 text-xl font-thin text-custom-lightblue top-0 right-0  '>x</h1>
                                
                            </div>
                            <ul className=' mb-10' >
                                {commentsMap[experience.postId]?.map((comment) => (
                                    <li key={comment.id} className='flex  pb-4 justify-between items-center px-5 mb-[1px] min-h-10'>
                                        <div>
                                        <h1 className='text-xs tracking-widest font-thin'>{comment.username}</h1>
                                        <h3 className='text-xs tracking-widest text-white'>{comment.content}</h3>
                                        </div>
                                        <p className='text-xs font-thin'>time</p>
                                    </li>
                                ))}
                            </ul>
                            <div className='absolute bottom-2 w-full flex justify-between '>
                            <input type="text" className=' bg-transparent border text-center border-custom-lightblue text-sm p-1 mx-3 rounded-xl  w-1/4 left-0' placeholder='username' />
                            <input type="text" className=' bg-transparent border text-center border-custom-lightblue text-sm p-1 mx-1 rounded-xl  w-3/5 ' placeholder='comment' />
                            <Image src={img} alt="My Image" className='w-auto mx-2' />
                            </div>
                         </div>
}
                            <h4 onClick={seeComments} className='playball  absolute cursor-pointer tracking-widest text-lg mr-20   bottom-0 right-0 font-thin'>see comments</h4>

                    </li>
                ))}
            </ul>
)}
        </div>

    );
}
