import React from "react";
import { projectsData } from "../data/data";

export default function Proyectos({ id }) {
    return (
        <section
            className="container mx-auto text-center text-3xl my-8"
            id={id}
        >
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGradient-start to-primaryGradient-end text-4xl font-bold pb-1">
                Proyectos
            </h3>

            <div className="flex flex-wrap justify-center flex-col items-center gap-10 my-3">
                {projectsData.map((project, index) => (
                    <a
                        className={` flex  bg-secondary shadow-xl ${
                            index % 2 ? "flex-row-reverse" : ""
                        }`}
                        href={project.link}
                        key={index}
                        target="_blank"
                    >
                        <figure className="hidden xl:block">
                            <img src={project.imageUrl} alt="Album" />
                        </figure>
                        <div className="card-body text-2xl text-white grid gap-5">
                            <h2 className="card-title text-4xl font-bold flex justify-center xl:justify-start">
                                {project.title}
                            </h2>
                            <p className="grid items-center">
                                {project.description}
                            </p>
                            <div
                                className={`card-actions justify-center xl:justify-end ${
                                    index % 2 ? "flex-row-reverse" : ""
                                }`}
                            >
                                {project.tags.map((tag) => (
                                    <li
                                        className="list-none bg-primary px-3 py-1 text-[.8rem] uppercase tracking-wider text-white rounded-full"
                                        key={tag}
                                    >
                                        {tag}
                                    </li>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
