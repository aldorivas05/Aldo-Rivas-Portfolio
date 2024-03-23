import React           from "react";
import { useSelector } from "react-redux";
import ScobyImage      from '../assets/images/ScobyImage.png'
import '../styles/ScobySocialCard.scss';

const ScobySocialCard = () => {
    const currentLanguage = useSelector(state => state.language);

    return (
    <div className="scoby-card-container">
        <div className="text-card-scoby">
            <a href="https://www.linkedin.com/company/scoby/about/">Scoby Social</a>
            <p>{currentLanguage.translations[currentLanguage.language].scoby}</p>
        </div>
        <div className="image-section-scoby">
            <a href="https://www.linkedin.com/company/scoby/about/">
                <img src={ScobyImage} alt=" Scoby Image" />
            </a>
        </div>

    </div>
    )
};

export {ScobySocialCard};