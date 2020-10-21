import styled from 'styled-components';
import { FaRegMoon, FaMoon } from 'react-icons/fa';

export const Container = styled.header`
  width: 100%;
  background: var(--element);
  box-shadow: var(--shadow);
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;

  max-width: 144rem;
  padding: 4rem 2rem;
  margin: 0 auto;

  .logo {
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 800;
  }
`;

export const ToggleThemeButton = styled.button`
  background: none;

  display: flex;
  align-items: center;
  outline: none;

  cursor: pointer;

  span {
    font-size: 1.4rem;
    font-weight: 600;
    margin-left: 1rem;

    text-transform: capitalize;
  }
`;

export const MoonLightIcon = styled(FaRegMoon)``;

export const MoonDarkIcon = styled(FaMoon)``;
