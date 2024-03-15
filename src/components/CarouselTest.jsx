import React from "react";
import '../styles/CarouselTest.scss'


const CarouselTest = () =>{
    return (
        <div className="carouse-continer">
            <div className="carousel">
                <div className="slide red"></div>
                <div className="slide blue"></div>
            </div>
             <div className="review">
                Aquí va la reseña del carrusel.
            </div>
            <button className="prev-button"></button>
            <button className="next-button"></button>
        </div>
    )
};

export { CarouselTest };