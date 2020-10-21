import React from 'react';

import { Link } from 'react-router-dom';
import { ThemeName } from '../../styles/theme';
import {
  Container,
  NavBar,
  ToggleThemeButton,
  MoonLightIcon,
  MoonDarkIcon,
} from './styles';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');

    window.localStorage.setItem(
      'themeName',
      themeName === 'light' ? 'dark' : 'light'
    );
  }

 

  return (
    <Container>
      <NavBar>
        <Link to="/" className="logo">
          Where in the world?
        </Link>
        <ToggleThemeButton onClick={toggleTheme}>
          {themeName === 'light' ? <MoonLightIcon /> : <MoonDarkIcon />}
          <span>{themeName === 'light' ? 'Dark' : 'Light'} Mode</span>
        </ToggleThemeButton>
      </NavBar>
    </Container>
  );
};

export default Header;
