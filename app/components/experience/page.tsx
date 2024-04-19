'use client'
import { useState, useEffect } from 'react';
import { db } from "../../../firebase-config";
import { getDocs, collection, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';

// Define an interface for the structure of your Firestore documents
interface Experience {
    id: string;
    image: string;
    header: string;
    description: string;
    // Add more properties if necessary
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

    return (
        <div className="h-[100vh] flex flex-col items-center my-20">
            <h1 className="text-5xl text-custom-lightblue ">EXPERIENCES</h1>
            <ul>
                {experiences.map((experience) => (
                    <li key={experience.id} className='flex max-w-1/3 h-4/5 items-center justify-between'>
                        <img className='w-1/4 m-20' src={experience.image} alt="" />
                        <div className='text-end mx-20'>
                        <h1 className='text-6xl font-bold text-custom-textcolor2'>{experience.header}</h1>
                        <p>{experience.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
