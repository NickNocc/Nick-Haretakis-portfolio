import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

function Project() {
    return (
        <div className="flex-row">
            {projectList.map((image, i) => (
                <img
                    src={toBeRequired(`../../assets/small/projects/${i}.jpg`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    key={image.name}
                 />
            ))}
        </div>
    )
}

export default Project;