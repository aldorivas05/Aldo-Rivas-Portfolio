import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../actions/translationAction';
import '../styles/MenuLanguage.scss';


const MenuLanguage =() => {

    
    const dispatch = useDispatch();
    const translations = useSelector((state) => state.translations) || {}; // Objeto vacío por defecto
    const currentLanguage = useSelector(state => state.language); // Idioma predeterminado

    const toggleLanguage = () => {
        const newLanguage = currentLanguage.language === 'en' ? 'es' : 'en';
        dispatch(setLanguage(newLanguage));
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


export { MenuLanguage };