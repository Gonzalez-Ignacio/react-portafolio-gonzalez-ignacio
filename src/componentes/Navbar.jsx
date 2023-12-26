import React, { useState, useEffect } from "react";
import { links } from "../data/data";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("");
    const location = useLocation()

    useEffect(() => {
        setActiveLink(location.pathname)
    },[location.pathname])
    return (
        <header className="z-[999] relative w-full">

            <nav className="w-full justify-center flex fixed md:top-[1.7rem] md:h-[initial]">
            <div className=" h-[4.5rem]  w-full rounded-none  bg-gray-950 bg-opacity-75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:top-6 md:h-[3.25rem] md:w-[45rem] md:rounded-full  ">
                <ul className="flex  h-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-white md:w-[initial] md:flex-nowrap gap-5">
                    {links.map((path) => (
                        <li key={path.name}>
                            <Link to={`/${path.path}`} className={activeLink === `/${path.path}` ? "bg-red-800 px-4 py-2 rounded-xl" : ""} >{path.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            </nav>
        </header>
    );
}
// style={{
//     backgroundColor: activeLink === `/${path.path}` ? "#FF0000" : "transparent",
// }}
