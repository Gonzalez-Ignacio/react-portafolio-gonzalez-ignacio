import React from "react";

export default function Perfil({ id }) {
    return (
        <section className="container bg-secondary  text-4xl rounded-xl shadow-md py-5 m-auto" id={id}>
            <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGradient-start to-primaryGradient-end font-bold">Acerca de mí</span>
                </h2>
                <p className="text-white text-2xl mb-4 mt-5">
                    ¡Hola! Soy Ignacio González, un desarrollador frontend
                    apasionado por crear experiencias web. Mi objetivo es
                    combinar mi creatividad con mis habilidades técnicas para
                    diseñar y construir interfaces de usuario intuitivas y
                    atractivas.
                </p>
                <p className="text-white text-2xl">
                    Me encanta enfrentar desafíos y aprender nuevas tecnologías,
                    trabajar en equipo y colaborar con diseñadores y
                    desarrolladores backend para llevar a cabo proyectos
                    exitosos.
                </p>
            </div>
        </section>
    );
}
