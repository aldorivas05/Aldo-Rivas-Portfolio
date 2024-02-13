import React from "react";
import '../styles/ProjectsContainer.scss'
import { ProjectCard } from "../components/ProjectCard";


const ProjectsContainer = () => {
    return (
        <div className="projects-section">
            <h3>Projects</h3>
            <div className="projects-container">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export { ProjectsContainer };