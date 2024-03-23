import React           from "react";
import { useSelector } from "react-redux";
import EcommerceImage      from '../assets/images/Ecommerce-React.png'
import '../styles/EcommerceCard.scss';

const EcommerceCard = () => {
    const currentLanguage = useSelector(state => state.language);

    return (
    <div className="Ecommerce-card-container">
        <div className="text-card-Ecommerce">
            <a href="https://aldorivas05.github.io/E-Commerce-React-Shop/">Ecommerce</a>
            <p>{currentLanguage.translations[currentLanguage.language].Ecommerce}</p>
        </div>
        <div className="image-section-ecommerce">
            <a href="https://aldorivas05.github.io/E-Commerce-React-Shop/">
                <img src={EcommerceImage} alt="Ecommerce React Shop" />
            </a>
        </div>

    </div>
    )
};

export {EcommerceCard};