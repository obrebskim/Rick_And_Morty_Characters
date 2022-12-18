import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  :root {
    --blue: #12B1CA;
    --green: #24DB93;
    --shadow: 0 0 12px rgba(0, 0, 0, .4);
    --highlight: 0 0 12px  #12B1CA;
    --green_dark: #181C25;
    --red_dark: #8d3623;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: linear-gradient(180deg, rgba(38,44,58,1) 30%, rgba(2,136,104,1) 100%);
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
