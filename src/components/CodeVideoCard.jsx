import React from "react";
import { useSelector } from "react-redux";
import CodeVideo from '../assets/images/CodeVideo.png'
import '../styles/CodeVideoCard.scss'

const CodeVideoCard = () => {
    const currentLanguage = useSelector(state => state.language);
    return (
        <div className="CodeVideo-card-container">
            <div className="text-card-CodeVideo">
                <a href="https://code-video-react.vercel.app/">CodeVideo</a>
                <p>{currentLanguage.translations[currentLanguage.language].CodeVideo}</p>
            </div>
            <div className="image-container-CodeVideo">
                <a href="https://code-video-react.vercel.app/">
                    <img src={CodeVideo} alt="code-video-image" />
                </a>
            </div>

        </div>
    )
};


export {CodeVideoCard};