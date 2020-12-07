import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#DAE2E4',
  fontColor: '#000',
};

export const darkTheme = {
  body: '#121212',
  fontColor: '#fff',
};

export const GlobalStyles = createGlobalStyle`
    html {
      height: 100%
    }
    body {
        background-color: ${(props) => props.theme.body};
        margin: 0;
        font-family: "Rubik", sans-serif;
        height: 100vh;
    }
`;
