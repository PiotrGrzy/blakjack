import { createGlobalStyle } from 'styled-components';
import bg from 'assets/casino-bg-large.jpg';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;  
    height:100%;

    @media only screen and (max-width: 600px) {
      font-size: 50%;
    }
  }
  
  body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    background-image: url(${bg})
  }
`;
