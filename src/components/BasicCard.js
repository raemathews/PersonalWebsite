import React from 'react';
import { StyledCard } from './BasicCard.styled';
import { AnimationWrapper } from 'react-hover-animation';
import portrait from '../images/portrait.jpg';
import lorikeet from '../images/lorikeet.jpg'
import cezanne from '../images/cezannecrop.jpg';
import hackbeanpot from '../images/HBPFigmaCropped.png';
import kyle from '../images/KyleCropped.png';
import bird from '../images/birdedit.JPG';


export function BasicCard({ imgSource, title, subtitle, medium, dimensions }) {
    return (
        <AnimationWrapper animationConfig="gentle">
            <StyledCard>
                {imgSource == "lorikeet" ?
                    <img alt="" className='cardImage' src={lorikeet} /> : null
                }
                {imgSource == "portrait" ?
                    <img alt="" className='cardImage' src={portrait} /> : null
                }
                {imgSource == "cezanne" ?
                    <img alt="" className='cardImage' src={cezanne} /> : null
                }
                {imgSource == "HackBeanpot" ?
                    <img alt="" className='cardImage' src={hackbeanpot} /> : null
                }
                {imgSource == "kyle" ?
                    <img alt="" className='cardImage' src={kyle} /> : null
                }
                {imgSource == "bird" ?
                    <img alt="" className='cardImage' src={bird} /> : null
                }
                <h1 className="title">{title}</h1>
                <hr />
                <br />
                <h5 className="subtitle">{subtitle}</h5>
                <p className="medium">{medium}</p>
                <p className="dimensions">{dimensions}</p>
            </StyledCard>
        </AnimationWrapper>
    )
}
