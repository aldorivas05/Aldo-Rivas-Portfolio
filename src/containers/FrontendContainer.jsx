import React from "react";
import '../styles/FrontEndContainer.scss'
// import { EmojiLogo } from "../components/EmojiLogo";
import { ReadmeSection } from "../components/ReadmeSection";
import { TechSkills } from "../components/TechSkills";


const FrontEndContainer = () => {
    return (
        <div className="frontend-container">
            <TechSkills />
            <ReadmeSection />
            
        </div>
    );
};


export { FrontEndContainer };