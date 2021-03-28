import styled from 'styled-components';

export const StyledArt = styled.nav`

    align-content: center;
    justify-content: center;
    grid-gap: 1vw;
    padding-left: 10vw;
    position: absolute;
    z-index: 0;
    animation-name: fade-delay;
    animation-duration: 6s;
    top: 16vh;

    min-width: 80vw;


    @media (max-width: 1000px) {
        max-width: 700px;
        padding-left: 0px;
      }

    .grid-container {

        -webkit-columns: auto 315px;
        -moz-columns: auto 315px;
             columns: auto 315px;

        -webkit-column-gap: 1vw;
        -moz-column-gap: 1vw;
             column-gap: 1vw;

    }

    .art-card {
        padding-left: 2px;
        padding-right: 2px;
        paddint-bottom: 2vh;
    }

    .page-title {
        font-size: 2rem;
        font-weight: bold;
        transform: rotate(-90deg);

        @media (max-width: 1000px) {
            transform: rotate(0deg);
            position: relative;
          }    
    }

    .title-contents {
        top: 0;
        width: 95px;
        height: 100%;
        z-index: 1;
        color: #ffb140;
        position: absolute;
        left: 0;
        background-color: #03476b;

        @media (max-width: 1000px) {
            display: none;
          }
    }

    .tab-labels {
          margin-top: 2vh;
          background-color: #e6e9ed;
          color: black;
    }


    [class^="PrivateTabIndicator"] {
        background-color: #ffb140 !important;

    }

    .MuiTabs-root {
        border-radius: 30px;
        font-weight: bold;
    }

    .MuiTab-wrapper {
        color: #0C6697;
        font-weight: bold;
        font-size: 1rem;
    }

    .MuiTabs-flexContainer {
        color: black;
    }

    .options {
        animation-name: fade;
        animation-duration: .9s;
    }
`;


