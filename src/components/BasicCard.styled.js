import styled from 'styled-components';

export const StyledCard = styled.nav`

    background: #0E73AA;
    width: 270px;
    min-height: 300px;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 3vh;
    border-radius: 20px;
    box-shadow: 3px 3px 10px #094D71;
    color: white;
    display: inline-block;
    margin-bottom: 2vh;

    text-align: left;
    padding-left: 2vw;
    padding-top: 3vh;
    align-items: center;



    &:hover {
        transition: height 10px;
        background: #0E73AA;
        box-shadow: 3px 3px 10px #42B3F0;
    }

    hr {

        background-color: white;
        border: 2px solid white;
        border-radius: 10px 0px 0px 10px;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            display: none;
          }
    }

    .title {
        font-size: 2rem;        

    }

    .subtitle {
        font-weight: lighter; 

    }

    .dimensions {
        font-style: italic;

    }


    .cardImage {
        max-height: 150px;
        max-width: 250px;
        border-radius: 15px;

        position: relative;

    }


`;