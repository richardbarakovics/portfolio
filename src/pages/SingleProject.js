import React from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../Data";

export default function SingleProject() {
    const { projectId } = useParams();
    // az alábbiban tripla egyenloseget legyereltem duplara es megoldotta???
    const projects = Data.find((projects) => projects.id == projectId);
    const { title, image, githubLink, technologies, hashtags } = projects;
    return (
        <article className="singleproject--container">
            <img className="singleproject-image" src={image} alt="" width="300" />
            <h1 className="singleproject-title">{title}</h1>
            <h3 className="singleproject-hashtags">{hashtags.map(x => ` #${x}`)}</h3>
            <section className="singleproject--section">
                <div className="singleproject-problem--container">
                    <h5 className="singleproject-subtitle">Problem solved</h5>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                </div>
                <div className="singleproject-technologies--container">
                    <h5 className="singleproject-subtitle">Technologies</h5>
                    <div className="singleproject-image--container">{technologies.map(m => <img src={m} alt="" width="100" />)}</div>
                </div>
            </section>
            <div className="singleproject-button--container">
                <button><a href={githubLink}>GitHub</a></button>
                <button><Link to="/projects">back to projects</Link></button>
            </div>
        </article>
    )
}