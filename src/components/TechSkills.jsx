import React              from "react";
import { Css3Icon }       from "../assets/icons/Css3Icon";
import { TypescriptIcon } from "../assets/icons/TypescriptIcon";
import { ViteIcon }       from "../assets/icons/ViteIcon";
import { ReactIcon }      from "../assets/icons/ReactIcon";
import { TailwindIcon }   from "../assets/icons/TailwindIcon";
import { NodeIcon}        from "../assets/icons/NodeIcon";
import { SassIcon }       from "../assets/icons/SassIcon";
import { JavascriptIcon } from "../assets/icons/JavascriptIcon";
import { Html5Icon }      from "../assets/icons/Html5Icon";
import { GitIcon }        from "../assets/icons/GitIcon";
import { EmojiLogo }       from "./EmojiLogo";
import '../styles/TechSkills.scss' 




const TechSkills = () => {

    return (
        <div className="tech-skills-container">
            <div className="tech-skills-section">
                <div className="tech-skills-title">
                    <EmojiLogo />
                </div>
                <div className="tech-skills-icons-sections">
                    <div className="orbit-icon">
                        <GitIcon />
                    </div>
                    <div className="orbit-icon">
                        <Css3Icon />
                    </div>
                    <div className="orbit-icon">
                        <Html5Icon />
                    </div>
                    <div className="orbit-icon">
                        <SassIcon />
                    </div>
                    <div className="orbit-icon">
                        <TailwindIcon />
                    </div>
                    <div className="orbit-icon">
                        <JavascriptIcon />
                    </div>
                    <div className="orbit-icon">
                        <ReactIcon />
                    </div>
                    <div className="orbit-icon">
                        <ViteIcon />
                    </div>
                    <div className="orbit-icon">
                        <NodeIcon />
                    </div>
                    <div className="orbit-icon">
                        <TypescriptIcon />
                    </div>
                </div>
            </div>
        </div>
    )
};


export { TechSkills };