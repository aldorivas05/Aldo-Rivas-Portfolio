import React from "react"
import { CloseIcons } from "../assets/icons/CloseIcon";
import { MinimizeIcon } from "../assets/icons/MinimizeIcon";
import { MiximizeIcon } from "../assets/icons/MiximizeIcon";
import '../styles/ReadmeSection.scss'


const ReadmeSection = () => {
    return (
        <div className="readme-continer">
            <div className="readme-header">
                <div className="icons-container">
                    <CloseIcons />
                    <MinimizeIcon />
                    <MiximizeIcon />
                </div>
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
                            <li>
                            <code>
                                9
                            </code>
                            <li>
                            <code>
                                10
                            </code>
                        </li>
                        </li>
                        </li>
                    </ol>
                </div>
                <div className="text-readme-container">
                    <pre>
                        <code>
                            <span># Getting Started with Create React App. 👨🏻‍💻</span>
                            <span>This project was bootstrapped with</span>
                            <span>[Create React App](https://github.com/facebook/create-react-app).</span>
                            <span>## Available Scripts</span>
                            <span>### `npm start`</span>
                            <span>Launches the test runner in the interactive watch mode.\</span>
                            <span>See the section about [running tests]</span>
                            <span>(https://facebook.github.io/create-react-app/docs/running-tests)</span>
                            <span>  </span>
                            <span>for more information.</span>
                            <span>### `npm run build`</span>
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    )
}

export { ReadmeSection };