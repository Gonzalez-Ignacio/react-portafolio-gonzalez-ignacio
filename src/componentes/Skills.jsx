import React from "react";
import { softSkillsData } from "../data/data";
import {
    IconCodeBracket,
    IconCss,
    IconGit,
    IconGitHub,
    IconHtml,
    IconJs,
    IconReact,
} from "./icons/Iconos";
import iconCypress from "../assets/Icon-Cypress.png"

export default function Skills() {
    return (
        <section className="container mx-auto" id="skills">
            <div className="text-center my-5">
                <h2 className="text-4xl mb-0">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGradient-start to-primaryGradient-end font-bold"> Skills </span>
                </h2>
            </div>
            {/* Habilidades Blandas */}
            <div className="mt-10 md:mt-20 mb-5">
                <div className=" flex items-center justify-center  text-center md:justify-start gap-2 mb-8">
                    <div className="bg-gradient-to-br from-primaryGradient-start to-primaryGradient-end text-white rounded-md p-1 hidden md:block">
                        <IconCodeBracket />
                    </div>
                    <h3 className="text-3xl mb-0">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGradient-start to-primaryGradient-end font-bold">
                            Habilidades Blandas
                        </span>
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 mb-4 text-white gap-3 text-center">
                    {softSkillsData.map((text) => (
                        <div className="col-span-1" key={text}>
                            <div className=" bg-secondary rounded-xl p-3">
                                {text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Lista de Lenguajes */}
            <div className="mt-10 md:mt-20">
                <div className="flex items-center justify-center align-items-center md:justify-start gap-2 mb-8">
                    <div className="bg-gradient-to-br from-primaryGradient-start to-primaryGradient-end text-white rounded-md p-1 hidden md:block">
                        <IconCodeBracket />
                    </div>
                    <h3 className="text-3xl text-center md:text-start mb-0">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGradient-start to-primaryGradient-end font-bold ">
                            Habilidades técnicas
                        </span>
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 ">
                    <div className="col-span-1 text-center">
                        <h3 className="text-3xl mb-0">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGradient-start to-primaryGradient-end font-bold">
                                Front-end
                            </span>
                        </h3>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-items-center mt-4">
                            <IconHtml />
                            <IconCss />
                            <IconJs />
                            <IconReact />
                        </div>
                    </div>
                    <div className="col-span-1 text-center mb-20 md:mb-0">
                        <h3 className="text-3xl mb-0">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGradient-start to-primaryGradient-end font-bold">
                                Testing
                            </span>
                        </h3>
                        <div className="flex justify-center mt-4">
                            <img src={iconCypress} alt="Cypress Logo" height={200} width={200} />
                        </div>
                    </div>
                    <div className="col-span-1 text-center">
                        <h3 className="text-3xl mb-0">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGradient-start to-primaryGradient-end font-bold">
                                Control de versiones y colaboraciones
                            </span>
                        </h3>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 justify-items-center mt-4">
                            <IconGitHub />
                            <IconGit />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
