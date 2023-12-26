import React from "react";
import "./../css/Inicio.css"

export default function Inicio() {
    return (
        <section className="pt-20 lg:pt-0 grid justify-center" id="Inicio">
            <div className="container px-5 py-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
                    <div className="col-span-1 md:text-left text-center">
                        {/* Header text content */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold mb-4">
                                <span className="text-gradient inline-block">
                                    {" "}
                                    Ignacio González{" "}
                                </span>
                            </h1>
                            <div className="text-black rounded-md  mb-5">
                                <h3 className="uppercase text-animado text-3xl xl:text-4xl">
                                    {" "}
                                    Desarrollador Front-End
                                </h3>
                            </div>
                            <div className="space-y-3">
                                <button className="bg-primary text-white py-2 px-4 rounded">
                                    <a
                                        href="./descargas/Gonzalez-Ignacio-Cv.pdf"
                                        download
                                        className="text-decoration-none"
                                        target="_blank"
                                    >
                                        Descargar Cv
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:text-right text-center">
                        {/* Header profile picture */}
                        <div className="flex justify-center md:justify-end mt-5 ms-5 ps-5 md:mt-0">
                            <div className="profile">
                                {/* 
                            <img className="profile-img" src="FOTO" alt="Mi Foto" FOTOO/> 
                            Puedes descomentar y reemplazar 'FOTO' y 'FOTOO' con la URL y el texto alternativo adecuados.
                        */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
