import React from "react";
import { IconGitHub, IconLinkedIn } from "./icons/Iconos";

export default function Contacto({id}) {
    return (
        <section
            className="container mx-auto bg-secondary rounded-xl text-white text-2xl py-5"
            id={id}
        >
            <div className="text-center my-3">
                <h2 className="text-4xl font-bold mb-5 pb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGradient-start to-primaryGradient-end"> Contáctame </span>
                </h2>
                <p className="text-white mt-5 mb-3">
                    Si desea ponerse en contacto conmigo, puedes hacerlo a
                    través de mis redes sociales:
                </p>
                <div className=" flex justify-center gap-3 mb-5">
                    <a
                        className="text-blue-900"
                        href="https://www.linkedin.com/in/ignacio-gonz%C3%A1lez-899b7b215/"
                        target="_blank"
                    >
                        <IconLinkedIn className={"h-12 w-12"} />
                    </a>
                    <a
                        className="text-gradient"
                        href="https://github.com/Gonzalez-Ignacio"
                        target="_blank"
                    >
                        <IconGitHub className={"h-12 w-12"}/>
                    </a>
                </div>
                <p className="text-white fs-5 mt-4">
                    Si tienes alguna pregunta o necesitas asistencia con algún
                    proyecto, estaré encantado/a de ayudarte.
                </p>
                <p className="text-white fs-5 mt-3">
                    No dudes en contactarme de forma directa!.
                </p>
                <div className="col-auto d-flex justify-content-center fs-2 gap-4 mb-5">
                    <a
                        className="text-gradient"
                        href="https://wa.me/541123809815"
                        target="_blank"
                    >
                        <i className="bi bi-whatsapp"></i>
                    </a>
                </div>
                <p className="text-white fs-5 mt-3">
                    Si quieres contratar los servicios de mi pagina web, puedes
                    hacerlo a traves del siguiente link
                </p>
                <div className="col-auto d-flex justify-content-center fs-2 gap-4 mb-5">
                    <a className="text-gradient" href="#">
                        Próximamente...
                    </a>
                </div>
                <p className="text-white fs-5 mt-5"> Muchas Gracias!</p>
            </div>
        </section>
    );
}
