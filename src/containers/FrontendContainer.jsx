import React             from "react";
import { ReadmeSection } from "../components/ReadmeSection";
import { TechSkills }    from "../components/TechSkills";
import '../styles/FrontEndContainer.scss'


const FrontEndContainer = () => {
    return (
        <div className="frontend-container">
            <TechSkills />
            <ReadmeSection />
            
        </div>
    );
};


export { FrontEndContainer };