import { createGlobalStyle } from "styled-components";

export const Theme = {
    white: "#fffaff",
    pink: "#d8315b",
    blue1: "#3e92cc",
    blue2: "#0a2463"
}

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0; 
        padding: 0; 
        border: 0; 
    }

    *:focus {
        outline: none;
    }

    a, a:hover, a:visited, a:active {
        color: inherit;
    }

    html, body {
        background-color: #fffaff;
        font-family: 'Roboto', sans-serif;
        color: ${Theme.blue2};
        font-size: 16px;
        overflow-x: hidden;
        font-weight: 300;
        width: 100%;
        height: 100%;
    }

    main {
        height: 100%;
        width: 100%;
        margin: auto;
        overflow-x: hidden;
        min-height: 100vh;
    }

    button {
        width: 100%;
        max-width: 200px;
        height: 40px;
        border-radius: 10px;
        background-color: ${Theme.blue1};
        color: white;
        margin: 1rem 0;
        transition: 0.3s all;
        cursor: pointer;

        &:hover {
            border-radius: 5px;
            background-color: ${Theme.blue2};
        }
    }

    input {
        width: 100%;
        max-width: 300px;
        height: 30px;
        border-radius: 10px;
        border: 1px solid #0a246326;
        padding: 0 0.75rem;
    }
`;