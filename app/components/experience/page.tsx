'use client'
import React, { useState, useEffect } from 'react';
import { db } from "../../../firebase-config";
import { getDocs, collection, query, where, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import Image from 'next/image';
import img from '../../../assets/send.png'

interface Comments {
    id: string;
    postId: string;
    date: Date;
    username: string;
    comment: string;
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
    }, [experiences]);
console.log(commentsMap)
    var i = 0;
    experiences.forEach(experience => {
        i++;
        experience.index = i;
    });

    return (
        <div className="relative h-[100vh] w-full flex flex-col items-center my-20">
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
                        <hr className='absolute bottom-2 left-20 w-4/5 bg-white' />
                        <div className='absolute flex flex-col rounded-2xl w-1/4 h-4/5 right-20 bottom-5 bg-gradient-to-r from-custom-bg to-custom-blue border border-white z-20'>
                            <div className='relative flex  w-full bg-red-500 '>
                                <h1 className='absolute mx-0 text-xl font-thin text-custom-lightblue top-0 right-0  '>x</h1>
                                
                            </div>
                            <ul className='rounded-xl my-1 bg-gray-700'>
                                {commentsMap[experience.postId]?.map((comment) => (
                                    <li key={comment.id} className='mx-5'>
                                        <h1>{comment.username}</h1>
                                        <h3>{comment.postId}</h3>
                                    </li>
                                ))}
                            </ul>
                            <div className='absolute bottom-2 w-full flex justify-between '>
                            <input type="text" className=' bg-transparent border text-center border-custom-lightblue text-sm p-1 mx-3 rounded-xl  w-1/4 left-0' placeholder='username' />
                            <input type="text" className=' bg-transparent border text-center border-custom-lightblue text-sm p-1 mx-1 rounded-xl  w-3/5 ' placeholder='comment' />
                            <Image src={img} alt="My Image" className='w-auto mx-2' />
                            </div>
                         </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
