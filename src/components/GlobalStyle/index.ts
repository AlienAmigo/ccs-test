import { createGlobalStyle } from 'styled-components';
import InterBoldWoff2Font from 'assets/fonts/Inter-Bold.woff2';
import InterBoldWoffFont from 'assets/fonts/Inter-Bold.woff';
import InterRegularWoff2Font from 'assets/fonts/Inter-Regular.woff2';
import InterRegularWoffFont from 'assets/fonts/Inter-Regular.woff';

import { COLORS, FONTS } from 'components/UIKit/Style';

const GlobalStyle = createGlobalStyle`

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

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  &::selection {
    color: ${COLORS.WHITE};
    background-color: ${COLORS.MAIN};
    }
  }

  button {
    font-family: ${FONTS.INTER};
  }

  body {
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    font-family: ${FONTS.INTER};
    line-height: ${FONTS.LINE_HEIGHT};
  }

  div#root {
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
