import React from "react";
import { Link, useParams } from "react-router-dom";
import Data from "../Data";

export default function SingleProject() {
    const { projectId } = useParams();
    // az alábbiban tripla egyenloseget legyereltem duplara es megoldotta???
    const projects = Data.find((projects) => projects.id == projectId);
    const {title, image, githubLink, technologies, hashtags} = projects;
    return (
        <article>
            <img src={image} alt="" width="300" />
            <h1>{title}</h1>
            <h5>Problem solved</h5>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            <h3>{hashtags.map(x=>` #${x}`)}</h3>
            <h5>Technologies</h5>
            <div>{technologies.map(m=><img src={m} alt="" width="100"/>)}</div>
            <button><a href={githubLink}>GitHub</a></button>
            <button><Link to="/projects">back to projects</Link></button>
        </article>
    )
}