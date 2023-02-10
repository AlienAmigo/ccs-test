// 1. Цвета

export const COLORS = {
  MAIN: `#4859f0`,
  SUBMAIN: `#c8cdfb`,

  WHITE: `#ffffff`,
  BLACK: `#000000`,

  TEXT_COLOR: `#212121`,

  GRAY_DARK: `#6f6f6f`,
  GRAY_MEDIUM: `#9b9591`,
  GRAY_LIGHT: `#f5f5f5`,

  BACKGROUND: `#f5f5f5`,

  TRANSPARENT: `rgba(255, 255, 255, 0)`,

  get TEXT() {
    return this?.TEXT_COLOR;
  }
};

// 2. Типографика

export const FONTS = {
  INTER: `'Inter', Arial, Helvetica, sans-serif; /* stylelint-disable-line value-keyword-case */`,
  FONT_SIZE: `16px`,
  LINE_HEIGHT: `1.4`,
  LIST_ITEM_INDENT: `2.5em`
};

// 3. Сетка

// Containers
export const CONTAINERS = {
  XS: `360px`,
  SM: `768px`,
  LG: `1440px`
};

// Breakpoints
export const SCREEN = {
  XS: `360px`,
  SM: `768px`,
  LG: `1440px`
};

/* stylelint-enable */

// 4. z-index

export const Z_INDEX = {
  MOBILE_MENU: 300,
  UP_BTN: 250,
  MENU: 100,
  MODAL: 1000
};
