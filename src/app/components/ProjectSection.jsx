"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 Description",
        image: "/images/projects/WebSite.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Swagger Backend RestAPI",
        description: "Project 2 Description",
        image: "/images/projects/backendUI.png",
        tag: ["All", "Backend"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Searching Algorithm Backend with Lucene.Net",
        description: "Project 3 Description",
        image: "/images/projects/lucene-net-color.png",
        tag: ["All", "Backend"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Stock Tracking Program",
        description: "Project 4 Description",
        image: "/images/projects/desktopStock.png",
        tag: ["All", "Desktop"],
        gitUrl: "/",
        previewUrl: "/"
    },
];
const ProjectSection = () => {

    const [tag, setTag] = useState("All");
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    // const cardVariants = {
    //     initial: { y: 50, opacity: 0 },
    //     animate: { y: 0, opacity: 1 },
    // };

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Backend"
                    isSelected={tag === "Backend"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Desktop"
                    isSelected={tag === "Desktop"}
                />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project) =>
                (<ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
                ))}
            </div>
        </>
    )
}

export default ProjectSection