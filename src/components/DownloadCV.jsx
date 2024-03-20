import React            from "react";
import { useSelector } from "react-redux";
import { DownloadIcon } from "../assets/icons/DownloadIcon";
import ALDO_RIVAS_en    from '../assets/ALDO_RIVAS_FRONTEND_DEVen.pdf';
import ALDO_RIVAS_es from '../assets/ALDO_RIVAS_FRONTEND_DEVes.pdf';
import '../styles/DownloadCV.scss';


const DownloadCV = () => {
    // const translations = useSelector((state) => state.translations) || {}; // Objeto vacío por defecto
    const currentLanguage = useSelector(state => state.language); 

    const pdfPath = currentLanguage.language === "en" ? ALDO_RIVAS_en : ALDO_RIVAS_es;
    const pdfName = currentLanguage.language === "en" ? "ALDO_RIVAS_en.pdf" : "ALDO_RIVAS_es.pdf";


    return (
        <button className="download-CV-container">
            <a 
            className="download-button"
            href={pdfPath} // URL del archivo PDF
            download={pdfName} // Nombre del archivo que se descargará
            target="_blank"
            rel="noreferrer"
            >
                <DownloadIcon />
                <p>{currentLanguage.translations[currentLanguage.language].download}</p>
            </a>
        </button>
    )
}

export {DownloadCV};