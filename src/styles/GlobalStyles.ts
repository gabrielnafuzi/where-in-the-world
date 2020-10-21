import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    ${props => {
      const theme = props.theme;

      let append = '';

      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });

      return append;
    }}

    --shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);

    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  input,
  button {
    border: 0;
    background: none;
    font-family: 'Nunito', sans-serif;
    color: var(--text-color);

    transition: color 0.2s ease-in-out;
  }

  html {
    min-height: 100%;
    background: var(--background);

    transition: background 0.2s ease-in-out;
  }

  input {
    color: var(--input-text);
  }

  ul {
    list-style: none;
  }
`;
