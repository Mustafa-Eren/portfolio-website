"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA =[
    {
        title: "Skills",
        id:"skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>React</li>
                <li>.NET Core / .NET Framework</li>
                <li>C# / ASP.NET</li>
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>MySQL</li>
            </ul>
        )
    },
    {
        title: "Education",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                {/* <li>Mustafa Kemal Anatolian High School</li> */}
                <li>Bachelor Degree in Computer Engineering, Cukurova University, Adana</li>
            </ul>
        )
    },
    {
        title: "Experience/Certification",
        id:"experience",
        content:(
            <ul className='list-disc pl-2'>
                <li>Softtech, Software Developer, 11/2023 - Present</li>
                <li>Triomobil, Software Engineer, 09/2020 - 10/2023</li>
                <li>ASELSAN, Summer Intern, 07/2018 - 08/2018</li>
                <li>TrioMobil, Summer Intern, 06/2017 - 07/2017</li>
                <li>Introduction to Cyber Security, Privia, Adana</li>
                <li>Agile Mindset, Akbank/TEB, Adana</li>
                <li>.NET Training, Novartz Bilişim, Adana</li>
            </ul>
        )
    }
];


const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();


    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section className='text-white'>

            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/pc.png" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I am a full stack web developer with a passion for creating
                        interactive and responsive web applications. I have experience
                        working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                        HTML, CSS, and Git. I am a quick learner and I am always
                        looking to expand my knowledge and skill set. I am a team player and
                        I am excited to work with others to create amazing applications.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab == "skills"}>
                            {" "}Skills{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab == "education"}>
                            {" "}Education{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab == "experience"}>
                            {" "}Experience/Certification{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {
                            TAB_DATA.find((t)=>t.id === tab).content
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection