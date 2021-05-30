import React from 'react';
import { StyledArtworkPage } from './ArtworkPage.styled.js';
import portrait from '../../images/portrait.jpg';
import selfportrait from '../../images/selfportrait.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img alt="" className="carousel-img" src={portrait} onDragStart={handleDragStart} />,
    <img alt="" className="carousel-img" src={selfportrait} onDragStart={handleDragStart} />,
];

export const Portrait = () => {

    return (
        <>
            <StyledArtworkPage>
                <div className="page-title">
                    <h2 className="title-contents">Self Portrait Collage</h2>
                </div>
                <div className="tools">
                    <ul>
                        <li className="titletag">Materials: </li>
                        <span className="tags">
                            <li className="tag">Charcoal</li>
                            <li className="tag">Ink</li>
                            <li className="tag">A4</li>
                            <li className="tag">Glue</li>
                            <li className="tag">Bristol</li>
                        </span>
                    </ul>
                </div>
                <div className="intro-container">
                    <div className="introduction">
                        <p>This project was done as a study of texture, scale and proportion for a 2D
                        Fundamental art course at Northeastern. The entire piece is made up of one
                        charcoal mark, digitally reproduced hundreds of times at different sizes and
                        cut to fit the space.
                    </p>
                    </div>
                </div>
                <div className="grid-container">
                    <AliceCarousel
                        autoPlay
                        autoPlayControls
                        autoPlayStrategy="none"
                        autoPlayInterval={2500}
                        animationDuration={1000}
                        animationType="slide"
                        infinite
                        mouseTracking
                        items={items} />

                </div>
            </StyledArtworkPage>
        </>
    )
}
