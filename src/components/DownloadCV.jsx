import React            from "react";
import { useSelector } from "react-redux";
import { DownloadIcon } from "../assets/icons/DownloadIcon";
import ExamplePdf       from '../assets/plantillaFUNDEI.pdf'
// import enTranslations from '../translations/en.json'
// import esTranslations from '../translations/es.json'
import '../styles/DownloadCV.scss';


const DownloadCV = () => {
    // const translations = useSelector((state) => state.translations) || {}; // Objeto vacío por defecto
    const currentLanguage = useSelector(state => state.language); 

    return (
        <div className="download-CV-container">
            <a 
            className="download-button"
            href={ExamplePdf} // URL del archivo PDF
            download="0939494948484JEjemplo" // Nombre del archivo que se descargará
            target="_blank"
            rel="noreferrer"
            >
                <DownloadIcon />
                <p>{currentLanguage.translations[currentLanguage.language].download}</p>
            </a>
        </div>
    )
}

export {DownloadCV};