import styled from 'styled-components';
import img from '../images/GitHub.svg';

export const StyledFloatingButton = styled.nav`

  a {
    position: fixed;
    bottom: 8vh;
    z-index: 0;
    right: 6vw;
    text-decoration: none;
    background-color: #ffb140;
    padding: 13px;
    border-radius: 10px;
    color: white !important;
  }

 

  .a:hover {
    transition: width 1s;
    width: 0;
  }

`;
