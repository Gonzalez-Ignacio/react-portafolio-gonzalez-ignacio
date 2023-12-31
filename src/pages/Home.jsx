import React, { useEffect, useState } from "react";
import Inicio from "../componentes/Inicio";
import Perfil from "../componentes/Perfil";
import { useLocation } from "react-router-dom";
import Navbar from "../componentes/Navbar";
import Skills from "../componentes/Skills";

export default function Home() {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState("inicio");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                if (
                    rect.top >= 0 &&
                    rect.bottom <= window.innerHeight
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
        <>
            <Navbar activeSection={activeSection} />
            <Inicio id={'inicio'} />
            <Perfil id={'perfil'} />
            <Skills id={'skills'} />
        </>
    );
}
