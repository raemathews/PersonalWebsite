import styled from 'styled-components';

export const StyledPDF = styled.nav`

  img {
    position: absolute;
    top: 16vh;
    z-index: 2;
    left: 25vw;
    animation-name: hide-fade;
    animation-duration: 6s;
  }

  .pdf {
    animation-name: disappear;
    animation-duration: 6s;
    z-index: 1;

  }


`;
