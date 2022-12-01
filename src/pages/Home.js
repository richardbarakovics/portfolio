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
                    {/* <h4 className="title">front-end developer</h4> */}
                </div>
                {/* <button className="intro--projects">projects</button> */}
            </main>
            <section className="whoamI">
                <h3 className="section--title">Who am I</h3>
                <p>
                    I am a front-end developer with a passion to build UI’s that makes people want to bite into it. I am working based on my own designs. Currently, I am developing only hobby projects, while I am trying to simulate the workflow as it was a professional environment. I am also up-to-date on the latest version of the technologies I am using. I am looking forward to join a developer team where I will be able to learn more efficiently, while I could add value to the team as well.
                </p>
            </section>
            <div className="slider">
                <MultipleItems />
            </div>
            <section className="technologies--container">
                <h3>Technologies</h3>
                <section className="tech-img--container">
                    <img src={htmlImg} alt="html" width="55px" />
                    <img src={cssImg} alt="css" width="55px" />
                    <img src={javascriptImg} alt="javascript" width="55px" />
                    <img src={reactImg} alt="react" width="55px" />
                    <img src={gitImg} alt="git" width="55px" />
                    <img src={bootstrapImg} alt="bootstrap" width="55px" />
                </section>
            </section>
        </>
    )
}

