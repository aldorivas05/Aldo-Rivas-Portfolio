import React from "react";
import { useSelector } from "react-redux";
import '../styles/ProjectsContainer.scss'
import { CodeVideoCard } from "../components/CodeVideoCard";
import { EcommerceCard } from "../components/EcommerceReact";
import { ToDoAppCard } from "../components/ToDoAppCard";

const ProjectsContainer = () => {
    const currentLanguage = useSelector(state => state.language);

    return (
        <div className="projects-section">
            <h3>{currentLanguage.translations[currentLanguage.language].projects}</h3>
            <div className="projects-container">
                <div className="projects-card-section">
                    <EcommerceCard />
                    <CodeVideoCard />
                </div>
                <div className="projects-card-section ToDoCard">
                    <ToDoAppCard />
                </div>
            </div>
        </div>
    )
}

export { ProjectsContainer };