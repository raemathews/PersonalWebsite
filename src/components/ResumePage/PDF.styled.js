import styled from 'styled-components';

export const StyledPDF = styled.nav`



  img {
    position: absolute;
    top: 16vh;
    z-index: 2;
    left: 25vw;
  }

  .pdf {
    z-index: 1;
  }

  .content {
    animation-name: hide-fade;
    animation-duration: 6s; 
  }

  a {
    position: fixed;
    bottom: 8vh;
    z-index: 0;
    right: 6vw;
    font-weight: bold;
    font-size: 20px;
    background-color: #ffb140;
    padding: 13px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
    color: white !important;
    text-decoration: none !important;
  }

  a:hover {
    background-color: #ff9800 !important;
    transition: background .5s ease-in-out;
    padding: 18px;
    transition: padding .5s ease-in-out;
  }

`;
