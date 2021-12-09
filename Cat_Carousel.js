import { useState } from "react";
import "./Catty_Carousel.css"
import {carousel} from "./Catty_Carousel.css"

let cellCount = 9;
let selectedIndex = 0;

const Cat_Carousel = () => {

    const rotateCarousel = (props) => {
        var angle = selectedIndex / cellCount * -360;
        carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
        }

    const prevButton = (e) => {
        e.preventDefault()
        selectedIndex--;
        rotateCarousel();
    };

    const nextButton = (e) => {
        e.preventDefault()
        selectedIndex++;
        rotateCarousel();
    }

    return(
        <div>
            <div className='scene'>
                <div className="carousel">
                    <div className="carousel__cell">1</div>
                    <div className="carousel__cell">2</div>
                    <div className="carousel__cell">3</div>
                    <div className="carousel__cell">4</div>
                    <div className="carousel__cell">5</div>
                    <div className="carousel__cell">6</div>
                    <div className="carousel__cell">7</div>
                    <div className="carousel__cell">8</div>
                    <div className="carousel__cell">9</div>
                </div>
            </div>
            <p className="btn">
                <button className="previous-button" onClick={prevButton}>Previous</button>
                <button className="next-button" onClick={nextButton}>Next</button>
            </p>
        </div>
    )
}

export default Cat_Carousel