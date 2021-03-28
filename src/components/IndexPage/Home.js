import React, { useEffect, useState } from 'react';
import useHorizontal from '@oberon-amsterdam/horizontal/hook';
import Hero from './Hero';
import SlideOneIntro from './SlideOneIntro';
import PageLoader from '../PageLoader';

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

  // if (usePageLoader.isAnimation) {
  //   return (
  //     <PageLoader />
  //   )
  // }
  // else {
    return (
      <>
        <PageLoader />
        <Hero />
        <SlideOneIntro text="Welcome to my personal website."/>
        <SlideOneIntro text="Thanks for stopping by"/>
      </>
    )
  }
//}


{/**class BodyContent extends React.Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    if (!this.state.isLoading) {
      this.state.isLoading = !this.state.isLoading;
      return (
        <PageLoader />
      )
    }
    else {
      return (
        <>
          <Hero />
          <SlideOneIntro />
          <SlideOneIntro />
          <SlideOneIntro />
        </>
      )
    }
  }
}
*/}

const Home = () => {
  const [container, setContainer] = useState();

  useHorizontal({ container: container });
  return (
    <div className="container" ref={ref => { setContainer(ref); }}>
      <BodyContent />
    </div>
  );
};

export default Home;