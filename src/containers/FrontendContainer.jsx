import React from "react";
import '../styles/FrontEndContainer.scss'
import { EmojiLogo } from "../components/EmojiLogo";
import { ReadmeSection } from "../components/ReadmeSection";



const FrontEndContainer = () => {
    return (
        <div className="frontend-container">
            <EmojiLogo />
            <ReadmeSection />
        </div>
    );
};


export { FrontEndContainer };