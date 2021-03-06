import React from 'react';
import { StyledLoader } from './Loader.styled';
import Lottie from 'react-lottie';
import loadingAnimation from '../images/LoadAnimation.json';

function PageLoader() {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: loadingAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <StyledLoader>
            <div className="container" style={{ width: '100vw' }} >

                <Lottie
                    options={defaultOptions}
                    height={200}
                    width={200}
                />
            </div>
        </StyledLoader>
    );
}

export default PageLoader;