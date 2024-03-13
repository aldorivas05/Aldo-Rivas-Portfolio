import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import '../../styles/EmailIcon.scss'

const EmailIcon = () => {
    const currentLanguage = useSelector(state => state.language);

    const [copiedText, setCopiedText] = useState(`${currentLanguage.translations[currentLanguage.language].copy}`); // Initial state

    const [showPopover, setShowPopover] = useState(false);

    const handleHover = () => {
        setShowPopover(true);
    };

    const handleMouseLeave = () => {
        setShowPopover(false);
    };
    const handleIconContainerClick = () => {
        setShowPopover(!showPopover); // Cambia el estado al hacer clic
    };

    
    const textToCopy = "aldorivasdev@gmail.com"; 

    const handleCopyClick = async () => {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopiedText(`${currentLanguage.translations[currentLanguage.language].copied}`); // Update state to reflect copied status
      } catch (error) {
        console.error("Error al copiar el texto:", error);
      } finally {
        setTimeout(() => setCopiedText(`${currentLanguage.translations[currentLanguage.language].copy}`), 2000); // Adjust timeout as needed
      }
    };
  
    
    return (
        <div className="email-icon-container">
            <div 
            className="icon-container" 
            onMouseEnter={handleHover} 
            onMouseLeave={handleMouseLeave} 
            onClick={handleIconContainerClick}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="icon icon-tabler icon-tabler-mail" 
                    width="44" height="44" viewBox="0 0 24 24" 
                    strokeWidth="1.5" stroke="currentColor" 
                    fill="none" strokeLinecap="round" 
                    strokeLinejoin="round"
                    >
                    <path stroke="none" 
                    d="M0 0h24v24H0z" 
                    fill="none"/>
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                </svg>
            </div>
            {showPopover && (
                
                <div
                onClick={handleCopyClick} 
                className="popover-content" 
                onMouseEnter={handleHover} 
                onMouseLeave={handleMouseLeave} 
                >
                    <div className="popover-body">
                        <p>{copiedText}</p>
                    </div>
                  
                </div>
            )}
        </div>
    )
};


export { EmailIcon };