import React from "react";
import Card from "../components/Card";
import Data from "../Data";


export default function Projects() {
    const card = Data.map(y => <Card
        key={y.id}
        {...y}
    />)

    return (
        <div className="projects--container">
            {card}
        </div>
    )
}