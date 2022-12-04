import React from "react";
import Data from "../Data";

export default function Card() {

    const card = Data.map(y =>
        <div className="card--container">
            <img src={y.image} alt="" width="100" className="card--mainImg" />
            <h3>{y.title}</h3>
            <h4>{y.hashtags.map(x => <span>{` #${x}`}</span>)}</h4>
            <img
                src={y.technologies[1]}
                width="20"
                className="card-technologies--container"
            />
            <div className="card-button--container">
                <button className="card--button"><a href={y.githubLink}>GitHub</a></button>
                <button className="card--button">Open</button>
            </div>
        </div>
    )

    return (
        <div className="projects--container">
            {card}
        </div>
    )
}