import React from "react";
import { EmailIcon } from "../assets/icons/EmailIcon";
import { GitHubIcon } from "../assets/icons/GitHubIcon";
import { LinkedingIcon } from "../assets/icons/LinkedingIcon"
import { XIcon } from "../assets/icons/XIcon";
import '../styles/Footer.scss'

const Footer = () => {
   return (
        <div className="footer-container">
            <div className="icon-section">
                <EmailIcon />
                <GitHubIcon />
                <LinkedingIcon />
                <XIcon />
            </div>
        </div>
   )

}


export { Footer };