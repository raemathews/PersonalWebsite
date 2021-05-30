import React from 'react';
import { StyledArtworkPage } from './ArtworkPage.styled.js';
import parrot from '../../images/parrot.jpg';
import parrotfeet from '../../images/parrotfeet.jpg';
import parrothead from '../../images/parrothead.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img className="carousel-img" src={parrot} onDragStart={handleDragStart} />,
    <img className="carousel-img" src={parrotfeet} onDragStart={handleDragStart} />,
    <img className="carousel-img" src={parrothead} onDragStart={handleDragStart} />,
];

export const Cezanne = () => {

    return (
        <>
            <StyledArtworkPage>
                <div className="page-title">
                    <h2 className="title-contents">Still Life with Skull Appropriation</h2>
                </div>
                <div className="tools">
                    <ul>
                        <li className="titletag">Materials: </li>
                        <span className="tags">
                            <li className="tag">Masking Tape</li>
                            <li className="tag">Vellum</li>
                        </span>
                    </ul>
                </div>
                <div className="intro-container">
                    <div className="introduction">
                        <p>Still Life with Skull is an 1898 oil on canvas piece by the French 
                            Post-Impressionist painter, Paul Cezanne. My recreation of this piece 
                            is made from nothing but masking tape of varous colors, ripped and cut to 
                            mimic the forms present in the original. 
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
