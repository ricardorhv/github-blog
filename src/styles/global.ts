import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme['base-background']};
    color: ${props => props.theme["base-text"]};
    line-height: 1.6;
  }

  body, textarea, button, input {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
  }
  
  a {
    text-decoration: none;
  }

  input:focus {
    outline: 1px solid ${props => props.theme.blue};
  }
`