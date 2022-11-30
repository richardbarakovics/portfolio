import React from "react";
import MultipleItems from "../Slider";
import bootstrapImg from "../images/technologies/bootstrap.png";
import cssImg from "../images/technologies/css.png";
import gitImg from "../images/technologies/git.png";
import htmlImg from "../images/technologies/html.png";
import javascriptImg from "../images/technologies/javascript.png";
import reactImg from "../images/technologies/react.png";

export default function Home() {
    return (
        <>
            <main className="intro--container">
                <div className="greet-title--container">
                    <h1 className="greet"><span className="newline">Hi,</span> I am Rick</h1>
                    <h4 className="title">front-end developer</h4>
                </div>
                <button className="intro--projects">projects</button>
            </main>
            <section className="whoamI">
                <h3 className="section--title">About me</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
            <div className="slider">
                <MultipleItems />
            </div>
            <section className="technologies--container">
                <h3>Technologies</h3>
                <section className="tech-img--container">
                    <img src={bootstrapImg} alt="bootstrap" width="55px" />
                    <img src={cssImg} alt="css" width="55px" />
                    <img src={gitImg} alt="git" width="55px" />
                    <img src={htmlImg} alt="html" width="55px" />
                    <img src={javascriptImg} alt="javascript" width="55px" />
                    <img src={reactImg} alt="react" width="55px" />
                </section>
            </section>
        </>
    )
}

