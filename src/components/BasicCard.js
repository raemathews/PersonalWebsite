import React from 'react';
import { StyledCard } from './BasicCard.styled';
import { AnimationWrapper } from 'react-hover-animation';
import portrait from '../images/portrait.jpg';
import lorikeet from '../images/lorikeet.jpg'
import cezanne from '../images/cezanne.jpg';
import hackbeanpot from '../images/HackBeanpot.png';
import kyle from '../images/Kyle.png';
import bird from '../images/birdedit.JPG';


export function BasicCard({ imgSource, title, subtitle, medium, dimensions }) {
    return (
        <AnimationWrapper animationConfig="gentle">
            <StyledCard>
                {imgSource == "lorikeet" ?
                    <img className='cardImage' src={lorikeet} /> : null
                }
                {imgSource == "portrait" ?
                    <img className='cardImage' src={portrait} /> : null
                }
                {imgSource == "cezanne" ?
                    <img className='cardImage' src={cezanne} /> : null
                }
                {imgSource == "HackBeanpot" ?
                    <img className='cardImage' src={hackbeanpot} /> : null
                }
                {imgSource == "kyle" ?
                    <img className='cardImage' src={kyle} /> : null
                }
                {imgSource == "bird" ?
                    <img className='cardImage' src={bird} /> : null
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
