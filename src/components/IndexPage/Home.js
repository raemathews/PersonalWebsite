import React, { useEffect, useState } from 'react';
import useHorizontal from '@oberon-amsterdam/horizontal/hook';
import Hero from './Hero';
import SlideOneIntro from './SlideOneIntro';
import PageLoader from '../PageLoader';
import { StyledHome } from './Home.styled.js';
import {Controller, Scene} from "react-scrollmagic";
import gsap from 'react-gsap';

function useLoadingAnimation() {
  const [isAnimation, setIsAnimation] = useState(true);


  const handleAnimationSwitch = () => {

    if (isAnimation) {
      setIsAnimation(false);
    }
    else {
      setIsAnimation(true);
    }
  }

  return (
    { isAnimation, handleAnimationSwitch }
  );
}

function BodyContent() {

  const usePageLoader = useLoadingAnimation();

  useEffect(() => {
    { usePageLoader.handleAnimationSwitch() }
  }, [])

  return (
    <>
      <Hero id="horizontal-scroll"/>
      <SlideOneIntro text="Welcome to my personal website." />
      <SlideOneIntro text="Thanks for stopping by" />
    </>
  )
}




const Home = () => {
  const [container, setContainer] = useState();

  useHorizontal({ container: container });
  return (
    <div>
      <StyledHome>
        <div className="content">
          <div className="container" ref={ref => { setContainer(ref); }}>
            <BodyContent />
          </div>
        </div>

        <PageLoader className="loader" />

      </StyledHome>
    </div>
  );
};

export default Home;