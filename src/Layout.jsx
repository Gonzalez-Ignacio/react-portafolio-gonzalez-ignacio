import React from "react";
import Navbar from "./componentes/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <section className="w-full h-full p-0">
            <Navbar />
            <main className="bg-primary text-gray-950 relative">
                <Outlet />
            </main>

            {/* <Toaster position="top-right" /> */}
        </section>
    );
}
