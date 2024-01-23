import React, { useEffect, useState } from "react";
import Inicio from "../componentes/Inicio";
import Perfil from "../componentes/Perfil";
import { useLocation } from "react-router-dom";
import Navbar from "../componentes/Navbar";
import Skills from "../componentes/Skills";
import Contacto from "../componentes/Contacto";
import Proyectos from "../componentes/Proyectos";

export default function Home() {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState("inicio");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const visibility = 0.5;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                if (
                    rect.top <= window.innerHeight * visibility &&
                    rect.bottom >= window.innerHeight * (1 - visibility)
                ) {
                    setActiveSection(section.id);
                }
            })
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname]);

    return (
        <div className="pb-20">
            <Navbar activeSection={activeSection} />
            <Inicio id={'inicio'} />
            <Perfil id={'perfil'} />
            <Proyectos id={'proyectos'} />
            <Skills id={'skills'} />
            <Contacto id={'contacto'} />
        </div>
    );
}
