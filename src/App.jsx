import react from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Inicio from "./componentes/Inicio";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Layout />}>
                    <Route path="/" element={<Inicio />} /> 
                    <Route path="/projects" element={<Inicio />} />
                    <Route path="/skills" element={<Inicio />} />
                    <Route path="/about" element={<Inicio />} />
                    <Route path="/contact" element={<Inicio />} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
