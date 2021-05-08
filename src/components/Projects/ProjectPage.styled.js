import styled from 'styled-components';

export const StyledProjectPage = styled.nav`

    align-content: left;
    justify-content: center;
    margin-left: 10vw;
    position: absolute;
    z-index: 0;
    top: 16vh;
    margin-right: 10vw;
    text-align: left !important;
    animation-name: fade;
    animation-duration: 1s;
    font-size: 15px;

    min-width: 80vw;


    @media (max-width: 1000px) {
        max-width: 700px;
        padding-left: 0px;
      }

      .page-title {
        font-size: 2rem;
        font-weight: bold;
      
      
        @media (max-width: 1000px) {
            transform: rotate(0deg);
            position: relative;
          }    
      }
      
      .title-contents {
        width: auto;
        z-index: 1;
        color: #ffb140;
    
      }

    .intro-container {
        color: black;
        background: #98d8fa;
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 15px;
        border-radius: 20px;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

        -webkit-columns: 315px 3;
        -moz-columns: 315px 3;
             columns: 315px 3;

        -webkit-column-gap: 2vw;
        -moz-column-gap: 2vw;
             column-gap: 2vw;
    }

    .grid-container {

        margin-top: 20px;


        -webkit-columns: auto 400px;
        -moz-columns: auto 400px;
             columns: auto 400px;

        -webkit-column-gap: 2vw;
        -moz-column-gap: 2vw;
             column-gap: 2vw;

    }

    img {
        max-width: 400px;
        max-height: 400px;
    }


    .options {
        animation-name: fade;
        animation-duration: .9s;
    }

    .tools .tag {
        background-color: white;
        padding: 7px;
        border-radius: 10px;
        display: inline;
        margin-right: 7px;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
        margin-top: 0;

    }

    .tag:hover {
        background-color: #6f86ab;
        transition: background-color 1s;
        color: white;
        transition: color 1s;
    }

    ul {
        list-style-type: none;
        padding-top: 0;
        font-size: 12px !important;
    }

    .titletag {
        margin-left: 10px;
        font-weight: bold;
        padding-top: 10px;
        display: inline;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .tags {
        margin-left: 20px;
        margin-top: -10px;
    }

    .tools {
        background-color: white;
        border-radius: 15px;
        display: inline-block;
        padding: 15px;
        margin-top: 10px;
    }

`;


