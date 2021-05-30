import React from 'react';
import { StyledArtworkPage } from './ArtworkPage.styled.js';
import parrot from '../../images/parrot.jpg';
import parrotfeet from '../../images/parrotfeet.jpg';
import parrothead from '../../images/parrothead.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const handleDragStart = (e) => e.preventDefault();

const items = [
    <img alt="" className="carousel-img" src={parrot} onDragStart={handleDragStart} />,
    <img alt="" className="carousel-img" src={parrotfeet} onDragStart={handleDragStart} />,
    <img alt="" className="carousel-img" src={parrothead} onDragStart={handleDragStart} />,
];


export const Lorikeet = () => {

    return (
        <>
            <StyledArtworkPage>
                <div className="page-title">
                    <h2 className="title-contents">Rainbow Lorikeet Sketch</h2>
                </div>
                <div className="tools">
                    <ul>
                        <li className="titletag">Materials: </li>
                        <span className="tags">
                            <li className="tag">Colored Pencil</li>
                            <li className="tag">Graphite</li>
                            <li className="tag">Bristol</li>
                        </span>
                    </ul>
                </div>
                <div className="intro-container">
                    <div className="introduction">
                        <p>This project was done for a 2-D Art Fundamentals course at Northeastern during my
                        first year of studies. I spent approximately 30 hours on creating the 18x24 inch
                        piece. This was also the first time I had experimented with using
                        colored pencil for an art project. The original photographer of the reference image
                        is unknown.
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
