import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .navContact-print{
    display: none;
  }

  @media print {
    body {
    height: 100%;
    width: 100%;
    overflow: visible;
  }
  .navMenu-print{
    display: none;
  }

  .navContact-print{
    display: inline-block;
    margin-left: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    
  }
  .footer-print{
    display: none;
  }
}
`;

export default GlobalStyle;
