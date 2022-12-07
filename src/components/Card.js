import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <div className="card--container">
            <img src={props.image} alt="" width="100" className="card--mainImg" />
            <h3>{props.title}</h3>
            <h4>{props.hashtags.map(x => <span>{` #${x}`}</span>)}</h4>
            <div className="card-technologies--container">{props.technologies.map(c =>
                <img
                    src={c}
                    width="20"
                    height="20"
                    className="card-technologies"
                    alt=""
                />
            )}</div>
            <div className="card-button--container">
                <button className="card--button"><a href={props.githubLink}>GitHub</a></button>
                <button className="card--button"><Link to={`/projects/${props.id}`}>Open</Link></button>
            </div>
        </div>
    )
}