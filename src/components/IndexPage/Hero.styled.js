import styled from 'styled-components';

export const StyledHero = styled.nav`

    p {
        margin-left: 3vw;
        margin-right: 3vw;
        position: absolute;
        top: 45%;
        width: 100%;
        animation-name: fade;
        animation-duration: 6s;
    }

    .contact-button {
        text-decoration: none !important;
    }

    .contactMe {
        text-decoration: none;
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
      
`;
