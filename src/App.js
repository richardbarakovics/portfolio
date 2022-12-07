import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import SharedLayout from "./pages/SharedLayout";
import SingleProject from "./pages/SingleProject";


export default function App() {
    return (
        <main className="main-main">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SharedLayout />} >
                        <Route index element={<Home />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects/:projectId" element={<SingleProject />} />
                        <Route path="*" element={<h1>404 page not found</h1>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </main>
    )
}