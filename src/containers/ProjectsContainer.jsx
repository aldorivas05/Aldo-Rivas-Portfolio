import React from "react";
import { useSelector } from "react-redux";
import '../styles/ProjectsContainer.scss'
import { ProjectCard } from "../components/ProjectCard";

const ProjectsContainer = () => {
    const currentLanguage = useSelector(state => state.language);

    return (
        <div className="projects-section">
            <h3>{currentLanguage.translations[currentLanguage.language].projects}</h3>
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