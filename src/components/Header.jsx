import React from "react";
import { LanguageIcon } from "../assets/icons/LanguageIcon";
import '.././/styles/Header.scss';
import { useState } from "react";
import { MenuLanguage } from "./MenuLanguage";
import { DownloadCV } from "./DownloadCV";


const Header = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className="header-container">
            <nav>
                <div className="header-nav-bar" >
                    <DownloadCV />
                    <div
                    className="languaje-continer" 
                    onClick={handleToggle}
                    >
                        <LanguageIcon />
                    </div>
                </div>

                {toggle && <MenuLanguage toggle={toggle} setToggle={setToggle}/>}
            </nav>
        </div>
    )
}

export {Header};
