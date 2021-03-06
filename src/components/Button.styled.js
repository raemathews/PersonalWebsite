import { isStyledComponent } from "styled-components";
import styled from 'styled-components';

export const StyledButton = styled.nav`

    color: white !important;
    font-size: 1.5rem;
    padding-top: 2vh;
    font-weight: bold;
    text-transform: uppercase;
    background: black;

      &:hover {
        box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
      }

`;