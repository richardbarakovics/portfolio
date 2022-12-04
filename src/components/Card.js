import React from "react";

export default function Card(props) {
    return (
            <div className="card--container">
                <img src={props.image} alt="" width="100" className="card--mainImg" />
                <h3>{props.title}</h3>
                <h4>{props.hashtags.map(x => <span>{` #${x}`}</span>)}</h4>
                <img
                    src={props.technologies[1]}
                    width="20"
                    className="card-technologies--container"
                />
                <div className="card-button--container">
                    <button className="card--button"><a href={props.githubLink}>GitHub</a></button>
                    <button className="card--button">Open</button>
                </div>
            </div>
    )
}