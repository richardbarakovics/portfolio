import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function SharedLayout() {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}