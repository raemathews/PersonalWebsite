import React from 'react';
import { StyledArtworkPage } from './ArtworkPage.styled.js';
import p1 from '../../images/Portrait1.png';
import p2 from '../../images/Portrait2.png';
import p3 from '../../images/Portrait3.png';
import p4 from '../../images/Portrait4.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const handleDragStart = (e) => e.preventDefault();

const items = [
    <img className="carousel-img" src={p1} onDragStart={handleDragStart} />,
    <img className="carousel-img" src={p2} onDragStart={handleDragStart} />,
    <img className="carousel-img" src={p3} onDragStart={handleDragStart} />,
    <img className="carousel-img" src={p4} onDragStart={handleDragStart} />
];


export const Portraits = () => {

    return (
        <>
            <StyledArtworkPage>
                <div className="page-title">
                    <h2 className="title-contents">Portrait Photography</h2>
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
