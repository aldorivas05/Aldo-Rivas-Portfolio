import React from "react";
import { useSelector } from "react-redux";
import '../styles/AskAwayCard.scss'

const AskAwayCard = () => {
    const currentLanguage = useSelector(state => state.language);
    return (
        <div className="askaway-card-container">
            <div className="text-card-askaway">
                <a href="https://app.askaway.io/">App.AksAway.io</a>
                <p>{currentLanguage.translations[currentLanguage.language].askaway}</p>
            </div>
            <div className="image-container-askaway">
                <a href="https://app.askaway.io/">
                    <img src="https://i.ytimg.com/vi/Jc2eE-TbKfA/maxresdefault.jpg" alt=" askaway image"/>
                </a>
            </div>
        </div>
    )
};


export {AskAwayCard};