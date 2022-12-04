import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="nav--container">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}