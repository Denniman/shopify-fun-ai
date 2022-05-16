import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        line-height: 1.5;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }


`;

export default GlobalStyle;
