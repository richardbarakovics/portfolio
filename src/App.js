import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./pages/Home"


export default function App() {
    return (
        <>
            <Nav />
            <Home />
            <Footer />
        </>
    )
}