import React from 'react';
import EmojiImage from '../assets/aldo-logo-sticker.png'
import '../styles/EmojiLogo.scss'


const EmojiLogo = () => {
    return (
        <div className='emoji-logo-container'>
            <img src={EmojiImage} alt="aldo logo sticker" />
            <h3>Aldo Rivas</h3>
            <p>FrontEnd Developer</p>
        </div>
    )
};



export { EmojiLogo };