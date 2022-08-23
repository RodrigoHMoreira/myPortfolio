import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle` 
    :root{
        --background: linear-gradient(to left top, #000000, #030303, #060606, #080808, #0b0b0b);
        --background-menu:#;
        --color: #ffffff;
        --border: #9C90EA;
        --header-footer:#121212;
        --card: #1D1D1D;
        --button: #7f6eed;
        --hover: #564b99;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;    
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background: var(--background);
        width: 100%;
        height: 100%;
    }

`;

export default GlobalStyled;
