import React           from "react";
import { useSelector } from "react-redux";
import ToDoAppImage      from '../assets/images/ToDoApp.png'
import '../styles/ToDoAppCard.scss';

const ToDoAppCard = () => {
    const currentLanguage = useSelector(state => state.language);

    return (
    <div className="ToDoApp-card-container">
        <div className="text-card-ToDoApp">
            <a href="https://to-do-app-one-rust.vercel.app/">ToDoApp </a>
            <p>{currentLanguage.translations[currentLanguage.language].ToDo}</p>
        </div>
        <div className="image-section-todo">
            <a href="https://to-do-app-one-rust.vercel.app/">
                <img src={ToDoAppImage} alt="ToDo App Image" />
            </a>
        </div>

    </div>
    )
};

export {ToDoAppCard};