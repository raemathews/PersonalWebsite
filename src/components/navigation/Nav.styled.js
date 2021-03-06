import styled from 'styled-components';

export const StyledNav = styled.nav`

background-color: #0C6697;
z-index: 1;
height: 10%;
min-width: 100%;
position: absolute;


  ul {
    float: right;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    padding-top: 0;
    list-style: none;
    padding-right: 20vw;
  }

  button {
    text-align: center;
    background: none;
    border: 3px solid #ffb140;
    font-size: 1.5rem;
    border-radius: 30px;
    margin-right: 2vw;
    width: 11vw;
    height: 6vh;
    transition-duration: .35s;
    padding-top: 0;
    top: 3px;
    position: absolute;
  }

  .contactMe {
    color: #ffb140;
    text-decoration: none;
    font-size: 1.5rem;
  }

  button:hover {
    background: #0b537a;
    border-radius: 30px;
    border: 3px solid white;
    cursor: pointer;
  }
  
  .navOption::before {
    content: '';
    display: block;
    height: 1vh;
    top: 0;
    background-color: white;
  
    position: absolute;
    width: 0%;
  
    transition: all ease-in-out 150ms;
  
  }
  
  .navOption:hover::before {
    width: 100%;
  }
  
  ::after {
    content: '';
    display: table;
    clear: both;
  
  }
  
  li {
    display: inline-block;
    margin-right: 2vw;
    padding-top: 5vh;
    padding-bottom: 3vh;
  
    position: relative;
  }
  
  .navOption {
    text-decoration: none;
    font-size: 1.5rem;
    color: #e6e9ed !important;
    float: right;
  }

`