import React from "react";
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
        <>
            <Nav />
            <main className="main-main">
                <Projects />
            </main>
            <Footer />
        </>
    )
}