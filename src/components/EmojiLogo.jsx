import React from 'react';
import EmojiImage from '../assets/aldo-logo-sticker.png'
import '../styles/EmojiLogo.scss'


const EmojiLogo = () => {
    return (
        <div className='emoji-logo-container'>
            <img src={EmojiImage} alt="aldo logo sticker" />
            <h2>Aldo Rivas</h2>
            <p>Frontend Developer</p>
        </div>
    )
};



export { EmojiLogo };