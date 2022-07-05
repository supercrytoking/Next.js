import styled, { createGlobalStyle } from 'styled-components';
import { ButtonInput } from '../Inputs';

export const AppGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'San Francisco Pro Display';
    src: url('/assets/fonts/SFProDisplay-Regular.eot');
    src: url('/assets/fonts/SFProDisplay-Regular.eot#iefix')
    format('embedded-opentype'),
    url('/assets/fonts/SFProDisplay-Regular.woff') format('woff'),
    url('/assets/fonts/SFProDisplay-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'San Francisco Pro Display';
    src: url('/assets/fonts/SFProDisplay-Medium.eot');
    src: url('/assets/fonts/SFProDisplay-Medium.eot#iefix')
    format('embedded-opentype'),
    url('/assets/fonts/SFProDisplay-Medium.woff') format('woff'),
    url('/assets/fonts/SFProDisplay-Medium.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Miami Sans';
    src: url('/assets/fonts/MiamiSans-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Miami Sans';
    src: url('/assets/fonts/MiamiSans-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  
  :root {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    font-size: 14px !important;
    background-clip: content-box !important;
    background-color: #ffffff;
    -webkit-box-shadow: 0 0 0 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'San Francisco Pro Display', sans-serif;
  }

  table,
  tbody,
  tr,
  td,
  ul {
    &:focus {
      outline: none;
    }
  }
`;

export const RoundIconButton = styled(ButtonInput)`
  padding: 7px;
  background: #f1f3f4;
  border-radius: 6px;
  &:hover {
    background: #eee;
  }
`;
