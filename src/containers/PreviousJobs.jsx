import React from "react";
import { useSelector } from "react-redux";
import '../styles/PreviousJobs.scss'
import { AskAwayCard } from "../components/AskAwayCard";
import { ScobySocialCard } from "../components/ScobySocialCard";

const PreviousJobs = () => {
    const currentLanguage = useSelector(state => state.language);

    return (
        <div className="previous-jobs-container">
            <h3>{currentLanguage.translations[currentLanguage.language].previousJobs}</h3>
            <div className="title-section">
                <div className="cards-section">
                    <AskAwayCard />
                    <ScobySocialCard />
                </div>    
            </div>    
        </div>
    )
};


export {PreviousJobs};