import React from "react"
import { useSelector } from "react-redux";
import { CloseIcons } from "../assets/icons/CloseIcon";
import { MinimizeIcon } from "../assets/icons/MinimizeIcon";
import { MiximizeIcon } from "../assets/icons/MiximizeIcon";
import '../styles/ReadmeSection.scss'



const ReadmeSection = () => {
    const currentLanguage = useSelector(state => state.language); 

    return (
        <div className="readme-continer">
            <div className="readme-header">
                <div className="icons-container">
                    <CloseIcons />
                    <MinimizeIcon />
                    <MiximizeIcon />
                </div>
                {/* <div className="tap-readme">
                    <TabReadme />
                </div> */}
            </div>
            <div className="readme-code-section">
                <div className="number-list-container">
                    <ol className="number-list">
                        <li>
                            <code>
                                1
                            </code>
                        </li>
                        <li>
                            <code>
                                2
                            </code>
                        </li>
                        <li>
                            <code>
                                3
                            </code>
                        </li>
                        <li>
                            <code>
                                4
                            </code>
                        </li>
                        <li>
                            <code>
                                5
                            </code>
                        </li>
                        <li>
                            <code>
                                6
                            </code>
                        </li>
                        <li>
                            <code>
                                7
                            </code>
                        </li>
                        <li>
                            <code>
                                8
                            </code>
                        </li>
                        <li>
                            <code>
                                9
                            </code>
                        </li>
                        <li>
                            <code>
                                10
                            </code>
                        </li>
                        <li>
                            <code>
                                11
                            </code>
                        </li>
                        <li>
                            <code>
                                12
                            </code>
                        </li>
                        <li>
                            <code>
                                13
                            </code>
                        </li>
                        <li>
                            <code>
                                14
                            </code>
                        </li>
                        <li>
                            <code>
                                15
                            </code>
                        </li>
                        <li className="li-hidden">
                            <code>
                                16
                            </code>
                        </li>
                        <li className="li-hidden">
                            <code>
                                17
                            </code>
                        </li>
                        <li className="li-hidden">
                            <code>
                                18
                            </code>
                        </li>
                        <li className="li-hidden">
                            <code>
                                19
                            </code>
                        </li>
                        <li className="li-hidden">
                            <code>
                                20
                            </code>
                        </li>
                        
                    </ol>
                </div>
                <div className="text-readme-container">
                    <pre>
                        <code>
                            <span className="line1"># Aldo Rivas 👨🏻‍💻👨🏻‍🔧</span>
                            <span> </span>
                            <span className="line2">{currentLanguage.translations[currentLanguage.language].iamAldo}</span>
                            <span className="line3"> </span>
                            <span className="line4">{currentLanguage.translations[currentLanguage.language].technologies}</span>
                            <span> </span>
                            <span className="line5">{currentLanguage.translations[currentLanguage.language].programming}</span>
                            <span className="line6">{currentLanguage.translations[currentLanguage.language].frameworks}</span>
                            <span className="line7">{currentLanguage.translations[currentLanguage.language].others}</span>
                            <span className="line8"> </span>
                            <span className="line9"><span className="line9-1">{currentLanguage.translations[currentLanguage.language].thanks}</span>{currentLanguage.translations[currentLanguage.language].thanks2}</span>
                            <span className="line10"></span>
                            <span className="line11"></span>
                            <span className="line12"></span>
                            <span className="line13"></span>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}

export { ReadmeSection };