import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { ThemeName, themes } from './styles/theme';

import Home from './pages/Home';
import Details from './pages/Details';
import Header from './components/Header';

import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const [themeName, setThemeName] = React.useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Header themeName={themeName} setThemeName={setThemeName} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:country" element={<Details />} />
          <Route />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
