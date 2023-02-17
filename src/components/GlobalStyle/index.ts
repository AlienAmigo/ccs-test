import { createGlobalStyle } from 'styled-components';
import InterBoldWoff2Font from 'assets/fonts/Inter-Bold.woff2';
import InterBoldWoffFont from 'assets/fonts/Inter-Bold.woff';
import InterRegularWoff2Font from 'assets/fonts/Inter-Regular.woff2';
import InterRegularWoffFont from 'assets/fonts/Inter-Regular.woff';

const GlobalStyle = createGlobalStyle`
  
:root {

  /* 1. Colors */

  --main-color: #4859f0;
  --submain-color: #c8cdfb;

  --white-color: #ffffff;
  --black-color: #000000;

  --text-color: #212121;

  --gray-dark: #6f6f6f;
  --gray-medium-color: #9b9591;
  --gray-light-color: #f5f5f5;

  --background-color: var(--gray-light-color);

  --transparent-color: rgba(255, 255, 255, 0);
  
  /* 2. Typography */
  
  @font-face {
    font-family: Inter;
    src:
      url(${InterRegularWoff2Font}) format('woff2'),
      url(${InterRegularWoffFont}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: Inter;
    src:
      url(${InterBoldWoff2Font}) format('woff2'),
      url(${InterBoldWoffFont}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  --inter-font: 'Inter', Arial, Helvetica, sans-serif; /* stylelint-disable-line value-keyword-case */;
  --font-size: 16px;
  --line-height: 1.4;
  
  font-family: var(--inter-font);
  font-size: var(--font-size);
  line-height: var(--line-height);
  
  /* 3. Screen  */
  
  --screen-xs: 480px;
  --screen-sm: 768px;
  --screen-lg: 1440px;
  
  --gap-xs: 24px;
  --gap-sm: 16px;
  --gap-lg: 24px;
  
/*   4. z-index */
  
  --z-mobile-menu: 1200;
  --z-up-btn: 2500;
  --z-menu: 1100;
  --z-modal: 1000;
  --z-loader: 3000;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  &::selection {
    color: var(--white-color-color);
    background-color: var(--main-color);
    }
  }

  button {
    font-family: var(--inter-font);
  }

  body {
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }

  div#root {
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 100vw;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
