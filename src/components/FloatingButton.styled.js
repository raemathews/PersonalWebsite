import styled from 'styled-components';
import img from '../images/GitHub.svg';

export const StyledFloatingButton = styled.nav`

  .button {
    position: fixed;
    bottom: 8vh;
    z-index: 0;
    right: 6vw;
    text-decoration: none;
    background-color: #ffb140;
    padding: 13px;
    border-radius: 10px;
    color: white !important;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
  }

  .button:hover {
    background-color: #ff9800 !important;
    transition: background .5s ease-out;
    animation: shake .6s;
    animation-iteration-count: infinite;
  }

`;
