import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.primaryDark};
  height: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  transform: translateX(-100%);
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(-100%)'};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
  }

  ul {
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryDark};
    padding: 0;
    padding-top: 20vh;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 3rem;
    }
  }

  li {
    width: 100%;
  }

  .drawerNavOption {
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }

    .drawerLiNavOption {
      font-weight: bold;
      color: ${({ theme }) => theme.primaryDark};
      text-decoration: none;
    }
  }
`;