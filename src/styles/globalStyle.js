import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  body , html {    background-color: #101010; color:white; width:100vw;}
  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
a:link {
  color: white;
}
a:visited {
  color: white;
}
a:active {
  color: white;
}

`;