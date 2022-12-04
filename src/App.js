import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"


export default function App() {
    return (
        <div>
            <main className="main-main">
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="about" element={<About />} />
                        <Route path="*" element={<h1>404 page not found</h1>} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </main>
        </div>
    )
}