import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    const navStyle = ({ isActive }) => (isActive ? 'link active' : 'link')
    return (
        <nav className="nav--container">
            <ul>
                <li><NavLink to="/" className={navStyle}>Home</NavLink></li>
                <li><NavLink to="/projects" className={navStyle}>Projects</NavLink></li>
                <li><NavLink to="/about" className={navStyle}>About</NavLink></li>
            </ul>
        </nav>
    )
}