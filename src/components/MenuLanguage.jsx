import React from 'react';
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../actions/translationAction';
import '../styles/MenuLanguage.scss';


const MenuLanguage =({ toggle, setToggle}) => {

    
    const dispatch = useDispatch();
    const translations = useSelector((state) => state.translations) || {}; // Objeto vacío por defecto
    const currentLanguage = useSelector(state => state.language); // Idioma predeterminado

    const toggleLanguage = () => {
        const newLanguage = currentLanguage.language === 'en' ? 'es' : 'en';
        dispatch(setLanguage(newLanguage));

        setToggle(!toggle);
    };
    
    const welcomeMessage = currentLanguage.translations[currentLanguage.language].welcome;
    console.log(welcomeMessage); // Esto mostrará "Welcome" o "Bienvenido" según el idioma actual

    console.log(translations)
    console.log(currentLanguage)


    return (
        <div className="menu-language-container">
            <ul>
                <li>
                    <span onClick={toggleLanguage}>{currentLanguage.translations[currentLanguage.language].english}</span>
                </li>
                <li>
                    <span onClick={toggleLanguage}>{currentLanguage.translations[currentLanguage.language].spanish}</span>
                </li>
            </ul>
        </div>
    )
};

// Agregar la validación de PropTypes
MenuLanguage.propTypes = {
    toggle: PropTypes.bool.isRequired,
    setToggle: PropTypes.func.isRequired,
};



export { MenuLanguage };